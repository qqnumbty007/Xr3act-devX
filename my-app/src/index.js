import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
// import reducers from './reducers/index';
import reducers from './reducers'; // เหมือนกับไลน์บน

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
// เพิ่ม store บน redux  ------ * ------ มาจากเว็บของ redux ไล่ตาม step ไป
// 1. สร้าง store ไว้เก็บ state

const TestFunctionComponent = () => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>
                HelloWorld
            </h1>
        </div>
    )
} // test Function Component

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
// Provider คือการ set store ให้กับ App
serviceWorker.unregister();
