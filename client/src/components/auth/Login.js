import React, { Fragment, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";
import Header from "./Header";

// const navigate = useNavigate();
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
    console.log(isAuthenticated);
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  const fixedInputClass =
    "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

  return (
    <Fragment>
      <section className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20 ">
              <div className="w-5/3 h-92 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-zinc-700 dark:border-gray-700">
                <Header
                  heading="Login"
                  paragraph="Don't have an account? "
                  linkName="Register"
                  linkUrl="/register"
                />
                <form className="mt-8 space-y-6" onSubmit={(e) => onSubmit(e)}>
                  <div className="-space-y-px">
                    <div className="my-5 mx-5">
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        required
                        onChange={(e) => onChange(e)}
                        className={fixedInputClass}
                      />
                    </div>
                    <div className="my-5 mx-5">
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        value={password}
                        required
                        className={fixedInputClass}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>

                  {/* //Button */}
                  <>
                    {
                      <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                        value="Login /"
                      >
                        {" "}
                        Login
                      </button>
                    }
                  </>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

export default connect(mapStateToProps, { login })(Login);