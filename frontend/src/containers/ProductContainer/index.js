import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import styles from "./styles";

import * as productActions from "./../../actions/products";
import { bindActionCreators } from "redux";

import Search from "./../../components/Search/index";
import Sort from "./../../components/Sort/index";
import Products from "./../../components/Products/index";
import ProductItem from "./../../components/ProductItem/index";
import ProductDetail from "./../../components/ProductDetail/index";
import Pagination from "./../../components/Pagination/index";

class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paramOrdering: "",
    };
  }

  wrapper = React.createRef();
  componentDidMount() {
    const { productActionCreators } = this.props;
    const { fetchProduct, getProductById } = productActionCreators;
    fetchProduct();
  }

  handlefilter = (e) => {
    let value = e.target.value;
    const { productActionCreators } = this.props;
    const { actSearchProductsRequest } = productActionCreators;

    actSearchProductsRequest(value);

    this.setState({ paramOrdering: value });
  };

  showSearchBox = () => {
    let xhtml = null;
    xhtml = <Search handleChange={this.handlefilter} />;
    return xhtml;
  };

  handleASCOrdering = () => {
    const { productActionCreators } = this.props;
    const { actASCOrderingProductsRequest } = productActionCreators;
    let { paramOrdering } = this.state;
    actASCOrderingProductsRequest(paramOrdering);
  };
  handleDESCOrdering = () => {
    const { productActionCreators } = this.props;
    const { actDESCOrderingProductsRequest } = productActionCreators;
    let { paramOrdering } = this.state;
    actDESCOrderingProductsRequest(paramOrdering);
  };
  showSortBox = () => {
    let xhtml = null;
    xhtml = (
      <Sort
        handleASCOrdering={this.handleASCOrdering}
        handleDESCOrdering={this.handleDESCOrdering}
      />
    );
    return xhtml;
  };

  showProductItem = (products) => {
    let xhtml = null;
    xhtml = (
      <Grid container justifyContent="center" spacing={3}>
        {products.map((product, index) => {
          return <ProductItem product={product} index={index} key={index} />;
        })}
      </Grid>
    );
    return xhtml;
  };

  getCurrentPage = (value) => {
    const { productActionCreators } = this.props;
    const { actPaginationProductsRequest } = productActionCreators;
    actPaginationProductsRequest(value);
  }

  render() {
    const { classes, products, match } = this.props;

    return (
      <Products>
        {/* Search and Sort*/}
        <div className={classes.control}>
          <div className={classes.searchControl}>{this.showSearchBox()}</div>

          <div className={classes.sortControl}>{this.showSortBox()}</div>
        </div>

        <hr />

        {/* ProductItem */}
        <center>{this.showProductItem(products)}</center>

        {/* Pagination */}
        <Pagination getCurrentPage={this.getCurrentPage} />

      </Products>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.listProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    productActionCreators: bindActionCreators(productActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ProductContainer)
);
