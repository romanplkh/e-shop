import React, {useEffect} from "react";
import PreviewItem from "../../components/preview-item/preview-item";
import { connect } from "react-redux";
import { selectInventory } from "../../redux/shop/shop-inventory.selectrors";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const InventoryPage = ({ group }) => {

  useEffect(() =>{



    //CLEAN UP FUNCTION 
    //IS CALLDED WHEN COMPONENT UNMOUNTS
    return () => {
      console.log("UNSUBSCRIBING....")
      someSubscription();
    }
  })


  const { title, items } = group;
  return (
    <Container fluid className="p-4 mt-5">
      <h1 className="display-3">{title}</h1>
      <Row className="justify-content-md-start justify-content-sm-center">
        {items.map(item => {
          return (
            <Col
              xl={3}
              lg={4}
              md={6}
              sm={9}
              key={item.id}
              className="mt-md-3 mt-sm-4"
            >
              <PreviewItem item={item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

//props of the component we wrap
const mapStateToProps = (state, ownProps) => ({
  group: selectInventory(ownProps.match.params.groupId)(state)
});

export default connect(mapStateToProps)(InventoryPage);
