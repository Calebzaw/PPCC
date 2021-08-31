// import styled from 'styled-components';
import Background from './components/Background';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
// Checar https://github.com/Hermanya/awesome-react-bootstrap-components para conponentes legais


export default function App(){

    return(
        <BrowserRouter>
            <Background />
            <Row style={{marginRight: `0px`, padding: `0px`, zIndex: 10}}>
                <Col sm={2}>
                    <Sidebar />
                </Col>
                <Col sm={10} style={{marginRight: `0px`, marginLeft: `0px`,  padding: `0px`}}>
                    <Routes />
                </Col>
            </Row>
        </BrowserRouter>
    );
}



