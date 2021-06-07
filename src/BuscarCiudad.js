import React, { Component } from "react";
import Clima from './Clima';

export default class BuscarCiudad extends Component {
    constructor(props) {
        super(props);
        this.state = {ciudad: '', mostrarClima: false };
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleSubmit(event) {
        event.preventDefault();       
        this.setState({ciudad: this.element.value });
        this.setState({mostrarClima: true});
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <div class="search">
                <div class="input-group mb-3">
                    <input type="text" ref={el => this.element = el}  class="form-control" ciudad={this.state.ciudad}  placeholder="Ingrese una ciudad" aria-label="Ingrese una ciudad" aria-describedby="button-addon2"/>
                    <button type="submit" class="btn btn-primary" id="button-addon2">Buscar</button>
                </div>
            </div>
            </form>
            {this.state.mostrarClima ? <Clima data={this.state}/> : null}
        </div>
        );
    }
}