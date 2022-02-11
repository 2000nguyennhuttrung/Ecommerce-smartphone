import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import CardMedia from "@material-ui/core/CardMedia";
import ProductDetail from "./../ProductDetail/index";

import styles from "./styles";

class RecommendedProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const { brand } = this.props;


      fetch(`http://127.0.0.1:8000/products/product-search/?search=${brand}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.setState({ products: data.results });
        });
    }, 500);
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.brand === this.state.id) {
  //     console.log("prevProps:", prevProps.brand);
  //   }
  // }

  reload = (id) => {
    window.location.href = id;
  }

  render() {
    const { classes, brand } = this.props;
    let { products } = this.state;
    products = products.slice(0, 4);

    return (
      <div className={classes.root}>
        <i>
          <h1 style={{ width: "100%" }}>Sản phẩm được đề xuất</h1>
        </i>
        <div className={classes.recommendedProducts}>
          {
            products.map((product, index) => {
              return (
                <Grid item xs={6} sm={3} key={index} >
                  <Card className={classes.productItem}>
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

                      <Button variant="contained" color="primary" onClick={() => this.reload(product.id)}>
                        Chi tiết
                      </Button>

                    </CardBody>
                  </Card>
                </Grid>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(RecommendedProducts);
