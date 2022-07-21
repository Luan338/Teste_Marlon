import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <ul>
        <img src={this.props.image} alt="Perfil" />
        <li>{this.props.texto1}</li>
        <li>{this.props.texto2}</li>
        <button onClick={this.props.ativar}>{this.props.btnValor}</button>
      </ul>
    );
  }
}
