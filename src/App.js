import React, { Fragment } from 'react';

import { connect } from 'react-redux';

import { Router } from '@reach/router';

import { Login } from './pages/Login/Login';
import Dashboard  from './pages/Dashboard/Dashboard';
import { Categories } from './pages/Categories/Categories';
import Users from './pages/Users/Users';
import { Colors } from './pages/Colors/Colors';
import { Images } from './pages/Images/Images';

import { GlobalStyles } from './GlobalStyles';

const App = ({ authUser }) => {
  return (
    <Fragment>
      <GlobalStyles/>
      <Router>
        {!authUser && <Login path="/"/> }
        {authUser && <Dashboard path="/"/> }
        {authUser && <Categories path="/categories"/>}
        {authUser && <Users path="/users"/>}
        {authUser && <Colors path="/colors"/>}
        {authUser && <Images path="/images"/>}
        {!authUser && <Login path="/dashboard"/> }
        {!authUser && <Login path="/login"/> }
        <Dashboard path="/dashboard"/>
      </Router>
    </Fragment>
  )
}

const mapStateToProps = ({ user: { authUser }}) => {
  return { authUser }
}

export default connect(mapStateToProps)(App);