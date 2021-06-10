import React, { Component } from "react";

export default class BuscarCiudad extends Component {
    constructor(props) {
        super(props);
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleSubmit(event) {
        event.preventDefault();       
        this.props.handlerCiudad(this.element.value);
    }

    render() {
        return (
        <div class="tarjeta-buscar">
            <form onSubmit={this.handleSubmit}>
                <div class="input-group mb-3">
                    <input type="text" ref={el => this.element = el}  class="form-control" placeholder="Ingrese una ciudad" aria-label="Ingrese una ciudad" aria-describedby="button-addon2"/>
                    <button type="submit" class="btn btn-primary" id="button-addon2">Buscar</button>
                </div>
            </form>
        </div>
        );
    }
}
