import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'

const TestFunctionComponent = () => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>
                HelloWorld
            </h1>
        </div>
    )
} // test Function Component

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
