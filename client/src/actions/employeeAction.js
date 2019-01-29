import axios from 'axios';
import {GET_ERRORS} from './types';

export const addEmplyee = (empData) => dispatch => {
    axios
        .post('/employee', empData)
        .then(res => console.log(res.data))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        });
};