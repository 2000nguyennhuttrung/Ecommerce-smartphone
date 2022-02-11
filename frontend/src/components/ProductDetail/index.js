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
                    Thêm vào giỏ hàng{" "}
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
                  Trả góp 0%
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btnBuyWithTerm}
                >
                  Trả góp qua thẻ
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
                  Nhận ngay khuyến mại đặc biệt
                </Typography>
              </i>
              <p>
                <CheckCircleIcon color="error" />
                Giảm ngay 2.000.000đ áp dụng đến 11/10{" "}
              </p>
              <p>
                <CheckCircleIcon color="error" />
                Trả góp 0% Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào
                nước) kèm máy Xem chi tiết
              </p>
            </Grid>
          </div>

          {/* Video và thông số*/}
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

          {/* Thông số */}
          <div className={classes.infoPhoneWrapper}>
            <Button
              variant="contained"
              color="primary"
              className={classes.titleInfoPhone}
            >
              Thông số điện thoại
            </Button>
            {/* Màn hình */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b>MÀN HÌNH</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.borderline}>
                  <i>Công nghệ màn hình:</i> {screenTech}
                </Typography>
                <Typography className={classes.borderline}>
                  <i>Độ phân giải:</i> {pixelRadio}
                </Typography>
                <Typography className={classes.borderline}>
                  <i>Màn hình rộng:</i> {screenSize}
                </Typography>
                <Typography className={classes.borderline}>
                  <i>Độ sáng:</i> {brightness}
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
                  <i>Camera trước:</i> {frontCamera}
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
                  <b>HỆ ĐIỀU HÀNH</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.borderline}>
                  <i>Hệ điều hành:</i> {cpu}
                </Typography>
                <Typography className={classes.borderline}>
                  <i>Chip xử lí:</i> {chip}
                </Typography>
                <Typography className={classes.borderline}>
                  <i>Tốc độ cpu:</i> {speed}
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* Bộ nhớ và lưu trữ */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b>BỘ NHỚ & LƯU TRỮ</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.borderline}>
                  <i>Ram:</i> {ram}
                </Typography>
                <Typography className={classes.borderline}>
                  <i>Bộ nhớ trong:</i> {rom}
                </Typography>
                <Typography className={classes.borderline}>
                  <i>Thẻ nhớ:</i> {sdCard}
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
