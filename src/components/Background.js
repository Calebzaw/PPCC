import styled from "styled-components";
import { Container } from "react-bootstrap";

const Fade = styled.div`
    background: linear-gradient(to top, #000 20%, transparent 80%);
    z-index: -5;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
`

const Img = styled.img`
    position: absolute ;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
`;

export default function Background(){

    return(
        <>
            <Img src={process.env.PUBLIC_URL + "/background.jpg"} alt={"Mundo"}/>
            <Fade/>
        </>
    );
}