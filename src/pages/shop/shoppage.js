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

class ShopPage extends Component {
  fsSnapshotSubscription = null;

  componentDidMount() {
    const { dispatch } = this.props;
    const collectionRef = firestore
      .collection("groups")
      .orderBy("title", "asc");

    //Subscribe to observer and get new data from db as soon as it is updated
    collectionRef.onSnapshot({
      next: async snapshot => {
        //TRANSFORM SNAPSHOT
        const inventory = mapCollectionSnaphotToObject(snapshot);
        //UPDATE REDUX STORE
        dispatch(populateShopInventory(inventory));
      },
      error: err => {
        console.log(err.message, err.name);
      }
    });
  }
  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <Route exact path={`${match.path}`} component={InventoryOverview} />
        <Route path={`${match.path}/:groupId`} component={GroupPage} />
      </React.Fragment>
    );
  }
}

export default connect(null)(ShopPage);
