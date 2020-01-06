import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsInventoryFetching } from "../../redux/shop/shop-inventory.selectrors";
import WithSpinner from "../hocs/spinner/with-spinner";
import InventoryOverview from "./inventory-overview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsInventoryFetching //we have to keep naming isLoading, because WithSpinner expects us to pass this prop
});

//TAKES COMPONENT AND ENHANCES IT WITH ADDITIONAL PROPS
const InventoryOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(InventoryOverview);

export default InventoryOverviewContainer;
