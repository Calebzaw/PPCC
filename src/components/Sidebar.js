import styled from "styled-components";
import { Container, Col, Row, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        box-shadow: 1px 1px 1px 0px #000;
        border-radius: 2px;
    }

    a {
        text-decoration: none;
        color:inherit ;
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
                            <Link to="/ecologia">
                                <ListGroup.Item action variant="success" className="mb-2">
                                        Ecologia
                                </ListGroup.Item>
                            </Link>
                            <Link to="/zoologia">
                                <ListGroup.Item action variant="success" className="mb-2">
                                        Zoologia
                                </ListGroup.Item>
                            </Link>
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