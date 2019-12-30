import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchInventoryStartAsync } from "../../redux/shop/shop.actions";
import InventoryOverviewContainer from "../../components/inventory-overview/inventory-overview.container";
import InventoryPageContainer from "../inventory/intentory.container";

class ShopPage extends Component {
  componentDidMount() {
    //GET dispatch from PROPS
    const { dispatch } = this.props;
    //FETCH DATA TO APP
    dispatch(fetchInventoryStartAsync());
  }

  render() {
    const { match } = this.props;
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
  }
}

export default connect(null)(ShopPage);
