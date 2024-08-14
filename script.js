const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que são mitos?",
        alternativas: [
            {
                texto: "é uma narrativa fantástica que possui o objetivo de explicar a origem de tudo aquilo que existe e é considerado importante para um determinado povo.",
                afirmacao: [
                    "de fato povos tradicionais costumavam criar os ditos mitos para explicar tais acontecimentos “inexplicáveis”, pois naqueles tempos a ciência não era um método utilizado frequentemente."
                    ]
            },
            {
                texto: "são estados mentais em que se assume que algo é verdadeiro ou provável. Elas são expressas linguisticamente por meio de afirmações.",
                afirmacao: [
                    "errado essa é a definição de crença."
                    ]
            }           
            
        ]
    },
    {
        enunciado: "Qual a importância do folclore na cultura brasileira?",
        alternativas: [
            {
                texto:"é um meio de aproximação entre os povos e grupos sociais e de afirmação de sua identidade cultural.",
                afirmacao: [
                    "Apesar de não ser uma resposta completamente errada, é bom lembrar de que o folclore foi e ainda é"
                    ]
            },
            {
                texto: "Alternativa 2 da pergunta 2",
                afirmacao: [
                    "Simboliza a essência da cultura popular, atuando como um pilar fundamental na construção da identidade de um povo."
                    ]
            }
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto:"Alternativa 1 da pergunta 3",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                    ]
            },
            {
                texto:"Alternativa 2 da pergunta 3",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                    ]
            }
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
