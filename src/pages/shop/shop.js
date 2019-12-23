import React, { Component } from "react";
import { inventory } from "../mocks/shop-inventory";
import PreviewList from "../../components/preview-list/preview-list";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems: inventory
    };
  }

  render() {
    const { listItems } = this.state;
    return (
      <div>
        {listItems.map(({ id, ...listItemDetails }) => {
          return <PreviewList key={id} {...listItemDetails} />;
        })}
      </div>
    );
  }
}

export default Shop;
