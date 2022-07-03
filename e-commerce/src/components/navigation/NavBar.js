import React, { useState, useRef } from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

import { MenuOutlined } from '@ant-design/icons';

import logo from '../../assets/glowing-flowers.svg';

import { useCartContext } from '../../context/CartContext';
import useOutsideClick from '../../hooks/useOutsideClick';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import Searchbar from '../../components/searchBar/Searchbar';
import SideBar from '../../components/navigation/SideBar';
import MenuIcons from '../../components/navigation/MenuIcons';
import NavLink from '../../components/navigation/NavLink';

const navigationBarCSS = css`
  background-color: transparent;
  width: 100%;
  padding: 0 40px;
  position: fixed;
  z-index: 10;
`;

const navigationCSS = css`
  font-size: 15px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1440px;
  width: calc(100% - 80px);
  height: 60px;
  color:rgb(166, 38, 57);

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

const toggleMenuCSS = css`
  display: flex;
`;

const toggleMenuIconCSS = css`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    cursor: pointer;
  }
`;

const logoCSS = css`
  text-transform: uppercase;
  padding: 20px 40px;
  text-align: center;
  padding-top: 30px;
  > a {
    font-size: 30px;
    letter-spacing: 3px;
    font-family: 'Playfair Display';
    font-weight: 700;
  }
`;

const menuCSS = css`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    > li {
      display: none;
    }
  }
`;

const NavBar = () => {
  const { open, items = [] } = useCartContext();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [titleTab, setTitleTab] = useDocumentTitle();
  const ref = useRef();

  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={navigationBarCSS}>
      <div className={logoCSS} onClick={() => setTitleTab('Glowing Flowers | Plants & Gifts')}>
        <Link to="/"><img src={logo} alt="Glowing Flowers" /></Link>
      </div>
      <nav className={navigationCSS}>
        <div
          className={toggleMenuCSS}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          <MenuOutlined className={toggleMenuIconCSS} />
        </div>
        <div
          ref={ref}
          className={css`
            margin-right: auto;
          `}
        >
          {isOpen ? (
            <SideBar refe={ref} onClick={() => setIsOpen(false)} />
          ) : (
            <ul className={menuCSS}>
              <NavLink>
                <Link to="/products/all-occasions">All Occasions</Link>
              </NavLink>
              <NavLink>
                <Link to="/products/holidays">Holidays</Link>
              </NavLink>
              <NavLink>
                <Link to="/products/bridal">Bridal</Link>
              </NavLink>
              <NavLink>
                <Link to="/products/well-wishes">Well Wishes</Link>
              </NavLink>
              <NavLink>
                <Link to="/products/deals">Deals</Link>
              </NavLink>
            </ul>
          )}
        </div>

        <MenuIcons
          onClickTitleTab={() => setTitleTab('Account')}
          onClickOpenSearch={(e) => {
            e.stopPropagation();
            setIsOpenSearch(!isOpenSearch);
          }}
          totalQuantity={totalQuantity}
          onClickCart={(e) => {
            e.stopPropagation();
            open(true);
          }}
        />
        {isOpenSearch && <Searchbar onClose={() => setIsOpenSearch(false)} />}
      </nav>
    </header>
  );
};

export default NavBar;
