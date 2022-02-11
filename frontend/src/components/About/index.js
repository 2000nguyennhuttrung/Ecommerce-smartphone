import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button, TextField, Typography } from "@material-ui/core";

import Carousel from "react-bootstrap/Carousel";
import styles from "./styles";
import about1 from "./../../assets/aboutImg/about1.png";
import about2 from "./../../assets/aboutImg/about2.png";
import about3 from "./../../assets/aboutImg/about3.png";
import about4 from "./../../assets/aboutImg/about4.png";


class About extends Component {
  render() {
    const { classes } = this.props;

    // const imageData = [
    //   "https://www.adslzone.net/app/uploads-adslzone.net/2021/03/samsung-neo-qled-2021.jpg",
    //   "https://www.adslzone.net/app/uploads-adslzone.net/2021/01/Samsung-MicroLED_DL4.jpg",
    //   "https://images.frandroid.com/wp-content/uploads/2021/03/samsung-neo-qled-8k-micro-led-1200x799.jpg",
    //   "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/27/637683352742070354_xiaomi-redmi-note-10s-tim-3.jpg",
    //   "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/26/637682610161171188_xiaomi-redmi-note-10s-tim-4.jpg",
    //   "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/27/637683352735664112_xiaomi-redmi-note-10s-tim-5.jpg",
    //   "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/27/637683352742070354_xiaomi-redmi-note-10s-tim-3.jpg",
    //   "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/26/637682610161171188_xiaomi-redmi-note-10s-tim-4.jpg",
    //   "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/27/637683352735664112_xiaomi-redmi-note-10s-tim-5.jpg",
    // ];

    const imageData = [
      about1,
      about2,
      about3,
      about4,
    ];
    return (
      <div className={classes.root}>
        <Carousel variant="dark">
          {imageData.map((image) => {
            return (
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt="First slide"
                  className={classes.img}
                />
                {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default withStyles(styles)(About);
