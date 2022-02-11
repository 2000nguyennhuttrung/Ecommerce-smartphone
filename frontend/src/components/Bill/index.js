import React, { Component, Fragment } from "react";
import styles from "./styles";

class Bill extends Component {
  render() {
    return (
      <Fragment>
        <center><h2 style={{ marginTop: "5px", marginBottom: "15px", fontWeight: "bold", color: "rgba(0,0,0,0.7)" }}>ĐƠN HÀNG</h2></center>
        <table className="table product-table" style={{ height: "50vh" }}>
          <thead>
            <tr>
              <th />
              <th>Sản Phẩm</th>
              <th>Giá</th>
              <th>Số Lượng</th>
              <th>Tổng Cộng</th>
              <th>Trạng Thái</th>
              <th />
            </tr>
          </thead>
          <tbody style={{ verticalAlign: "middle" }}>
            {this.props.children}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default Bill;
