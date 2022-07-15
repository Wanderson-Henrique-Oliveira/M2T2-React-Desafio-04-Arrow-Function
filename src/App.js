//Crie um component de class
// Crie uma arrow function que receba uma mensagem e exiba na tela
// Crie uma arrow function que retorne o dobro de um número e exiba na tela

import React, {Component} from "react";
import "./App.css";
import Img from "./img/legolas.png";

class App extends Component{

  mensagem = () => {
    return <h2>"Mas descansa se precisas de descansar. No entanto, não percas toda a esperança. O amanhã é desconhecido. O conselho vem muitas vezes com o nascer do Sol."</h2>;
  };

  autor = () => {
    return <p>Legolas Greenleaf</p>;
  };

  multiply = (x) => {
    return (2 * x)
  }

  render(){
    return(
      <div className="container">
        <div className="background"></div>
        <h1>Arrow Function</h1>
        <figure>
          <img src={Img} alt='legolas'/>
        </figure>
        <div className="resposta">
          <h2>{this.mensagem()}</h2>
          <p>{this.autor()}</p>
          <div className="multiply">
            <h2>Multiplicações</h2>
            <ul>
              <li>O dobro dos anéis dados aos elfos é: {this.multiply(3)}</li>
              <li>O dobro dos anéis dados aos anões é: {this.multiply(7)}</li>
              <li>O dobro dos anéis dados aos homens é: {this.multiply(9)}</li>
              <li>O dobro do anel feito para Sauron é: {this.multiply(1)}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App