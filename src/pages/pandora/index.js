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

        .align {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                border: 1px solid rgba(51,171,113,0.5);
                border-radius: 5px;
                box-shadow: 1px 2px 2px 0px #000;
            }
        }

        img {
            height: 250px;
            width: auto;
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
            <Title>PANDORA</Title>
            <Body>
                <TextArea>
                    <div className='img'>
                        <img src={process.env.PUBLIC_URL + "/world.png"} alt={"Mundo"}/>
                        <div className='colunas'>
                            <p>
                                Pandora é um satélite natural que orbita uma gigante gasosa chamada de Polyphemus, ambos astros fictícios, que orbitam a estrela
                                real Alfa Centauri, Pandora é similar ao planeta Terra, porém com menor tamanho, e por extensão uma menor gravidade, por esse motivo
                                a fauna local consegue atingir tamanhos maiores do que aos animais comuns da Terra, em sua maioria possuindo seis membros, havendo exceções.
                                Outra característica marcante é a emissão de luz natural vinda de organismos, chamado de bioluminescência, emitindo cores que variam de azul,
                                roxo e às vezes tons de verde.
                            </p>
                            <p>
                                A atmosfera de Pandora é mais densa que a atmosfera da Terra pela alta presença do gás nobre xenônio (5.5%), e possui muito dióxido de carbono (18%), 
                                logo sendo letal para seres humanos respirarem sem proteção, deixando alguém inconsciente em 20 segundos, e levando a morte em 4 minutos. A resistência 
                                maior do ar cria diferentes efeitos, os quais listamos a seguir.
                            </p>
                        </div>
                    </div>
                    <p>
                        Com menor gravidade e maior resistência do ar, objetos em queda livre tem uma aceleração menor, caindo mais lentamente que na Terra, fazendo com que quedas 
                        de longas distâncias não sejam tão perigosas quanto seriam na nossa atmosfera.
                    </p>
                    <p>
                        Uma atmosfera mais densa faz com que seja mais difícil se mover, como se houvesse um vento forte tentando te desacelerar, por conta disso, muitos animais
                        possuem 6 patas, para ter mais força para se locomover. Os seres humanos utilizam de tecnologia para compensar essa dificuldade, que vem em forma das armaduras
                        robóticas que eles pilotam.
                    </p>
                    <p>
                        As espécies voadoras usam da maior densidade para voar, sendo mais fácil de permanecer no ar por conta da resistência que o astro exerce, fazendo que cada bater
                        de asas tenha uma força de propulsão maior, porém também foi necessário uma adaptação aerodinâmica para ‘perfurar’ o ar e se mover melhor.
                    </p>
                    <p>
                        Os ventos também são mais fortes em Pandora, graças a densidade, objetos levados ao vento tem mais dificuldade em parar, e para isso as plantas tiveram de 
                        se desenvolver para aguentar essas forças maiores, gerando troncos e galhos mais resistentes para aguentar, ou mais flexíveis para não quebrarem.
                    </p>
                    <div className="img">
                        <div className="align">
                            <img src={process.env.PUBLIC_URL + "/terra.png"} alt="terra"/>
                            <img src={process.env.PUBLIC_URL + "/pandora.png"} alt="pandora"/>
                        </div>
                    </div>
                    <p>
                        Pandora recebe luz, tanto de Alfa Centauri quanto do planeta em que ela orbita, Polyphemus, as noites não são totalmente escuras, chegando a
                        ser mais uma penumbra, não tão claro quanto o dia, mas ainda levemente escuro, por conta da proximidade do planeta, e pela luz que ele reflete, 
                        centenas de vezes maior que o brilho refletido pelo nosso satélite natural.
                    </p>
                    <p>
                        Os biomas de Pandora se estendem de florestas exuberantes, montanhas flutuantes, planícies e vastos oceanos, com flora diversificada e até mesmo um
                        certo misticismo com a natureza, o que não vai ser tratado neste trabalho. O satélite também é rico de um material fictício chamado de Unobtanium,
                        um mineral supercondutor. Cada kilograma não refinado tem o valor vinte milhões de dólares, o que justificou a exploração e viagens até Pandora.
                    </p>
                    <p>
                        No mundo criado por James Cameron, Pandora seria o primeiro astro fora do sistema solar a ser encontrado vida inteligente, além de criaturas e
                        plantas presentes apenas na imaginação dos seres humanos. Mesmo tendo diversas similaridades com nosso lar, ele ainda é único e extremamente diferente. 
                    </p>
                </TextArea>
            </Body>
        </>
    )

}
