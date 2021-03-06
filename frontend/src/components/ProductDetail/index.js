import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as productActions from "./../../actions/products";
import * as cartActions from "./../../actions/cart";
import { bindActionCreators } from "redux";
import { Grid } from "@material-ui/core";
import Carousel from "react-bootstrap/Carousel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { NavLink } from "react-router-dom";
import styles from "./styles";
import CartContainer from "./../../containers/CartContainer";
import RecommendedProducts from "./../RecommendedProducts/index";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      brand: "",
      name: "",
      price: null,
      image: "",
      imageListSlide: "",
      video: "",
      screenTech: "",
      pixelRadio: "",
      screenSize: "",
      brightness: "",
      frontCamera: "",
      rearCamera: "",
      cpu: "",
      chip: "",
      speed: "",
      ram: "",
      rom: "",
      sdCard: "",
      carts: []
    };
  }

  componentDidMount() {
    const { cartActionsCreators, productActionCreators, match } = this.props;
    const { getProductById, getProductByIdSuccess } = productActionCreators;
    if (match) {
      var id = match.params.id;
    }

    const { actFetchAllCartRequest } = cartActionsCreators;
    actFetchAllCartRequest();
    getProductById(id);

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.productDetail.id,
      brand: nextProps.productDetail.brand,
      name: nextProps.productDetail.name,
      price: nextProps.productDetail.price,
      image: nextProps.productDetail.image,
      imageListSlide: nextProps.productDetail.imageListSlide,
      video: nextProps.productDetail.video,
      screenTech: nextProps.productDetail.screenTech,
      pixelRadio: nextProps.productDetail.pixelRadio,
      screenSize: nextProps.productDetail.screenSize,
      brightness: nextProps.productDetail.brightness,
      frontCamera: nextProps.productDetail.frontCamera,
      rearCamera: nextProps.productDetail.rearCamera,
      cpu: nextProps.productDetail.cpu,
      chip: nextProps.productDetail.chip,
      speed: nextProps.productDetail.speed,
      ram: nextProps.productDetail.ram,
      rom: nextProps.productDetail.rom,
      sdCard: nextProps.productDetail.sdCard,
      carts: nextProps.cartOnStore,
    });
  }

  addToCart = (e) => {
    const { cartActionsCreators } = this.props;
    const { actAddToCartRequest, actUpdateCartRequest } = cartActionsCreators;

    const { id, name, image, price } = this.state;
    let cart = {
      idCart: id,
      name: name,
      image: image,
      price: price,
      quantity: 1
    };
    let cartUpdate = {};

    const { carts } = this.state;

    let checkCart = false;

    if (carts.length === 0) {
      actAddToCartRequest(cart);
    }
    else {
      for (let i = 0; i < carts.length; i++) {
        if (cart.idCart === carts[i].idCart) {
          checkCart = true;
          cartUpdate = carts[i];
        }
      }
      if (checkCart === true) {
        actUpdateCartRequest(cartUpdate.idCart, 1, cartUpdate);
      }
      else {
        actAddToCartRequest(cart);
      }
    }
  }

  render() {

    var { classes } = this.props;
    var {
      id,
      brand,
      name,
      price,
      image,
      imageListSlide,
      video,
      screenTech,
      pixelRadio,
      screenSize,
      brightness,
      frontCamera,
      rearCamera,
      cpu,
      chip,
      speed,
      ram,
      rom,
      sdCard
    } =
      this.state;

    try {
      imageListSlide = imageListSlide.split(',');
    } catch (e) {

      setTimeout(() => {
        imageListSlide = imageListSlide.split(',');
        alert("Delay 500 milisecond");
      }, 500);
    }


    // Backup
    // imageListSlide = imageListSlide.split(',');

    return (
      <Fragment>
        <div className={`container ${classes.root}`}>
          {/* Show anh */}
          <div className={classes.imageList}>
            {/* <h5 className={classes.title}>Smart phone</h5> */}
            <Carousel fade variant="dark">
              {imageListSlide.map((image, index) => {
                return (
                  <Carousel.Item className={classes.imgFrame} key={index}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt="Photo"
                      className={classes.img}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>

          {/* Cac module va thong so cua samart phone  */}
          <div className={`container ${classes.modulesAndProp}`}>
            <Grid
              className={classes.controlModuleWrapper}
              container
              spacing={3}
            >
              <Grid item xs={12}>
                <NavLink
                  to="/cart"
                  className={classes.addToCart}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.btnBuy}
                    onClick={this.addToCart}
                  >
                    Th??m v??o gi??? h??ng{" "}
                    <AddShoppingCartIcon
                      fontSize="large"
                      style={{ marginLeft: "5px" }}
                    />
                  </Button>
                </NavLink>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btnBuyWithTerm}
                >
                  Tr??? g??p 0%
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btnBuyWithTerm}
                >
                  Tr??? g??p qua th???
                </Button>
              </Grid>
            </Grid>

            <Grid className={classes.infoModuleWrapper}>
              <i>
                <Typography variant="h4" component="h3">
                  {name}
                </Typography>
              </i>

              <Typography variant="h4" component="h3" color="secondary">
                {price}
                <AttachMoneyOutlinedIcon color="secondary" fontSize="inherit" />
              </Typography>
              <i>
                <Typography variant="h6" component="h6">
                  Nh???n ngay khuy???n m???i ?????c bi???t
                </Typography>
              </i>
              <p>
                <CheckCircleIcon color="error" />
                Gi???m ngay 2.000.000?? ??p d???ng ?????n 11/10{" "}
              </p>
              <p>
                <CheckCircleIcon color="error" />
                Tr??? g??p 0% Gi???m ?????n 300.000?? khi mua b???o h??nh (r??i v??? + v??o
                n?????c) k??m m??y Xem chi ti???t
              </p>
            </Grid>
          </div>

          {/* Video v?? th??ng s???*/}
        </div>
        <div className={`container ${classes.videoAndDesc}`}>
          {/* Video */}
          <div className={classes.videoWrapper}>
            <iframe
              className={classes.videoFrame}
              src={video}
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
          </div>

          {/* Th??ng s??? */}
          <div className={classes.infoPhoneWrapper}>
            <Button
              variant="contained"
              color="primary"
              className={classes.titleInfoPhone}
            >
              Th??ng s??? ??i???n tho???i
            </Button>
            {/* M??n h??nh */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b>M??N H??NH</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.borderline}>
                  <i>C??ng ngh??? m??n h??nh:</i> {screenTech}
                </Typography>
                <Typography className={classes.borderline}>
                  <i>????? ph??n gi???i:</i> {pixelRadio}
                </Typography>
                <Typography className={classes.borderline}>
                  <i>M??n h??nh r???ng:</i> {screenSize}
                </Typography>
                <Typography className={classes.borderline}>
                  <i>????? s??ng:</i> {brightness}
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* Camera */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b>CAMERA</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.borderline}>
                  <i>Camera tr?????c:</i> {frontCamera}
                </Typography>
                <Typography className={classes.borderline}>
                  <i>Camera sau:</i> {rearCamera}
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* Cpu */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b>H??? ??I???U H??NH</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.borderline}>
                  <i>H??? ??i???u h??nh:</i> {cpu}
                </Typography>
                <Typography className={classes.borderline}>
                  <i>Chip x??? l??:</i> {chip}
                </Typography>
                <Typography className={classes.borderline}>
                  <i>T???c ????? cpu:</i> {speed}
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* B??? nh??? v?? l??u tr??? */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b>B??? NH??? & L??U TR???</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.borderline}>
                  <i>Ram:</i> {ram}
                </Typography>
                <Typography className={classes.borderline}>
                  <i>B??? nh??? trong:</i> {rom}
                </Typography>
                <Typography className={classes.borderline}>
                  <i>Th??? nh???:</i> {sdCard}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        {/* San pham goi y*/}
        <div className={`container ${classes.RecommendedProducts}`}>
          <RecommendedProducts brand={this.state.brand} />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productDetail: state.products.productDetail,
    cartOnStore: state.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    productActionCreators: bindActionCreators(productActions, dispatch),
    cartActionsCreators: bindActionCreators(cartActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
);
