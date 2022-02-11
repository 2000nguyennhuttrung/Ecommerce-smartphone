import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

import Pagination from "@mui/material/Pagination";
import { Row, Col } from "react-bootstrap";

class PaginationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      countPage: 1,
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/products/product-list/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ countPage: Math.ceil(data.length / 10) });
      });
    this.props.getCurrentPage(1);
  }

  handleChange = (event, page) => {
    this.setState({ currentPage: page });
    this.props.getCurrentPage(page);
  };

  render() {
    let { classes } = this.props;
    let { currentPage, countPage, productList } = this.state;

    return (
      <div className={classes.root}>
        <Row className={classes.pagination}>
          <Col md={{ span: 6, offset: 3 }}>
            <Pagination
              count={countPage}
              color="primary"
              className={classes.pagination}
              page={currentPage}
              onChange={this.handleChange}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default withStyles(styles)(PaginationComponent);
