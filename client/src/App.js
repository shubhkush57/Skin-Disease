import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import Landing from "./components/layout/Landing";
import Alert from "./components/layout/Alert";
import Search from "./components/dashboard/Search";
import { loadUser } from "./actions/auth";
// redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import SearchDisease from "./components/layout/SearchDisease";
import { connect } from "react-redux";
import Footer from "./components/layout/Footer";
import About from "./components/layout/About";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({ isAuthenticated }) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Router>
        <Fragment>

          <div className='flex flex-col min-h-screen'>

            <div className='flex-1 h-fit pb-0'>
              <Navbar />

              <section>
                <Alert />
                <Routes>
                  <Route exact path='/' element={<Landing />} />
                  {/* //modify this */}
                  <Route exact path='/register' element={<Register />} />
                  <Route exact path='/login' element={<Login />} />

                  {/*  after this*/}
                  <Route element={<PrivateRoute />}>
                    {/**private routes we can start from here what we wanto  */}
                    <Route exact path='/dashboard' element={<Dashboard />} />
                    <Route exact path = "/search" element = {<SearchDisease />} />
                    <Route exact path = '/about' element = {<About />}/>
                    <Route exact path="/searchdisease" element = {<Search />} />
                  </Route>
                </Routes>
              </section>
            </div>
            <Footer />

          </div>

          
        </Fragment>
      </Router>
    </>

    
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(App);