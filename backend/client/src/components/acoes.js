import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {v1 as uuid} from "uuid";

class acoes extends Component {
    state = {
        actions: [
            {id: uuid(), name: 'Gestão e liderança'},
            {id: uuid(), name: "Como gerir e liderar uma empresa?"},
            {id: uuid(), name: "Treinamentos"},                                // Atributos dentro de uma ação
            {id: uuid(), name: "54h"},
            {id: uuid(), name: 25}
        ]
    }
    // FAZER COM QUE A AÇÃO TENHA OS ATRIBUTOS COMO CARACTERÍSTICAS DENTRO DELA E ADICIONAR AS AÇÕES QUE A EMPRESA DESEJA DE FORMA DECENTE.
    render() {
        const { actions } = this.state;
        return(
            <Container>
                <Button
                    color='dark'
                    style={{marginBottom: '2rem'}}
                    onClick={() => {
                        const name = prompt('Escolha a ação');
                        if(name) {
                            this.setState(state => ({
                                actions: [...state.actions, {id: uuid(), name}]
                            }));
                        }
                    }}
                >
                    Add Action
                </Button>

                <ListGroup>
                    <TransitionGroup className="Ações">
                        {actions.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                actions: state.actions.filter(action => action.id !== id) // DELETE 
                                            }));
                                        }}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default acoes;