import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Grid, Button } from "@material-ui/core";
import Articles from "./../Articles/index";
class Home extends Component {
  render() {
    let { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} className={classes.leftSide}>
              <div className={classes.content}>
                <h4 className={classes.title}>
                  Chào mừng bạn đến với website của chúng tôi
                </h4>
                <i>
                  Chúng tôi luôn sẵn sàng với mọi điều kiện của bạn. Bạn cứ đến
                  đây gặp chúng tôi, đừng lo lắng gì cả. Sự thật thì luôn luôn đơn
                  giản nhưng people make it complicated, nên mình cứ enjoy cái
                  moment này.
                </i>
                <br />
                <Button
                  variant="contained"
                  href="/login"
                  // style={{ backgroundColor: "rgb(221,43,128)" }}
                  className={classes.btnNextPage}
                >
                  Đăng nhập
                </Button>
              </div>
              <div className={classes.rightSide}>
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2019/8/8/637008710284136121_SS-note-10-pl-trang-1-1.png"
                  alt="Photo"
                  className={classes.img}
                />
              </div>
            </Grid>
          </Grid>

        </div>
        <div>
          <Articles />
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Home);
