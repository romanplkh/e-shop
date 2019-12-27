import React from "react";
import PreviewList from "../../components/preview-list/preview-list";
import { connect } from "react-redux";
import { selectShopInventory } from "../../redux/shop/shop-inventory.selectrors";
import { createStructuredSelector } from "reselect";

const Shop = ({ inventory }) => {
  return (
    <div>
      {inventory.map(({ id, ...listItemDetails }) => {
        return <PreviewList key={id} {...listItemDetails} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  inventory: selectShopInventory
});

export default connect(mapStateToProps)(Shop);
