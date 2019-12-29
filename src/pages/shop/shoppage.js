import React, { Component } from "react";
import InventoryOverview from "../../components/inventory-overview/inventory-overview";
import GroupPage from "../group/grouppage";
import { Route } from "react-router-dom";
import {
  firestore,
  mapCollectionSnaphotToObject
} from "../../firebase/firebase.helpers";
import { populateShopInventory } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
import WithSpinner from "../../components/hocs/spinner/with-spinner";

const InventoryOverviewWithSpinner = WithSpinner(InventoryOverview);
const GroupPageWithSpinner = WithSpinner(GroupPage);

class ShopPage extends Component {
  state = {
    loading: true
  };

  fsSnapshotSubscription = null;

  componentDidMount() {
    const { dispatch } = this.props;
    const collectionRef = firestore
      .collection("groups")
      .orderBy("title", "asc");

    //Subscribe to observer and get new data from db as soon as it is updated
    this.fsSnapshotSubscription = collectionRef.onSnapshot({
      next: async snapshot => {
        //TRANSFORM SNAPSHOT
        const inventory = mapCollectionSnaphotToObject(snapshot);
        //UPDATE REDUX STORE
        dispatch(populateShopInventory(inventory));
        this.setState({ loading: false });
      }
    });
  }

  componentWillUnmount() {
    this.fsSnapshotSubscription();
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <React.Fragment>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <InventoryOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:groupId`}
          render={props => (
            <GroupPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </React.Fragment>
    );
  }
}

export default connect(null)(ShopPage);
