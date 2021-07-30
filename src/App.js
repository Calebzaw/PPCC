import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Checar https://github.com/Hermanya/awesome-react-bootstrap-components para conponentes legais

const Site = styled.div`
    font-size: 20px;
    padding: 10px 15px;
    border: 3px solid #000;
    background-color: purple;
    color: #CCC;
    width: 100px;
    height: 100px;
`;

function App(){

    const alertTopi = () => {
        alert('Topi');
    }

    return(
        <>
            <Site>
                <button onClick={alertTopi}>Clique aqui</button>
            </Site>
        </>
    );
}

export default App;

