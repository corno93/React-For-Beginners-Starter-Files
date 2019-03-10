import React from 'react';
// import {Componet} from 'react'; //other notation for importing
import { render } from 'react-dom'; // here we only need one method: render
// import StorePicker from './components/StorePicker';
import App from './components/App';
import './css/style.css';
import Router from './components/Router';

// render(<p>HEYY</p>, document.querySelector('#main'));
// render(<StorePicker/>, document.querySelector('#main'));
render(<Router />, document.querySelector('#main'));
