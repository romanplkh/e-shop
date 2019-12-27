import React from "react";
import InventoryOverview from "../../components/inventory-overview/inventory-overview";
import GroupPage from "../group/grouppage";
import { Route } from "react-router-dom";

const Shop = ({ match }) => {
  return (
    <React.Fragment>
      <Route exact path={`${match.path}`} component={InventoryOverview} />
      <Route  path={`${match.path}/:groupId`} component={GroupPage} />
    </React.Fragment>
  );
};

export default Shop;
