import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button, TextField, Typography } from "@material-ui/core";

import styles from "./styles";

import importedData from "./data";
import { ContactSupportOutlined } from "@material-ui/icons";

class ArticleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      article: {},
    };
  }
  componentDidMount() {
    const { match } = this.props;

    let index = this.findIndex(importedData, match.params.id);
    this.setState({ id: match.params.id, article: importedData[index] });
  }

  findIndex = (data, id) => {
    let result = -1;
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id.toString() === id) {
          result = i;
          break;
        }
      }
    }
    return result;
  };

  render() {
    const { classes } = this.props;
    const { id, article } = this.state;

    return (
      <div className={classes.root}>
        <center>
          <h3>{article.headerTitle}</h3>
        </center>
        <br />

        {/* Body 1*/}
        <div>
          <i>
            <h5>{article.titleItem1}</h5>
          </i>
          <center>
            <img src={article.image1} alt="Photo" />
          </center>
          <p>{article.content1}</p>
        </div>

        {/* Body 2*/}
        <div>
          <i>
            <h5>{article.titleItem2}</h5>
          </i>
          <center>
            <img src={article.image2} alt="Photo" />
          </center>
          <p>{article.content2}</p>
        </div>

        {/* Body 3*/}
        <div>
          <i>
            <h5>{article.titleItem3}</h5>
          </i>
          <center>
            <img src={article.image3} alt="Photo" />
          </center>
          <p>{article.content3}</p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ArticleItem);
