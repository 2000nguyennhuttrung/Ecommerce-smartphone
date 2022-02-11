import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button, TextField, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import styles from "./styles";

import importedData from "./data";

class Articles extends Component {
  render() {
    const { classes } = this.props;

    const articles = importedData;

    return (
      <div className={classes.root}>
        <Carousel variant="dark">
          {articles.map((article) => {
            return (
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src={article.background}
                  alt="First slide"
                  className={classes.img}
                />
                <Carousel.Caption>
                  <h3 className={classes.title}>{article.title}</h3>
                  <Link
                    className={classes.linkArticle}
                    to={`article/${article.id}`}
                  >
                    {article.title}
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default withStyles(styles)(Articles);
