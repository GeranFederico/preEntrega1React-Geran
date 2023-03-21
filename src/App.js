import React, { Component } from "react";
import "./App.css";


// COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import CardUser from "./components/CardUser/CardUser";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <div className="UserSection">
          <CardUser
            name="Los compas y el diamantito legendario"
            description="Mike, Timba y Trolli se merecen unas vacaciones, así que lo han preparado todo para pasar unos días de descanso en una isla tranquila y alejada del ajetreo diario. De manera accidental, encontrarán un pergamino que los pondrá sobre la pista de un extraño tesoro, relacionado con viejas leyendas locales que nos hablan de criaturas mágicas, profecías antiguas y batallas entre gigantes y caballeros. Sin haberlo buscado, los compas se verán envueltos en una aventura épica que quizá los convierta en héroes."
            img="" />
          <CardUser
            name="Los Compas y la cámara del tiempo"
            description="Después de que Rius insista mucho, Mike, Timba y Trolli van a visitar la exposición donde se cuenta la historia del tesoro de su antepasado. No es que les haga mucha ilusión, pero con tal de no escucharle... Aunque al final, no está tan mal. Hay trastos muy curiosos: tocadiscos, teléfonos móviles tamaño XXL, cámaras de fotos con carrete...

            Pero espera un momento... ¿Cómo han pasado Los Compas de estar en un museo a ser perseguidos por ¡¡¡UN DINOSAURIO!!!?"
            img="" />
          <CardUser
            name="Los Compas y la Maldición de Mikecrack"
            description="Mike y Timba han organizado una gran fiesta de cumpleaños para Trolli en La Pluma Negra y ya está todo preparado: globos y confeti por todas partes, una gran tarta con velas y un montón de regalos. Pero algo no sale como estaba previsto...

            ¡Una terrible maldición amenaza a Los Compas! Mike, Timba y Trolli tendrán que emprender una búsqueda contrarreloj si quieren salvarse. ¿Lograrán acabar con la maldición a tiempo?"
            img="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91aDsj10boL.jpg" />
        </div>
      </div>
    );
  }
}

export default App;