import React, { Component } from "react";

import aireIcono from './images/icons/air.svg'
import veryHappy from './images/icons/very-happy.svg'
import happy from './images/icons/happy.svg'
import neutral from './images/icons/neutral.svg'
import sad from './images/icons/sad.svg'
import verySad from './images/icons/very-sad.svg'

export default class Aire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitud: this.props.data.latitud,
            longitud: this.props.data.longitud,
            calidad: 0,
            icono: '',
            mensajeDeError: false
        };
      }

    componentDidMount() {
        this.obtenerAire(this.props.data.latitud, this.props.data.longitud);
    };

    componentDidUpdate(prevProps) {
        if (this.props.data.latitud !== prevProps.data.latitud || this.props.data.longitud !== prevProps.data.longitud) {
            this.obtenerAire(this.props.data.latitud, this.props.data.longitud);
        }
    };

    obtenerAire(latitud, longitud) {
        const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitud}&lon=${longitud}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`
        fetch(url)
        .then((result) => result.json())
        .then((result) => {
            this.setState({
                latitud: this.props.data.latitud,
                longitud: this.props.data.longitud,

                calidad: result.list[0].main.aqi,
                componenteCO: result.list[0].components.co,
                componenteNO: result.list[0].components.no,
                componenteNO2: result.list[0].components.no2,
                componenteO3: result.list[0].components.o3,
                componenteSO2: result.list[0].components.so2,
                componentePM25: result.list[0].components.pm2_5,
                componentePM10: result.list[0].components.pm10,
                componenteNH3: result.list[0].components.nh3,

                mensajeDeError: false
            }); 
            this.establecerIcono();
        })
        .catch(error => {
            this.setState({
                latitud: this.props.data.latitud,
                longitud: this.props.data.longitud,
                calidad: 0,
                icono: '',

                mensajeDeError: true
            }); 
            console.error(error)
        });
        console.log(this.state.calidad);
    }

    establecerIcono(){

        console.log(this.state.calidad);

        if (this.state.calidad === 1){
            this.setState({icono: veryHappy});
        }
        else if (this.state.calidad === 2){
            this.setState({icono: happy});
        }
        else if (this.state.calidad === 3){
            this.setState({icono: neutral});
        }
        else if (this.state.calidad === 4){
            this.setState({icono: sad});
        }
        else if (this.state.calidad === 5){
            this.setState({icono: verySad});
        }
        else{
            this.setState({icono: aireIcono});
        }
    }

    render() {
        return (
        <div class="tarjeta">
            <div class="tarjeta-aire">
                <div class="row row-cols-1">

                    <div class="col icon">
                        <img src={this.state.icono} alt=""/>
                    </div>

                    <div class="col">
                        <div class="row row-cols-2">
                            <div class="col calidad">
                                <p>Indice de Calidad: {this.state.calidad}</p>
                            </div>
                            <div class="col componente">
                                <p>CO: {this.state.componenteCO} μg/m3</p>
                            </div>
                            <div class="col componente">
                                <p>NO: {this.state.componenteNO} μg/m3</p>
                            </div>
                            <div class="col componente">
                                <p>NO2: {this.state.componenteNO2} μg/m3</p>
                            </div>
                            <div class="col componente">
                                <p>O3: {this.state.componenteO3} μg/m3</p>
                            </div>
                            <div class="col componente">
                                <p>SO2: {this.state.componenteSO2} μg/m3</p>
                            </div>
                            <div class="col componente">
                                <p>PM25: {this.state.componentePM25} μg/m3</p>
                            </div>
                            <div class="col componente">
                                <p>PM10: {this.state.componentePM10} μg/m3</p>
                            </div>
                            <div class="col componente">
                                <p>NH3: {this.state.componenteNH3} μg/m3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
  
}
