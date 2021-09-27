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

            .max-wid {
                width: auto;
            }
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

    .img-list {

        .sets {

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            .set {
                display: flex;
                flex-direction: column;
                padding: 10px;
                margin: 10px;
                align-items: center;
                align-content: center;
                justify-content: center;

                img {
                    margin-bottom: 10px;
                }

                ul {
                    list-style-position: inside;

                    li span {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
`

export default function Intro(){
    return (
        <>
            <Title>NA'VI</Title>
            <Body>
                <TextArea>
                    <p>
                        Os Pseudo Hominídeos de Pandora são um caso à parte, suas características divergem muito das outras espécies de Pandora, mas ainda
                        podem ser traçadas a uma ancestralidade comum. As espécies que se assemelham a nós são os nativos Na’vi, que medem de 2.5 até 3 metros,
                        e as criaturas primatas Prolemuris, medindo em média 1.5 metros.
                    </p>
                    <div className="img">
                        <div className="align">
                            <img className="max-wid" src={process.env.PUBLIC_URL + "/homidatim.png"} alt="terra"/>
                            <img className="max-wid" src={process.env.PUBLIC_URL + "/mamaco.png"} alt="terra"/>
                        </div>
                    </div>
                    <p>
                        Os nativos Na’vi são a única espécie que possui apenas 4 membros, e juntamente com os Prolemuris, possuem narinas acima da boca,
                        além da ausência das antenas, presentes em outras espécies. A principal resposta para isso pode-se ver nos pequenos primatas que habitam as árvores.
                    </p>
                    <div className="img">
                        <div className="align">
                            <img src={process.env.PUBLIC_URL + "/circulos.png"} alt="terra"/>
                        </div>
                    </div>
                    <p>
                        É possível ver que os Prolemuris possuem registros do que uma vez foram narinas acima dos ombros, mas agora não apenas pequenas imperfeições
                        na pele, e seus braços são bifurcados, ao contrário das outras espécies, que os membros saem do torço, os do primata se separam próximo ao cotovelo.
                        Com isso pode-se deduzir que o ancestral do Prolemuris e dos Na’vi sofreram as mesmas pressões evolutivas, gerando duas espécies, uma que continuou
                        o ‘processo’ de unir os braços e migrar as narinas para acima do nariz, gerando os Na’vi, já a outra espécie não teve a necessidade de continuar, 
                        gerando o Prolemuris.
                    </p>
                    <div className="img">
                        <div className="align">
                            <img className="max-wid" src={process.env.PUBLIC_URL + "/hippie.png"} alt="terra"/>
                        </div>
                    </div>
                    <p>
                        Outra singularidade dos ‘hominideos’ de Pandora, é a ausência das antenas, e em seu lugar há apenas uma trança. porém ao seu final, 
                        assim como no final das antenas, há pequenos tentáculos, que quando entram em contato com outras similares elas se ligam, trocando impulsos nervosos,
                        permitindo compartilhar pensamentos e sentimentos. Durante o filme apenas os Na’vi utilizam dessa característica com outras espécies.
                    </p>
                    <div className="img">
                        <div className="align">
                            <img className="max-wid" src={process.env.PUBLIC_URL + "/trancas.png"} alt="terra"/>
                        </div>
                    </div>
                    <p>
                        Os Na’vi chamam essa conexão de ‘Tsaheylu’, que significa ‘vínculo’, o filme não dá uma explicação o de como funciona, mas imaginamos que
                        isso seja uma vantagem evolutiva, já que os Na’vi não são fisicamente muito fortes em comparação com as outras espécies, eles aprenderam a se
                        conectar com elas, utilizando da criatura para o auxiliar em suas tarefas, ela também se beneficia com o contato, se aproveitando do nativo para proteção e cuidado.
                    </p>
                    <p>
                        Como fizemos para as outras espécies de Pandora, criamos Ordem, Gênero e Espécie para os pseudo primatas. A ordem seria ‘Alienosimius’ (Primata alienigena),
                        o Gênero dos Na’vi ‘Gracilisimia’ (Macaco gracioso), e dos Prolemuris ‘Allosimia’ (Macaco estranho).
                    </p>
                    <div className="img-list">
                        <div className="sets">
                            <div className="set">
                                <img src={process.env.PUBLIC_URL + "/pessoa.png"} alt="terra"/>
                                <ul>
                                    <li>
                                        <span>Filo:</span> Chordata
                                    </li>
                                    <li>
                                        <span>Classe:</span> N/A
                                    </li>
                                    <li>
                                        <span>Ordem:</span> Alienosimius
                                    </li>
                                    <li>
                                        <span>Gênero:</span> Gracilisimia
                                    </li>
                                    <li>
                                        <span>Espécie:</span> <i>G. pseudomo</i>
                                    </li>
                                </ul>
                            </div>
                            <div className="set">
                                <img src={process.env.PUBLIC_URL + "/pedro.png"} alt="terra"/>
                                <ul>
                                    <li>
                                        <span>Filo:</span> Chordata
                                    </li>
                                    <li>
                                        <span>Classe:</span> N/A
                                    </li>
                                    <li>
                                        <span>Ordem:</span> Alienosimius
                                    </li>
                                    <li>
                                        <span>Gênero:</span> Allosimia
                                    </li>
                                    <li>
                                        <span>Espécie:</span> <i>A. caureulosimia</i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </TextArea>
            </Body>
        </>
    )
}