import React from "react";
import "./App.css";

//function convencional

function HolaMundo(props) {
  //console.log(props);
  return (
    <div id="mundo">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  );
}

//otra manera de desarrollar la function-tercera opción

class Loquesea extends React.Component {
  render() {
    return <div>Esto es loquesea que se esta escribiendo.</div>;
  }
}

//estructurar una function con arrow function

const Valentina = (props) => <div id="peinado">{props.secorto}</div>;

//practica de estado. realizar una clase

class Indigente extends React.Component {
  state = {
    show: true,
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

 
  render() {
    if (this.state.show) {
      return (
        <div id="calle">
          <h4>{this.props.subtitle}</h4>
          <hr></hr>
          {this.props.carpa}
          <button onClick={this.toggleShow}>Cambiar</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>There are not elements</h1>
          <button onClick={this.toggleShow}>Volver</button>
        </div>
      );
    }
  }
}

const App = () => (
  <div>
    This is my Components: <HolaMundo mytext="Hola Mundo" />
    <Valentina secorto="Valentina se corto el cabello" />
    <Loquesea />
    <HolaMundo mytext="En el mundo" />
    <HolaMundo mytext="covid para todos!" subtitle="Lorem ipsum" />
    <Indigente carpa="Un indigente en la Alameda" subtitle="Lorem ipsum" />
  </div>
);

export default App;
