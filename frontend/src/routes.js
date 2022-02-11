import React from 'react';
import Home from "./components/Home/index";
import ProductContainer from "./containers/ProductContainer/index";
import ProductDetail from "./components/ProductDetail/index";
import About from "./components/About/index";
import NotFound from "./components/NotFound/index";
import CartContainer from "./containers/CartContainer/index";
import Login from "./components/Login/index";
import Signup from "./components/Signup/index";
import ResetPassword from "./components/ResetPassword/index";
import ResetPasswordConfirm from "./components/ResetPasswordConfirm/index";
import Activate from "./components/Activate/index";
import AccountInfo from "./components/AccountInfo/index";
import BillContainer from "./containers/BillContainer/index";
import ArticleItem from "./components/ArticleItem/index";


const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />
  },
  {
    path: '/products',
    exact: false,
    main: ({ match, location }) => <ProductContainer match={match} location={location} />
  },
  {
    path: '/product/:id',
    exact: false,
    main: ({ location, match }) => <ProductDetail match={match} location={location} />
  },
  {
    path: '/about',
    exact: false,
    main: () => <About />
  },
  {
    path: '/cart',
    exact: false,
    main: ({ match, location }) => <CartContainer match={match} location={location} />
  },
  {
    path: '/login',
    exact: false,
    main: ({ history }) => <Login history={history} />
  },
  {
    path: '/signup',
    exact: false,
    main: () => <Signup />
  },
  {
    path: '/reset-password',
    exact: false,
    main: () => <ResetPassword />
  },
  {
    path: '/reset-password-confirm',
    exact: false,
    main: () => <ResetPasswordConfirm />
  },
  {
    path: '/activate',
    exact: false,
    main: () => <Activate />
  },
  {
    path: '/account-info',
    exact: false,
    main: () => <AccountInfo />
  },
  {
    path: '/bill',
    exact: false,
    main: () => <BillContainer />
  },
  {
    path: '/article/:id',
    exact: false,
    main: ({ match }) => <ArticleItem match={match} />
  },
  {
    path: '',
    exact: false,
    main: () => <NotFound />
  },
];

export default routes;
