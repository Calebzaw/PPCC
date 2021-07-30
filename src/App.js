import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Site = styled.div`
    font-size: 20px;
    padding: 10px 15px;
    border: 3px solid #000;
    background-color: purple;
    color: #CCC;
`;

function App(){

    return(
        <>
            <Site>
                Olá Mundo!
            </Site>
        </>
    );
}

export default App;

