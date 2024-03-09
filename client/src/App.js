import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { loadUser } from "./actions/auth";
// redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./utils/PrivateRoute";
import { connect } from "react-redux";

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

          <div className='relative flex'>

            <Sidebar />
            {/* <div className="  h-[calc(100vh-72px)]   flex xl:flex-row flex-col-reverse"> */}
            <div className='flex-1 h-fit pb-40'>
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
                    <Route exact path='/dashboard' element={<Dashboard />} />
                  </Route>
                </Routes>
              </section>
            </div>
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