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
            <form class="row g-3" onSubmit={this.handleSubmit}>
                <div class="col-auto">                
                    <input type="text" ref={el => this.element = el} class="form-control" ciudad={this.state.ciudad} placeholder="Ingrese una ciudad"/>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">Buscar</button>
                </div>
            </form>
            {this.state.mostrarClima ? <Clima data={this.state}/> : null}
        </div>
        );
    }
}