import {
    IMAGE_SENT,
    GET_PREDICATION,
    PREDICATION_FAIL
}
from '../actions/types'
import axios from 'axios';
import { setAlert } from './alert';

export const predication = (email, password) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ email, password });
    try {
      const res = await axios.post('http://localhost:5000/api/auth', body, config);
      dispatch({
        type: IMAGE_SENT,
        payload: res.data,
      });
    //   dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
      dispatch({
        type: PREDICATION_FAIL,
      });
    }
  };