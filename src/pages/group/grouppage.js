import React from "react";
import PreviewItem from "../../components/preview-item/preview-item";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectGroup } from "../../redux/shop/shop-inventory.selectrors";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const GroupPage = ({ group }) => {
  const { title, items } = group;
  return (
    <div className="p-4">
      <h2>{title}</h2>
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
    </div>
  );
};

//props of the component we wrap
const mapStateToProps = (state, ownProps) => ({
  group: selectGroup(ownProps.match.params.groupId)(state)
});

export default connect(mapStateToProps)(GroupPage);
