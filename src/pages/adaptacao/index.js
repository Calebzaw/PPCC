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
            align-items: center;
            justify-content: center;
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
            <Title>ADAPTAÇÃO</Title>
            <Body>
                <TextArea>
                    <p>
                        Pelas similaridades que Pandora possui com o planeta Terra, é possível deduzir que durante o processo evolutivo,
                        as espécies tiveram uma origem similar às que conhecemos no nosso mundo, surgindo dos oceanos e se adaptando à Terra e ao ar.
                        Para analisar a evolução e conseguir concluir se essas espécies derivam de um ancestral comum, nós devemos analisar as características físicas, 
                        químicas e durante o desenvolvimento da espécie durante o ciclo de vida e gestação. Infelizmente, apenas é possível ver as características
                        superficiais, já que a mídia é fictícia, e não há momentos em que vemos a parte interna delas.
                    </p>
                    <p>
                        O termo ‘animal’ é referente as criaturas do reino Animalia, nome dado a diferentes seres do nosso planeta, 
                        já que Pandora é um astro diferente do nosso, seria incorreto utilizar a palavra ‘animal’ logo, neste trabalho os chamaremos de
                        ‘criaturas’ ou nos referimos ao nome comum dado a elas.
                    </p>
                    <p>
                        As criaturas de Pandora possuem várias características compartilhadas entre si, como simetria bilateral (quando dividido ao meio,
                        se vê duas metades quase idênticas), sistema digestório completo, com boca e ânus, além da maioria das espécies possuírem 6 membros.
                        Tendo todos esses aspectos listados, explicaremos os principais conceitos evolutivos e criaremos uma árvore que supõe o grau de parentesco das
                        criaturas de Pandora.
                    </p>
                    <p>
                        Pelos aspectos listados, pode-se supor que as criaturas possuem um ancestral comum, que possuia características que foram 
                        adaptadas ou perdidas com o decorrer do tempo. Esse ancestral provavelmente possuía 6 pernas, e duas estruturas similares a
                        antenas; essa criatura evoluiu, e por meio de seleção natural apenas as espécies que são vistas no filme conseguiram sobreviver.
                    </p>
                    <p>
                        Vale ressaltar que evolução não significa ‘adicionar’ ou ‘melhorar’ características, mas sim adaptar para ajudar a espécie de 
                        acordo com o local onde ela vive. Além disso, não é algo linear como representado na figura abaixo, várias espécies surgiram e desapareceram sendo
                        representado pelas linhas, que mostram os passos e etapas que modificaram as espécies, essa imagem é para facilitar a compreensão e ilustrar a
                        vida da fauna de Pandora.
                    </p>
                    <div className="img">
                        <div className="align">
                            <div className="referencia">
                                <img src={process.env.PUBLIC_URL + "/ancestral.png"} alt="terra"/>
                                <span><i>Árvore evolutiva adaptada do vídeo ‘The Biology of James Cameron’s Avatar’ por ‘TREY the explainer’</i></span>
                            </div>
                        </div>
                    </div>
                </TextArea>
            </Body>
        </>
    )
}