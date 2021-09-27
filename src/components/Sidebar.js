import styled from "styled-components";
import { Container, Col, Row, ListGroup, Card } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Side = styled.div`
    padding: 10px;
    border-radius: 0px 5px;
    top: 15%;
    position: absolute;
    width: 15%;
    height: 85%;
    left: 0;
    bottom: 0;
    z-index: 1;
    background: linear-gradient(to top, transparent 20%, rgb(0,75,0) 80%);

    .list-group-item {
        box-shadow: 1px 1px 0px #000;
        border-radius: 2px;
    }

    a {
        text-decoration: none;
        color:inherit ;
    }

    .card {
        border: none;
        background: none;
        border-radius: 0;
        box-shadow: none;

        &-header {
            padding: 0;
            background: none;
            border: none;
        }

        &-body {
            padding: 5px;
            margin-bottom: 1px;
            border: 0.25px solid rgba(00,75,00,0.7);
            border-spacing: 0;
        }
        .list-group-item {
            margin-top: 2px;
            box-shadow: 1px 1px 0px #030;
        }
    }
`;


export default function Sidebar(){

    return(
        <Container>
            <Side>
                <Row>
                    <Col>
                        <ListGroup variant="flush">
                            <Link to="/introducao">
                                <ListGroup.Item action variant="success" className="mb-2">
                                        Introdução
                                </ListGroup.Item>
                            </Link>
                            <Accordion>
                            <ListGroup.Item action variant="success" className="mb-2">
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={ListGroup} variant="success" eventKey="0">
                                            Ecologia
                                        </Accordion.Toggle>
                                    </Card.Header>

                                    <Accordion.Collapse eventKey="0">
                                        <div>
                                            <Link to='/ecologia/pandora'>
                                                <ListGroup.Item action variant="success" className="mb-2">
                                                    Pandora
                                                </ListGroup.Item>
                                            </Link>
                                            <Link to='/ecologia/ambientacao'>
                                                <ListGroup.Item action variant="success" className="mb-2">
                                                    Ambientação
                                                </ListGroup.Item>
                                            </Link>
                                            <Link to='/ecologia/relacoes'>
                                                <ListGroup.Item action variant="success" className="mb-2">
                                                    Relações
                                                </ListGroup.Item>
                                            </Link>
                                        </div>
                                    </Accordion.Collapse>
                                </Card>
                            </ListGroup.Item>
                            </Accordion>
                            <Accordion>
                            <ListGroup.Item action variant="success" className="mb-2">
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={ListGroup} variant="success" eventKey="1">
                                            Zoologia
                                        </Accordion.Toggle>
                                    </Card.Header>

                                    <Accordion.Collapse eventKey="1">
                                        <div>
                                            <Link to='/zoologia/adaptacao'>
                                                <ListGroup.Item action variant="success" className="mb-2">
                                                    Adaptação e Morfologia
                                                </ListGroup.Item>
                                            </Link>
                                            <Link to='/zoologia/caracteristicas'>
                                                <ListGroup.Item action variant="success" className="mb-2">
                                                    Características
                                                </ListGroup.Item>
                                            </Link>
                                            <Link to='/zoologia/navi'>
                                                <ListGroup.Item action variant="success" className="mb-2">
                                                    Na'vi
                                                </ListGroup.Item>
                                            </Link>
                                        </div>
                                    </Accordion.Collapse>
                                </Card>
                            </ListGroup.Item>
                            </Accordion>
                            <Link to="/alunos">
                                <ListGroup.Item action variant="success" className="mb-2">
                                        Alunos
                                </ListGroup.Item>
                            </Link>
                        </ListGroup>
                    </Col>
                </Row>
            </Side>
        </Container>
    );
}