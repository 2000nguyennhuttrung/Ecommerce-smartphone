import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";

import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import styles from "./styles";

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return <Fragment>{this.renderFooter()}</Fragment>;
  }

  renderFooter = () => {
    let { classes } = this.props;
    return (

      <div className={classes.root}>
        <center>
          <h3>Smart Phone</h3>
          <h6>Địa chỉ: 256 Nguyễn Văn Cừ, Quận Ninh Kiều, Thành phố Cần Thơ</h6>
          <i>Gmail: smartphone@gmail.com</i>
          <br />
          <hr />

          <FacebookIcon className={classes.icon} fontSize="medium" />
          <MailIcon className={classes.icon} fontSize="medium" />
          <InstagramIcon className={classes.icon} fontSize="medium" />
          <TwitterIcon className={classes.icon} fontSize="medium" />
        </center>
      </div>

    );
  };
}

export default withStyles(styles)(Footer);
