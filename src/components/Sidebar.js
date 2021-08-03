import styled from "styled-components";
import { Container, Col, Row, ListGroup } from "react-bootstrap";

const Side = styled.div`
    padding: 10px;
    border-radius: 0px 5px;
    top: 25%;
    position: absolute;
    width: 15%;
    height: 75%;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;


export default function Sidebar(){
    return(
        <Container>
            <Side>
                <Row>
                    <Col>
                        <ListGroup variant="flush">
                            <ListGroup.Item action variant="success" className="mb-2">
                                Introdução
                            </ListGroup.Item>
                            <ListGroup.Item action variant="success" className="mb-2">
                                Ecologia
                            </ListGroup.Item>
                            <ListGroup.Item action variant="success" className="mb-2">
                                Zoologia
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Side>
        </Container>
    );
}