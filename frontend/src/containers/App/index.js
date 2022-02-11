import React, { Component } from "react";

import styles from "./style.js";
import { withStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import configureStore from "../../redux/configureStore";
import GlobalLoading from "./../../components/GlobalLoading";
import theme from "./../../commons/Theme";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div className="container">
            <ToastContainer />
            <GlobalLoading />
            <Header />
          </div>

          <Footer />

        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
