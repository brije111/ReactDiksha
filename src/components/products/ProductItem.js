import React, { Component } from "react";
import { Image, Col, Card, Button } from "react-bootstrap";
import {Link } from "react-router-dom";
import { connect } from "react-redux";

function ProductItem(props) {
  const data = props.data;
  return (
    <Col sm={6} md={4} lg={3}>
      <Card className="m-1">
        <div className="m-1">
          <Image style={{height:200}} src="/assets/images/img_2.png" fluid />
          <h6
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              maxLines: 1
            }}
          >
            {data.name}
          </h6>
          <span style={{ color: "grey"}}>Price : </span>
          {"$ "+(data.price)}
          <br />
          <span style={{ color: "grey" }}>modelNo : </span>
          {data.modelNo}
          <br />
          <span style={{ color: "grey" }}>imei : </span>
          {data.imei}
            <br /><br />
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to={"/detail/"+data.imei}
          >
            <Button className='m-1' variant="secondary">View Detail</Button>
          </Link>
          <Button className='m-1'
            variant="primary"
            onClick={() => props.onAddToCartClick(data.serialNo)}
          >
            Add to Cart
          </Button>
        </div>
      </Card>
    </Col>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.crt.cart
  };
};

export default connect(mapStateToProps)(ProductItem);
