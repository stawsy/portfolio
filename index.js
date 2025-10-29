import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';

// Data imported, converted to JSON object and saved in /src/components/data.js
//import {dsv} from 'd3-fetch';
//const dat = await dsv('|', './00-data.csv')
//console.log(JSON.stringify(dat))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
