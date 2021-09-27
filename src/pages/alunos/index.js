import styled from "styled-components";

const Title = styled.h1`
    color: #CCC;
    background-color: rgba(0, 75, 0, 0.2);
    padding: 10px;
    text-align: center;
    justify-content: center;
    font-family: sans-serif;
    font-size: 40px;
    margin-bottom: 0px;
`

const Body = styled.div`
    background-color: rgba(0, 75, 0, 0.2);
    padding: 10px;
    margin: 0px;
    overflow-y: scroll;
    max-height: 550px;
`

const TextArea = styled.div`
    background-color: rgba(51,171,113,0.5);
    box-shadow: 0px 5px 5px 0px #000;
    padding: 5px;
    color: #DDD;
    text-indent: 2em;
    text-align: justify;
    font-family: sans-serif;
    .img{
        display: flex;
        p {
            margin-top: 5px;
        }

        .referencia {
            display: flex;
            flex-direction: column;
        }

        span {
            margin-right: 10px;
            text-indent: 0;
            font-size: 10px;
        }

        .align {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        img {
            height: 250px;
            width: 350px;
            margin-right: 10px;
            margin-top: 5px;
        }

        .colunas{
            flex-direction: column;
        }
    }

    a{
        color: #DDD;

        &:hover {
            color: #AAA;
        }
    }
`

export default function Intro(){
    return (
        <>
            <Title>ALUNOS</Title>
            <Body>
                <TextArea>
                    <ul>
                        <li>
                            Bruna Carvalho de Souza
                            (Ecologia)
                        </li>
                        <li>
                            Bruna Silva Machado
                            (Ecologia, Zoologia)
                        </li>
                        <li>
                            Gabriel Corrêa Dal Farra
                            (Ecologia, Zoologia)
                        </li>
                        <li>
                            Lorenzo Driessen Cigognini
                            (Ecologia, Zoologia)
                        </li>
                    </ul>
                </TextArea>
            </Body>
        </>
    )
}
