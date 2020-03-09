import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import * as deck from '@deck.gl/core';
import * as layers from '@deck.gl/layers';
import * as luma from 'luma.gl';
import * as fabric from 'office-ui-fabric-react';
import * as vega from 'vega';
import { Explorer, use } from '@msrvida/sanddance-explorer';

fabric.initializeIcons();

use(fabric, vega, deck, layers, luma);

const data = [
  { a: 1, b: "c1" },
  { a: 1, b: "c2" },
  { a: 2, b: "c3" },
  { a: 3, b: "c4" }
];

const explorerProps = {
    logoClickUrl: 'https://microsoft.github.io/SandDance/',
    mounted: explorer => {
        explorer.load(data);
    }
};

ReactDOM.render(React.createElement(Explorer, explorerProps), document.getElementById('app'));

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
