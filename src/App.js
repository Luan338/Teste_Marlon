import React, { Component } from "react";
import Card from "./Card.js";
import "./styles.css";

export default class App extends Component {
  state = {
    pessoas: [
      {
        peca: "Camiseta",
        img:
          "https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dwc61aa765/TH4208_031_24.jpg?imwidth=915&impolicy=product",
        preco: 190,
        btn: "Desconto camiseta",
        precoDesconto: 150
      },
      {
        peca: "Bermuda",
        img: "https://cdn.dooca.store/946/products/1-1-3.jpg?v=1629147086",
        preco: 290,
        btn: "Desconto bermuda",
        precoDesconto: 250
      },
      {
        peca: "Tênis",
        img:
          "https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw7b0c7352/32SPM2409_X96_01.jpg?imwidth=915&impolicy=product",
        preco: 300,
        btn: "Desconto tênis",
        precoDesconto: 220
      },
      {
        peca: "Chinelo",
        img:
          "https://cdnv2.moovin.com.br/bagatinicalcados/imagens/produtos/det/c302984b14d5ecd8b4b8a10e7cd03f66.jpg",
        preco: 90,
        btn: "Desconto chinelo",
        precoDesconto: 75
      },
      {
        peca: "Casaco",
        img: "https://cf.shopee.com.br/file/c3ee1bae6e6faaf33e1c74e6eb35a38d",
        preco: 390,
        btn: "Desconto casaco",
        precoDesconto: 300
      },
      {
        peca: "Boné",
        img: "https://cf.shopee.com.br/file/fbe7379bbbd06fee8fb27ba97eec7ebc",
        preco: 120,
        btn: "Desconto boné",
        precoDesconto: 100
      }
    ]
  };

  trocarPreco = (peca) => {
    const result = this.state.pessoas.map((item) => {
      if (item.peca === peca) {
        return {
          ...item,
          preco: item.precoDesconto
        };
      }
      return item;
    });
    this.setState({
      pessoas: result
    });
  };

  // precoChinelo = () => {
  //   this.setState((preco) => (preco.pessoas[3].preco = 75));
  // };

  render() {
    return (
      <nav>
        {this.state.pessoas.map((item) => (
          <div key={item.peca}>
            <Card
              image={item.img}
              texto1={item.peca}
              texto2={item.preco}
              btnValor={item.btn}
              ativar={() => this.trocarPreco(item.peca)}
            />
          </div>
        ))}
      </nav>
    );
  }
}
