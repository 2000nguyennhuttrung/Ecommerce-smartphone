import React, { Component, Fragment } from "react";

import { withStyles } from "@material-ui/core/styles";
import { Grid, Button, TextField, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Icon from "@material-ui/core/Icon";
import CancelIcon from "@material-ui/icons/Cancel";
import styles from "./styles";

class CartForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  render() {
    let { isOpen } = this.state;
    return <Fragment>{isOpen === true ? this.renderCartForm() : ""}</Fragment>;
  }

  renderCartForm = () => {
    const { classes } = this.props;
    return (
      <center>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" component="h1" className={classes.title}>
                THÔNG TIN CÁ NHÂN{" "}
                <CancelIcon
                  className={classes.btnCancel}
                  fontSize="small"
                  onClick={this.onCancel}
                />
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                label="Họ tên"
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                label="Số điện thoại"
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                label="Địa chỉ"
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12} className={classes.button}>
              <Button
                variant="contained"
                color="primary"
                className={classes.btnSend}
                endIcon={<Icon>send</Icon>}
              >
                Gửi
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.btnDelete}
                endIcon={<DeleteIcon />}
              >
                Hủy
              </Button>
            </Grid>
          </Grid>
        </div>
      </center>
    );
  };

  onCancel = () => {
    this.setState({
      isOpen: false,
    });
  };
}

export default withStyles(styles)(CartForm);
