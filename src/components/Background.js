import styled from "styled-components";
import { Container } from "react-bootstrap";

const Img = styled.img`
    position: absolute ;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
`;

export default function Background(){

    return(
        <Container>
            <Img src={process.env.PUBLIC_URL + "/background.jpg"} alt={"Mundo"}/>
        </Container>
    );
}