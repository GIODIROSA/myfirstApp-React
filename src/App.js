import React from "react";
import "./App.css";

//function convencional

function HolaMundo(props) {
  //console.log(props);
  return <div id="mundo">
    <h3>
      {props.subtitle}
    </h3>
    {props.mytext}
    </div>;
}

//otra manera de desarrollar la function-tercera opción

class Loquesea extends React.Component {
  render() {
    return <div>Esto es loquesea que se esta escribiendo.</div>;
  }
}

//estructurar una function con arrow function

const Valentina = (props) => <div id="peinado">{props.secorto}</div>;

const App = () => (
  <div>
    This is my Components: <HolaMundo mytext="Hola Mundo" />
    <Valentina secorto="Valentina se corto el cabello" />
    <Loquesea />
    <HolaMundo mytext="En el mundo" />
    <HolaMundo mytext="covid para todos!" subtitle="Lorem ipsum"/>
  </div>
);

export default App;
