import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as accountActions from "./../../actions/accounts";
import * as billActions from "./../../actions/bills";
import * as cartActions from "./../../actions/cart";
import { Redirect } from "react-router-dom";
import styles from "./styles";

class CartResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkAddToBill: false,
    };
  }

  componentDidMount() {
    const { accountActionCreators } = this.props;
    const { actFetchUserDetailRequest } = accountActionCreators;

    let accInfo = JSON.parse(localStorage.getItem("account"));

    try {
      actFetchUserDetailRequest(accInfo.username);
    } catch (err) {
      console.log("Lỗi: chưa đăng nhập.");
    }
  }

  totalAmout = (cartResult) => {
    var total = null;
    if (cartResult.length > 0) {
      for (let i = 0; i < cartResult.length; i++) {
        total += cartResult[i].price * cartResult[i].quantity;
      }
    }
    return total;
  };

  setData = () => {
    let { cart, accounts } = this.props;
    let data = {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      product_name: "",
      image: "",
      price: 0,
      quantity: 0,
      status: false,
    };
    let arrData = [];
    cart.map((item) => {
      data = {
        username: accounts.accountInfo.username,
        first_name: accounts.accountInfo.first_name,
        last_name: accounts.accountInfo.last_name,
        email: accounts.accountInfo.email,
        product_name: item.name,
        image: item.image,
        price: item.price,
        quantity: item.quantity,
        status: false,
      };
      arrData.push(data);
    });

    return arrData;
  };

  addToBill = () => {
    const arrData = this.setData();
    const { cartActionCreators, billActionCreators, cart } = this.props;
    const { actAddToBillRequest } = billActionCreators;
    const { actDeleteCartRequest } = cartActionCreators;

    let accInfo = JSON.parse(localStorage.getItem("account"));

    if (accInfo) {
      for (let i = 0; i < arrData.length; i++) {
        actAddToBillRequest(arrData[i]);
        actDeleteCartRequest(cart[i].idCart);
      }
      this.setState({ checkAddToBill: true });
    } else {
      alert("Bạn chưa đăng nhập. Hãy đăng nhập để thực hiện tác vụ này.");
    }
  };

  render() {
    if (this.state.checkAddToBill === true) {
      return <Redirect to="/bill" />;
    }

    const { classes, cartResult } = this.props;
    return (
      <Fragment>
        <tr>
          <td colSpan={3} />
          <td>
            <h4>
              <strong>Tổng Tiền</strong>
            </h4>
          </td>

          <td>
            <h4>
              <strong>{this.totalAmout(cartResult)}$</strong>
            </h4>
          </td>
          <td colSpan={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.addToBill}
              style={{ backgroundColor: "rgba(245,0,87,0.5)" }}
            >
              Xác nhận mua <CheckBoxIcon style={{ marginLeft: "5px" }} />
            </Button>
            {/* <CartFormDialog /> */}
          </td>
        </tr>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    accounts: state.accounts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    accountActionCreators: bindActionCreators(accountActions, dispatch),
    billActionCreators: bindActionCreators(billActions, dispatch),
    cartActionCreators: bindActionCreators(cartActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(CartResult)
);
