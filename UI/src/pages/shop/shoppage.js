import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchInventoryStart } from "../../redux/shop/shop.actions";
import InventoryOverviewContainer from "../../components/inventory-overview/inventory-overview.container";
import InventoryPageContainer from "../inventory/intentory.container";

const ShopPage = ({ dispatch, match }) => {
  useEffect(() => {
    dispatch(fetchInventoryStart());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Route
        exact
        path={`${match.path}`} //Use current URL and render OverviewCompoonent
        component={InventoryOverviewContainer}
      />
      <Route
        path={`${match.path}/:groupId`}
        component={InventoryPageContainer}
      />
    </React.Fragment>
  );
};

export default connect(null)(ShopPage);
