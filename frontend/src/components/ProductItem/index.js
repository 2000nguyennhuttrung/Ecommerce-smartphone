import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";

import styles from "./styles";

class ProductItem extends Component {
  render() {
    var { product, index, classes } = this.props;

    return (
      <Grid item xs={6} sm={3} key={index}>
        <Card>
          <CardBody>
            <CardMedia
              component="img"
              alt="Photo"
              height="240"
              weight="240"
              image={product.image}
            />
            <CardText>{product.brand}</CardText>
            <CardText>{product.name}</CardText>
            <CardTitle tag="h5">Giá: {product.price}</CardTitle>

            <Link
              to={`product/${product.id}`}
              className={classes.linkProduct}
            >
              <Button variant="contained" color="primary">
                Chi tiết
              </Button>
            </Link>
          </CardBody>
        </Card>
      </Grid>

    );
  }
}

export default withStyles(styles)(ProductItem);
