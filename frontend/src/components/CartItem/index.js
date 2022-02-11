import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import * as cartActions from "./../../actions/cart";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles";


class CartItem extends Component {
  onDeleteCart = (id) => {
    const { onDeleteCart } = this.props;
    onDeleteCart(id);
  }

  updateQuantity = (id, quantity, product) => {
    const { onUpdateQuantity } = this.props;
    onUpdateQuantity(id, quantity, product);
  }

  render() {
    const { cartItem } = this.props;
    return <Fragment>{cartItem !== null ? this.renderCartItem() : ""}</Fragment>;
  }

  renderCartItem = () => {
    const { classes, cartItem } = this.props;
    return (
      <tr className={classes.root}>
        <th scope="row" style={{ width: "20%" }}>
          <img
            src={cartItem.image}
            alt="Photo"
            className="img-fruid z-depth-0"
            style={{ height: "50%", width: "50%" }}
          />
        </th>
        <td>
          <h5>
            <Typography variant="h6" component="h6">
              {cartItem.name}
            </Typography>
          </h5>
        </td>
        <td>{cartItem.price} vnd</td>
        <td className="center-on-small-only">
          <div>
            <Fab
              size="small"
              color="primary"
              aria-label="remove"
              variant="extended"
              onClick={() => this.updateQuantity(cartItem.idCart, -1, cartItem)}
              style={{
                marginRight: "5px",
              }}
              className={classes.btnQuantity}
            >
              <RemoveIcon />
            </Fab>

            <span className="qty">{cartItem.quantity}</span>

            <Fab
              size="small"
              color="primary"
              aria-label="add"
              variant="extended"
              onClick={() => this.updateQuantity(cartItem.idCart, 1, cartItem)}
              style={{
                marginLeft: "5px",
              }}
              className={classes.btnQuantity}
            >
              <AddIcon />
            </Fab>
          </div>
        </td>
        <td>
          <Typography variant="h6" component="h6">
            {cartItem.price * cartItem.quantity} vnd
          </Typography>
        </td>
        <td>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.onDeleteCart(cartItem.idCart)}
            style={{ backgroundColor: "rgb(131,172,236)" }}
          >
            <DeleteIcon />
          </Button>
        </td>
      </tr>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cartActionCreators: bindActionCreators(cartActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(CartItem)
);
