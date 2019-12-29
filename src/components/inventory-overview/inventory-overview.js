import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectGroupsPreview } from "../../redux/shop/shop-inventory.selectrors";
import PreviewList from "../preview-list/preview-list";

const InventoryOverview = ({ inventory }) => {
  // const inventoryData = [];
  // for (let key in inventory) {
  //   inventoryData.push(
  //     <PreviewList key={inventory[key].id} {...inventory[key]} />
  //   );
  // }

  return (
    <div>
      {inventory.map(({ id, ...listItemDetails }) => {
        return <PreviewList key={id} {...listItemDetails} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  inventory: selectGroupsPreview
});

export default connect(mapStateToProps)(InventoryOverview);
