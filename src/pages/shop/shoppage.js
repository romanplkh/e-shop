import React, { Component } from "react";
import InventoryOverview from "../../components/inventory-overview/inventory-overview";
import GroupPage from "../group/grouppage";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import WithSpinner from "../../components/hocs/spinner/with-spinner";
import { fetchInventoryStartAsync } from "../../redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import { selectIsInventoryFetching } from "../../redux/shop/shop-inventory.selectrors";

const InventoryOverviewWithSpinner = WithSpinner(InventoryOverview);
const GroupPageWithSpinner = WithSpinner(GroupPage);

class ShopPage extends Component {
  componentDidMount() {
    //GET dispatch from PROPS
    const { dispatch } = this.props;

    //FETCH DATA TO APP
    dispatch(fetchInventoryStartAsync());
  }

  render() {
    const { match, isDataFetching } = this.props;

    return (
      <React.Fragment>
        <Route
          exact
          path={`${match.path}`} //Use current URL and render OverviewCompoonent
          render={props => (
            <InventoryOverviewWithSpinner
              isLoading={isDataFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:groupId`}
          render={props => (
            <GroupPageWithSpinner isLoading={isDataFetching} {...props} />
          )}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isDataFetching: selectIsInventoryFetching
});

export default connect(mapStateToProps)(ShopPage);
