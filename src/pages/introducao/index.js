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
`

export default function Intro(){
    return (
        <>
            <Title>INTRODUÇÃO</Title>
            <Body>
                <TextArea>
                    <p>
                        A obra prima de James Cameron, Avatar, foi lançada em 2009, e até hoje mantém a maior bilheteria da história, 
                        com mais de dois bilhões e oitocentos mil dólares. Esse dinheiro não foi recebido ao acaso; James tomou o trabalho de dirigir,
                        escrever, produzir e editar a obra, para que ela ficasse exatamente como ele imaginou. A produção começou em 1994, 
                        quando Cameron escreveu 80 páginas, idealizando o filme, com base em todas as obras de ficção que ele consumiu.
                    </p>
                    <p>
                        É possível ver todo o carinho que o criador tem pelo trabalho e a dedicação empenhada para trazer o mundo de Pandora a vida;
                        Cameron buscou a tecnologia mais avançada da época para parecer o mais real possível, o resultado é um espetáculo visual, 
                        tanto que a qualidade chega a ser impressionante até mesmo para os dias de hoje. O autor comentou que queria trazer uma nova
                        leitura dos estilos de escritores de ficção científica como <a href='https://en.m.wikipedia.org/wiki/Edgar_Rice_Burroughs'>Edgar Rice Burroughs</a>, e do japonês <a href='https://en.m.wikipedia.org/wiki/Hayao_Miyazaki'>Hayao Miyazaki.</a>
                    </p>
                    <p>
                        O autor teve a ajuda de criadores como Wayne Barlowe e Jordu Schell para criar as imagens da cultura e características do povo
                        nativo, os Na’vi, além de contar com departamentos diferentes para o desenvolvimento de cada elemento: fauna, flora e o
                        maquinário futurista dos humanos. O idioma dos Na’vi foi criado pelo linguista Paul Frommer, desenvolvendo uma língua 
                        com mais de 1000 palavras, tendo como inspiração os idiomas Aramaico e Maori.
                    </p>
                    <p>
                        A história fala de um estrangeiro, que acaba se encantando pela cultura de um povo local e se junta a sua causa para expulsar um
                        grupo opressor, como a história real de Lawrence de Arabia, além de se apaixonar por uma nativa, como o caso real de Pocahontas.
                        A obra também critica o imperialismo, demonstrando ações e ideais similares aos europeus durante a exploração do novo mundo e a 
                        partilha africana, além de atiçar, de forma velada, atos dos Estados Unidos durante a guerra do Iraque, questionando a política
                        intervencionista e a tática militar de choque e terror, comumente praticada pelo exército americano.
                    </p>
                    <p>
                        O filme possui diversos pontos positivos, com atores excelentes e uma direção impecável, o im projeto singular de um homem que tem muito 
                        amor pelo projeto, e por isso despertou muito interesse e cativou diversos espectadores, dentre eles os autores desse site.
                    </p>
                    <p>
                    Esse trabalho tem como objetivo traçar paralelos da natureza de Pandora com o nosso mundo e analisar diferentes aspectos,
                     tentando utilizar uma linguagem que todos os leitores possam compreender, mas ainda trazendo uma carga de informações lúdicas e simples.
                      Sem mais delongas, fiquem a vontade para explorar o site e conhecer mais sobre o universo criado por James Cameron e aspectos da biologia!
                    </p>
                </TextArea>
            </Body>
        </>
    )

}