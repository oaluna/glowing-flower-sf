import React, { useEffect, lazy, Suspense, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

<<<<<<< HEAD
// import CollectionsOverviewContainer from "components/collections-overview/collections-overview.container";
import CollectionPageContainer from "pages/collection/collection.container";
//import SHOP_DATA from "./shop.data";
=======
import Spinner from '../../components/with-spinner/with-spinner.component';

import { ShopPageContainer } from './shop.styles';
>>>>>>> 0fb97c7e1f945202459c4ffd39d15fc1b94d2665

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);

const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

export const ShopPage = ({ fetchCollectionsStart, match, path }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <Fragment>
    <ShopPageContainer>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
      </ShopPageContainer>
    </Fragment>

  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);