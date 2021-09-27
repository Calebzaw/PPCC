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
            max-width: 500px;
            margin-right: 10px;
            margin-top: 5px;

            .align {
                max-width: 700px;
            }
        }

        .colunas{
            flex-direction: column;
        }
    }

  
    h5 {
        text-decoration: underline;
    }
    ul {
        list-style-position: inside;

        li span {
            text-decoration: underline;
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
            flex-wrap: wrap;
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

                    span {
                        align-items: center;
                        align-content: center;
                        justify-content: center;
                    }
                }
            }
        }
    }
`

export default function Intro(){
    return (
        <>
            <Title>CARACTERÍSTICAS</Title>
            <Body>
                <TextArea>
                    <p>
                        Há muitas características compartilhadas entre as espécies, porém, ao mesmo tempo elas conseguem ser muito distintas umas das outras,
                        então iremos separar as espécies em grupos de dois, pegando as espécies com maior similaridade, e categorizamos esses grupos com o termo
                        ‘pseudo’ (falso, não genuíno) antes deles. 
                    </p>
                    <p>
                        Criaremos também uma nomenclatura científica para cada espécie e seus grupos, já que essas espécies possuem uma coluna vertebral, 
                        todos seriam do filo 'chordata', contudo, como não sabemos como funciona a reprodução de todas essas espécies, pularemos essa parte na
                        classificação.
                    </p>
                    <div className="img">
                        <div className="align">
                            <img className="align" src={process.env.PUBLIC_URL + "/lista.png"} alt="terra"/>
                        </div>
                    </div>
                    <p>
                        Paquiderme é um adjetivo que significa ‘que tem a pele grossa’, então usaremos esses termos para os
                        Sturmbeests e Titanothere Cabeça de Martelo. Eles são grandes herbívoros, que medem, respectivamente, 4.5 e 6.5 metros de altura.
                    </p>
                    <div className="img">
                        <div className="align">
                            <img src={process.env.PUBLIC_URL + "/chifrudo.png"} alt="terra"/>
                            <img src={process.env.PUBLIC_URL + "/unicornio.png"} alt="terra"/>
                        </div>
                    </div>
                    <p>
                        Ambos possuem 6 pernas, uma carapaça dura, 4 dígitos em suas patas e narinas acima dos ombros. Entretanto, diferente do Titanothere,
                        o Sturmbeest não possui as duas antenas. Ambos são animais sociais que vivem em rebanhos para proteção. 
                    </p>
                    <p>
                        Sturmbeests é um animal grande, mas não possui muitas formas de defesa além de sua pele grossa e de contar com outros membros do seu rebanho,
                        a obra também mostra que a protuberância em sua cabeça é extremamente resistente, e pode ser utilizada para se defender de predadores maiores. 
                        Essa espécie também é caçada pelos nativos graças a sua quantidade de carne, porém não é uma tarefa fácil, já que seu único local vulnerável é a narina.
                    </p>
                    <p>
                        O Titanothere Cabeça de Martelo recebe esse nome pelo formato da protuberância em sua cabeça, que se assemelha a cabeça de um tubarão cabeça de martelo,
                        ele possui penas acima de sua cabeça, que no filme são utilizados como forma de intimidação, mas também poderiam ser utilizados para acasalamento, uma 
                        característica dessa criatura é seu número de olhos, possuindo dois pares desse órgão.
                    </p>
                    <p>
                        Equídeos são os mamíferos da família dos cavalos, e como o nome do Cavalo Selvagem sugere, esse animal possui uma extrema semelhança com eles,
                        porém sendo muito maior, chegando até 4 metros de altura. Outra criatura que é relativamente similar, mas ainda é um parente distante, é o Hexapede,
                        com apenas 2 metros de altura.
                    </p>
                    <div className="img">
                        <div className="align">
                            <img src={process.env.PUBLIC_URL + "/bambi.png"} alt="terra"/>
                            <img src={process.env.PUBLIC_URL + "/bambi-bombado.png"} alt="terra"/>
                        </div>
                    </div>
                    <p>
                        Assim como os pseudo paquidermes, essas criaturas são herbívoras, com 6 pernas e 4 dígitos em cada pata, além das narinas acima dos ombros. 
                        No filme não mostra nenhum caso de Cavalo Selvagem não domesticado, porém sabe-se que os Hexapede são solitários.
                    </p>
                    <p>
                        Os Cavalos Selvagens são de extrema importância para o grupo nativo dos Na’Vi, sendo utilizados da mesma forma que os cavalos terrestres são:
                        para transporte, caça e até mesmo para batalha. Eles se alimentam de um líquido produzido por flores, utilizando de sua comprida língua para 
                        alcançar e trazer à boca o alimento.
                    </p>
                    <p>
                        Os Hexapede se alimentam de grama, tendo audição e visão aguçadas para evitar predadores, mas ainda assim, são a presa favorável dos carnívoros.
                        Eles possuem uma membrana retrátil, que pode se erguer quando eles se sentem ameaçados, essa membrana possui um padrão que parecem ser olhos,
                        provavelmente isso serve para intimidar potenciais predadores.
                    </p>
                    <p>
                        Os pseudo canifelíneos foram apelidados assim pela sua semelhança com cães (caninos) e felinos (felinos). As criaturas que apareceram no filme, os 
                        Lobos Víbora, são extremamente similares aos lobos da Terra, sendo levemente maiores, medindo de 70 cm até 1 metro. E o outro representante,
                        o Thanator, predador de 2.5 metros, lembra muito um grande felino como pantera ou onça.
                    </p>
                    <div className="img">
                        <div className="align">
                            <img src={process.env.PUBLIC_URL + "/pintcher.png"} alt="terra"/>
                            <img src={process.env.PUBLIC_URL + "/gasosa.png"} alt="terra"/>
                        </div>
                    </div>
                    <p>
                        Similarmente a todas as espécies anteriores, esses animais possuem o mesmo número de patas e dígitos, além da posição das narinas e das antenas. 
                        Essas espécies são predadores, vivendo no mesmo ambiente, e competindo por alimentação.
                    </p>
                    <p>
                        Os Lobos Víbora caçam em grupo, e tendem a encurralar suas presas antes de atacar, possuindo um grau de inteligência similar aos lobos terrestres. 
                        Uma característica marcante é um par extra de olhos, porém muito pequeno, quase inexistente. Por conta disso, se pode especular que ou as espécies 
                        perderam esse par extra de olhos, porém alguns mantiveram e os lobos víbora estão no processo de perdê-los, ou algumas espécies desenvolveram mais 
                        olhos, e o lobo víbora está nesse caminho.
                    </p>
                    <p>
                        O Thanator lembra um leão pelo tecido no lado de sua cabeça, se assemelhando a juba do felino terráqueo. O tecido provavelmente deve possuir alguma 
                        função reprodutiva, ou por competição contra outros da mesma espécie por território ou alimento.
                    </p>
                    <p>
                        Pterossauros foram répteis voadores pré-históricos, que desapareceram a mais de 65 milhões de anos atrás. Os predadores aéreos de Pandora se assemelham
                        a essas bestas extintas, tomando certa inspiração, essas criaturas são os Banshees e o predador alfa, Grande Leonopteryx
                    </p>
                    <div className="img">
                        <div className="align">
                            <img src={process.env.PUBLIC_URL + "/papagaio.png"} alt="terra"/>
                            <img src={process.env.PUBLIC_URL + "/pomba.png"} alt="terra"/>
                        </div>
                    </div>
                    <p>
                        Essas criaturas tomaram caminhos evolutivos diferentes dos demais, decidindo habitar os céus ao invés da terra. Mas eles acabam se diferenciando em
                        outros aspectos também. Mesmo ambos possuindo as narinas acima do ombro e possuírem as antenas, os Banshees possuem 5 dígitos no membro da frente, e 
                        o Leonopteryx possui 6, este membro foi adaptado para o voo se tornando uma asa.
                    </p>
                    <p>
                        Os Banshees são criaturas que vivem em ninhos, e assim como os Cavalos Selvagens, também são importantes para os nativos, sendo utilizados de forma
                        similar. E diferente das outras espécies, eles possuem apenas 4 membros, ambos sendo convertidos em asas.
                    </p>
                    <p>
                        O Grande Leonopteryx é o predador incontestado no filme, por conta de sua imponência e ameaça, os nativos o chamam de ‘Toruk’ ou ‘A última sombra’, 
                        pois sua sombra é a última coisa que suas vítimas veem. Essa criatura também possui 2 pares de olhos, como os Titanothere Cabeça de Martelo e os Lobos Víbora.
                    </p>
                        <h5>Nomenclatura Científica</h5>
                    <p>
                        Como já foi mencionado, todos fazem parte do filo Chordata, por possuírem uma coluna vertebral, e como não sabemos ao certo a reprodução colocaremos
                        N/A (not available), então ficaria assim:
                    </p>
                    <ul>
                        <li>
                            <span>Filo:</span> Chordata
                        </li>
                        <li>
                            <span>Classe:</span> N/A
                        </li>
                    </ul>
                    <p>
                        A ordem agrupa espécies que possuem bastante semelhança entre si, então colocaremos a ordem, ‘Herbívora’, para as espécies que se alimentam de plantas. 
                        Os carnívoros terrestres, podemos chamar de ‘Hexacarnitus’, latim, para ‘Seis dedos carnívoros'. E aos predadores aéreos, ‘Draconideum’ ou ‘Dragões’.
                    </p>
                    <p>
                        Gênero são espécies com muitas características em comum, então faremos um para as criaturas grandes com pele grossa, chamado de ‘Magnapelide’ ou ‘Grande Pele’. 
                        Uma para os carnívoros do ar ‘Draculopericulum’ (Dragão perigoso), e cada outro animal mostrado, terá seu próprio gênero. Os Cavalos Selvagens ‘Campestride’ (Habitante do Campo), 
                        os Hexapede ‘Aurecurreae’ (Corredor de auréola), Lobos Víbora ‘Parumvenator’ (Pequeno caçador), e Thanator ‘Ungipericulus’ (Garra Perigosa).
                    </p>
                    <p>
                        E a espécie é o nome próprio do animal, colocaremos o nome de cada um deles abaixo de sua imagem, junto com sua definição:
                    </p>
                    <div className="img-list">
                        <div className="sets">
                            <div className="set">
                                <img src={process.env.PUBLIC_URL + "/8.png"} alt="terra"/>
                                <ul>
                                    <li>
                                        <span>Filo:</span> Chordata
                                    </li>
                                    <li>
                                        <span>Classe:</span> N/A
                                    </li>
                                    <li>
                                        <span>Ordem:</span> Herbívora 
                                    </li>
                                    <li>
                                        <span>Gênero:</span> Magnapelide 
                                    </li>
                                    <li>
                                        <span>Espécie:</span> <i>M. tauromalleo </i>
                                    </li>
                                </ul>
                                <span>(Touro com martelo)</span>
                            </div>
                            <div className="set">
                                <img src={process.env.PUBLIC_URL + "/7.png"} alt="terra"/>
                                <ul>
                                    <li>
                                        <span>Filo:</span> Chordata
                                    </li>
                                    <li>
                                        <span>Classe:</span> N/A
                                    </li>
                                    <li>
                                        <span>Ordem:</span> Herbívora 
                                    </li>
                                    <li>
                                        <span>Gênero:</span> Magnapelide 
                                    </li>
                                    <li>
                                        <span>Espécie:</span> <i> M. taurocorneo </i>
                                    </li>
                                </ul>
                                <span>(Touro com chifre)</span>
                            </div>
                            <div className="set">
                                <img src={process.env.PUBLIC_URL + "/6.png"} alt="terra"/>
                                <ul>
                                    <li>
                                        <span>Filo:</span> Chordata
                                    </li>
                                    <li>
                                        <span>Classe:</span> N/A
                                    </li>
                                    <li>
                                        <span>Ordem:</span> Herbívora
                                    </li>
                                    <li>
                                        <span>Gênero:</span> Campestride
                                    </li>
                                    <li>
                                        <span>Espécie:</span> <i>C. fortsipede</i>
                                    </li>
                                </ul>
                                <span>(Pé Forte)</span>
                            </div>
                            <div className="set">
                                <img src={process.env.PUBLIC_URL + "/5.png"} alt="terra"/>
                                <ul>
                                    <li>
                                        <span>Filo:</span> Chordata
                                    </li>
                                    <li>
                                        <span>Classe:</span> N/A
                                    </li>
                                    <li>
                                        <span>Ordem:</span> Herbívora 
                                    </li>
                                    <li>
                                        <span>Gênero:</span> Aurecurreae 
                                    </li>
                                    <li>
                                        <span>Espécie:</span> <i>A. parvuspreda </i>
                                    </li>
                                </ul>
                                <span>(Pequena Presa)</span>
                            </div>
                            <div className="set">
                                <img src={process.env.PUBLIC_URL + "/4.png"} alt="terra"/>
                                <ul>
                                    <li>
                                        <span>Filo:</span> Chordata
                                    </li>
                                    <li>
                                        <span>Classe:</span> N/A
                                    </li>
                                    <li>
                                        <span>Ordem:</span> Hexacarnitus 
                                    </li>
                                    <li>
                                        <span>Gênero:</span> Ungipericulus 
                                    </li>
                                    <li>
                                        <span>Espécie:</span> <i>U. cattusrex </i>
                                    </li>
                                </ul>
                                <span>(Gato rei) </span>
                            </div>
                            <div className="set">
                                <img src={process.env.PUBLIC_URL + "/3.png"} alt="terra"/>
                                <ul>
                                    <li>
                                        <span>Filo:</span> Chordata
                                    </li>
                                    <li>
                                        <span>Classe:</span> N/A
                                    </li>
                                    <li>
                                        <span>Ordem:</span> Hexacarnitus
                                    </li>
                                    <li>
                                        <span>Gênero:</span> Parumvenator
                                    </li>
                                    <li>
                                        <span>Espécie:</span> <i>P. sirius</i>
                                    </li>
                                </ul>
                                <span>(Estrela de cão maior)</span>
                            </div>
                            <div className="set">
                                <img src={process.env.PUBLIC_URL + "/2.png"} alt="terra"/>
                                <ul>
                                    <li>
                                        <span>Filo:</span> Chordata
                                    </li>
                                    <li>
                                        <span>Classe:</span> N/A
                                    </li>
                                    <li>
                                        <span>Ordem:</span> Draconideum 
                                    </li>
                                    <li>
                                        <span>Gênero:</span> Draculopericulum 
                                    </li>
                                    <li>
                                        <span>Espécie:</span> <i> D. sinumterrorem   </i>
                                    </li>
                                </ul>
                                <span> (Pavor de bolso)   </span>
                            </div>
                            <div className="set">
                                <img src={process.env.PUBLIC_URL + "/1.png"} alt="terra"/>
                                <ul>
                                    <li>
                                        <span>Filo:</span> Chordata
                                    </li>
                                    <li>
                                        <span>Classe:</span> N/A
                                    </li>
                                    <li>
                                        <span>Ordem:</span> Draconideum
                                    </li>
                                    <li>
                                        <span>Gênero:</span> Draculopericulum
                                    </li>
                                    <li>
                                        <span>Espécie:</span> <i>D. toruktiranus</i>
                                    </li>
                                </ul>
                                <span> (Última sombra tirana) </span>
                            </div>
                        </div>
                    </div>
                </TextArea>
            </Body>
        </>
    )
}