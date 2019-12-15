import axios from 'axios';
import { ORDERS_FETCH } from './types';

export const ordersFetch = () => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "/orders").then(
            res => {
                dispatch({type : ORDERS_FETCH, payload: res.data});
                // return { type: "orders_fetch", payload: res.data} // เรียกแบบนี้ไม่ได้เพราะเป็น Asynchronous
            }
        )
    }
    // return { type: "orders_fetch", }
}

export const orderDelete = id => {
    return dispatch => {
        axios.delete(process.env.REACT_APP_API_URL + "/orders/" + id).then( res => {
            axios.get(process.env.REACT_APP_API_URL + "/orders").then( res => {
                dispatch({ type: ORDERS_FETCH, payload : res.data});
            });
        });
    }
}