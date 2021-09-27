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
            flex: 1;
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
            <Title>AMBIENTAÇÃO</Title>
            <Body>
                <TextArea>
                    <div className='img'>
                        <div className="referencia">
                            <img src={process.env.PUBLIC_URL + "/relacoes.png"} alt={"Mundo"}/>
                            <span><i>Nativos Na’vi caçando um rebanho de Strumbeests com auxílio de Banshees e Cavalos Selvagens</i></span>
                        </div>
                        <div className='colunas'>
                            <p>
                                Existem diversas relações entre espécies que ocorrem na natureza, e na obra de James Cameron não é diferente, mesmo não mostrando muito a fundo o dia a dia
                                da fauna, ainda é possível observar muito que diz respeito sobre a maneira que as espécies vivem. Há relações que são explícitas, como herbivoria, predação
                                e mutualismo, mas como Pandora funciona muito similarmente como a Terra, é plausível assumir algumas relações. 
                            </p>
                            <p>
                                Quando se fala em uma fauna alienígena, normalmente se imagina predadores e criaturas perigosas, e Pandora não é diferente, a função de um predador é essencial
                                para a vida de um ecossistema, ele impede que haja um número exagerado de outras espécies e mantém controle para alimentação. Em Pandora há vários predadores, 
                                os nativos Na’vi, a besta felina Thanator, as criaturas voadoras Banshee, os Lobos Víbora, e o predador alfa Grande Leonopteryx.
                            </p>
                        </div>
                    </div>
                    <p>
                        Herbivoria é um caso de predação, mas específico para animais que se alimentam de plantas, e assim como os predadores e flora, esses animais também possuem tamanhos
                        exagerados comparados a vida terráquea. Entre eles, há espécies similares a primatas, Prolemuris, grandes bestas Sturmbeests e Titanothere Cabeça de Martelo, os Hexapedes,
                        que se assemelham a cervos e as criaturas equinas, Cavalos Selvagens.
                    </p>
                    <div className="img">
                        <div className="align">
                            <div className="referencia">
                                <img src={process.env.PUBLIC_URL + "/juan.png"} alt="terra"/>
                                <span><i>Cavalo selvagem se alimentando dos sulcos de uma espécie de flor</i></span>
                            </div>
                            <div className="referencia">
                                <img src={process.env.PUBLIC_URL + "/bansheenest.png"} alt="terra"/>
                                <span><i>Ninho de Banshees em uma das montanhas flutuantes</i></span>
                            </div>
                        </div>
                    </div>
                    <p>
                        Uma das principais ‘interações’ que ocorrem no filme, é o vínculo quando um dos Na’vi coloca em contato a extensão que tem no final do cabelo na estrutura similar a uma antena,
                        de muitos dos animais de Pandora. Esse contato permite compartilhar sentimentos e até aspectos da mente entre os dois que estão 'conectados', criando uma proto cooperação, isto é,
                        uma relação que beneficia os dois, mas não é necessária para a sobrevivência de cada um.
                    </p>
                    <p>
                        Essa ligação, não possui nenhum aspecto que se assemelha com o nosso mundo, é uma invenção do filme, mas pode-se relacionar ao vínculo afetivo que desenvolvemos com animais
                        de estimação, mas claramente, no filme, essa relação é mais forte, como foi demonstrado em algumas cenas, que até mesmo a dor é compartilhada, quando um dos dois acabam se machucando.
                    </p>
                    <p>
                        O comportamento de muitas criaturas de Pandora podem ser tratadas com paralelos diretos com animais do nosso mundo, os grandes herbívoros (Strumbeest e Titanothere Cabeça de Martelo)
                        vivem em rebanhos, utilizando isso como defesa, esse comportamento é visto em bovinos, ovinos e em elefantes.
                    </p>
                    <p>
                        E no aspecto carnívoro, os Lobos Víbora caçam em grupo, como os Lobos da Terra, sendo animais sociáveis, diferente do Thanator, que como onças, tendem a viver e caçar sozinhos.
                        Os banshees vivem em ninhos feitos em paredes rochosas, diversas aves são vistas com ninhos próximos para proteção, como Papagaios do Mar ou até mesmo pinguins. Porém, em retrospectiva,
                        o Grande Lenopteryx caça sozinho, igual às aves de rapina que conhecemos, como Águias ou Corujas.
                    </p>
                </TextArea>
            </Body>
        </>
    )
}
