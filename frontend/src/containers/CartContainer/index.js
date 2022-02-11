import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import * as cartActions from "./../../actions/cart";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "./styles";
import Cart from "./../../components/Cart/index";
import CartItem from "./../../components/CartItem/index";
import CartResult from "./../../components/CartResult/index";
import CartForm from "./../../components/CartForm/index";


class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenFrom: false,
    };
  }

  componentDidMount() {
    const { classes, match, location } = this.props;

    const { cartActionCreators, cart } = this.props;
    const { actAddToCartRequest, actFetchAllCartRequest } = cartActionCreators;
    actFetchAllCartRequest();

  }

  onDeleteCart = (id) => {
    const { cartActionCreators } = this.props;
    const { actDeleteCartRequest } = cartActionCreators;
    actDeleteCartRequest(id);
    window.location.reload();
  };

  onUpdateQuantity = (id, quantity, product) => {
    const { cartActionCreators } = this.props;
    const { actUpdateCartRequest } = cartActionCreators;
    actUpdateCartRequest(id, quantity, product);
  };

  showCartItem = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            cartItem={item}
            index={index}
            onDeleteCart={this.onDeleteCart}
            onUpdateQuantity={this.onUpdateQuantity}
          />
        );
      });
    }

    return result;
  };

  showTotalAmout = (cart) => {
    var result = null;

    if (cart.length > 0) {
      result = <CartResult cartResult={cart} />;
    }

    return result;
  };

  showCartForm = () => {
    return <CartForm />;
  };

  render() {
    const { classes, cart } = this.props;
    let { isOpenFrom } = this.state;
    return (
      <div className={`container ${classes.root}`}>
        <Cart>
          {this.showCartItem(cart)}
          {this.showTotalAmout(cart)}
          {/* {isOpenFrom === false ? (
            <CartForm onOpenForm={this.onOpenForm} />
          ) : null} */}
        </Cart>
        {/* {this.showCartForm()} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cartActionCreators: bindActionCreators(cartActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(CartContainer)
);
