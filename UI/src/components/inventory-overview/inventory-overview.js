import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectInventoryPreview } from "../../redux/shop/shop-inventory.selectrors";
import PreviewList from "../preview-list/preview-list";

const InventoryOverview = ({ inventory }) => {
  return (
    <div>
      {inventory.map(({ id, ...listItemDetails }) => {
        return <PreviewList key={id} {...listItemDetails} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  inventory: selectInventoryPreview
});

export default connect(mapStateToProps)(InventoryOverview);
