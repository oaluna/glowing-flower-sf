import styled from 'styled-components';

export const StyledCalendar = styled.div`
  height: auto;
  width: 25%;
  background: pink;
  position: relative;
  margin-left: 15rem;
  margin-top: 0rem;
  border-radius: 0.3rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: row;
  &.react-calendar {
    width: 80%;
    margin-left: 15rem;
    border-radius: 0.3rem;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    border: none;
    padding: 2rem;
    z-index: 50;
  }
`;

export const CalendarContainer = styled.div`
  width: 100%;
  height: 60vh;

  border: 1px solid rgba(255, 255, 255, 0.2);
  span {
    color: #19144d;
  }
`;

export const CalendarMonth = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0 1rem 0;
  font-weight: thin;
`;

export const CalendarDay = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 2rem;
  span {
    font-weight: bold;
  }
`;
export const CalendarWeekday = styled.div`
  width: 100%;
  font-family: sans-serif;
  color: red;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  justify-content: space-around;
  grid-gap: 1rem;
  &span {
    font-size: 11px;
    font-weight: 800 !important;
  }
`;
export const PreviousMonth = styled.span`
  color: lightgrey;
`;
