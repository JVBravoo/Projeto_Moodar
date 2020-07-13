import React, { Component } from "react";
import {Button} from "react-bootstrap";
import solicitacao from "../../solici";


class Card extends Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
    <div className="card">
        <img className="Card image cap" src={this.props.image} />
        <div className="card-body">
        <h5 className="card-title">{this.props.title}</h5>
        <p className="card-text">{this.props.description}</p>
        <p> 
            <strong>
                {this.props.category}
            </strong> 
        </p> 
        <p className="card-text">Duração: {this.props.duration}</p>
        <p className="card-text">Quantidade máxima: {this.props.audience} pessoas</p>
        <Button onClick={ () => this.props.solicitacao(this.props.index)}>Selecionar ação</Button>
        <p>{this.props.index}</p>
        {/* <Button onClick={ () => this.props.solicitacao(this.props.index)}>Cancelar ação</Button> */}
        </div>
    </div>
    );
  }
}

export default Card;