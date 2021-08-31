import styled from "styled-components";
import { Container, Col, Row, ListGroup } from "react-bootstrap";

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
`;


export default function Sidebar(){
    return(
        <Container>
            <Side>
                <Row>
                    <Col>
                        <ListGroup variant="flush">
                            <ListGroup.Item action variant="success" className="mb-2" href="/introducao">
                                Introdução
                            </ListGroup.Item>
                            <ListGroup.Item action variant="success" className="mb-2" href="/ecologia">
                                Ecologia
                            </ListGroup.Item>
                            <ListGroup.Item action variant="success" className="mb-2" href="/zoologia">
                                Zoologia
                            </ListGroup.Item>
                            <ListGroup.Item action variant="success" className="mb-2" href="/alunos">
                                Alunos
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Side>
        </Container>
    );
}