import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './home/home.js'
import { styled } from "styled-components";

ReactDOM.render(<Home />, document.getElementById('app'));

module.hot.accept();