import { connect } from "react-redux";
import { compose } from "redux";
import WithSpinner from "../../components/hocs/spinner/with-spinner";
import { createStructuredSelector } from "reselect";
import { selectIsDataLoaded } from "../../redux/shop/shop-inventory.selectrors";
import InventoryPage from "./inventorypage";

//PASS PROPS TO HOC TO MANAGE SPINNER LOADING
const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsDataLoaded(state) //pass ownProps
});

const InventoryPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(InventoryPage);

export default InventoryPageContainer;
