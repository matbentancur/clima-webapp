import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/clima.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import BuscarCiudad from './BuscarCiudad';

ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<BuscarCiudad />, document.getElementById('buscar'))
