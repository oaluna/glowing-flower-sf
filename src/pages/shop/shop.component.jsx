import React, { useEffect, Fragment, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { fetchCollectionsStart } from "redux/shop/shop.actions";
import Spinner from "components/with-spinner/with-spinner.component";

// import CollectionsOverviewContainer from "components/collections-overview/collections-overview.container";
import CollectionPageContainer from "pages/collection/collection.container";
//import SHOP_DATA from "./shop.data";

const CollectionsOverviewContainer = lazy(() =>
  import("components/collections-overview/collections-overview.container")
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (

    <Fragment>
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
    </Fragment>

  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);