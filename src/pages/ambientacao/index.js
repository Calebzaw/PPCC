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
                        <img src={process.env.PUBLIC_URL + "/ambientacao.png"} alt={"Mundo"}/>
                        <div className='colunas'>
                            <p>
                                Durante o filme poucos biomas são observados, sendo os principais uma grande selva tropical, e as ‘montanhas flutuantes’, mas ainda são mostradas
                                planícies e áreas litorâneas. A cultura e sociedade dos nativos possuem direta influência da vegetação, e é fácil ver a adaptação que a fauna sofreu 
                                para viver nesse lugar, demonstrando a dedicação do departamento responsável pela criação das espécies. Em resumo, o cenário de Pandora é uma versão 
                                da terra com mais cores e proporções maiores.
                            </p>
                            <p>
                                A pessoa responsável pela flora vista na obra foi criada pela professora Jodie Holt, da Universidade da Califórnia, ela menciona que dentro do universo
                                fictício as plantas são maiores graças à maior densidade atmosférica, gravidade mais leve e ao magnetismo no satélite. A planta mais marcante seria a
                                planta espiralada que foi chamada de Helicoradian, sua forma se dá a suas folhas vermelhas, que sobem de 3 à 4 metros, que quando tocadas se retraem 
                                em uma pequena base.
                            </p>
                        </div>
                    </div>
                    <p>
                        A planta Helicoradian foi inspirada em um pequeno verme marinho Spirobranchus giganteus, apelidado também de ‘Verme da árvore de Natal’ com uma média de apenas
                        3.8 cm, e possui comportamento extremamente similar à planta do Avatar. Há também plantas características que se destacam pelo misticismo atrás deles, que, 
                        como mencionado na seção do planeta, não será trabalhado aqui. E a outra espécie que também se sobressai, é a árvore que os nativos do clã Omaticaya utilizam para abrigo. 
                    </p>
                    <div className="img">
                        <div className="align">
                            <img src={process.env.PUBLIC_URL + "/avatar-forest.png"} alt="terra"/>
                        </div>
                    </div>
                    <p>
                        Chamada de ‘Hometree’ (árvore lar), abriga centenas de membros de clãs, a árvore cresce de 150 até 460 metros de altura e com troncos de 30 metros de diâmetro, 
                        há algumas dessas plantas que se destacam no meio da floresta, acima às demais árvores. Em retrospectiva, a maior árvore no planeta Terra é uma Sequoia, que
                        chega até 83 metros de altura, demonstrando novamente, o tamanho colossal que a vida em Pandora consegue alcançar em comparação com a vida terrestre.
                    </p>
                    <p>
                        Algo que também aproxima as plantas de Pandora com as nossas, é a coloração das folhas, no nosso planeta as folhas desenvolveram uma coloração esverdeada por que
                        na evolução, essa foi a cor que absorve a luz do sol com maior eficácia. Isso não é uma regra universal, já que conseguimos ver folhas com diferentes cores 
                        no nosso planeta, não seria incomum ver plantas com outras colorações em outros planetas, pois isso varia graças a intensidade dos raios de sol e frequência deles.
                    </p>
                </TextArea>
            </Body>
        </>
    )
}