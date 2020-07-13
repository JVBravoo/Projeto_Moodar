// npm run start

import React, { Component } from 'react';
import {Alert} from "react-bootstrap"


import "./styles.css";

import servicos from "./services/store";
import Card from "./components/card";
import Header from "./components/Header";


export default class App extends
  Component {
    state = { 
      servicos: servicos,
      solicitacao: []
   }
    displayQuestion = (index) =>  {

  window.alert("A ação foi escolhida com sucesso!");

  this.setState( {
    servicos: this.state.servicos,
    solicitacao: this.state.solicitacao.concat(this.state.servicos[index])
  })

}  

    render(){ 
      return (
        <div>
          <Header/>
          {this.state.servicos.map((item, index) => {
                return <Card index={index} image={item.image} title={item.title} description={item.description} category={item.category} duration={item.duration} audience={item.audience} solicitacao={this.displayQuestion} key={item.id}/>
                })}
          <h1>Ações selecionadas</h1>
          {this.state.solicitacao.map((item, index) => {
                return <Card index={index} image={item.image} title={item.title} description={item.description} category={item.category} duration={item.duration} audience={item.audience} solicitacao={this.displayQuestion} key={item.id}/>
                })}
        </div>
    )
  }
}