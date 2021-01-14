console.log("Aula 01 - Introdução à Lógica de Programação")
console.log("o algoritmo está comentado no arquivo cwi-reset.js")

/* algoritmo para descrever a rotina matinal. Utilizar pelo menos 2x a expressão se / então

Se
    despertador não toca
    continuar dormindo
Senão
    acordar
    Calçar chinelos
    Caminhar até o banheiro
Se
    luz apagada
então
    acender a luz do banheiro
    pegar escova de dentes
    colocar pasta de dentes
    abrir a torneira
    Escovar os dentes
enquanto
    tempo menor que 5min
    continuar escovando
    lavar a boca com água

    fechar a torneira
    utilizar enxaguante bucal
    abrir a torneira
    lavar o rosto
    fechar a torneira
    secar o rosto
    apagar a luz do banheiro
    sair do banheiro

    ir até a cozinha
se
    não tem café na térmica
então
    passar o café

    colocar o café na xícara
    se café sem açúcar
    enquanto
    colheres de açucar menor que 3
    colocar açucar.
    mexer o café
    tomar o café
senão
    colocar o café na xícara
    tomar café

    lavar a xícara
    ir até o quarto
    trocar de roupa
    ir até o escritório
    iniciar a rotina de trabalho */


console.log("-----------------------------------")
console.log("Aula 03 - Hello World")

console.log("Hello World!")

console.log("-----------------------------------")
console.log("Aula 04 - Variáveis")

let nomeCompleto = "Lucas da Silva Lins Baía";
let apelido = "Lu";
let idade = 39;
let dataNascimento = "21 de janeiro";
let localNascimento = "Porto Alegre";
let alturaL = 1.75;
let trabalhando = true;
let apresentacao = "Meu nome é " + nomeCompleto +" (sou conhecido[a] como " + apelido + ") e tenho " + idade + "anos. Nasci no dia " + dataNascimento + ", na cidade de " + localNascimento + ". Tenho " + alturaL + "m de altura e atualmente estou " + (trabalhando ? "empregado" : "desempregado") + "."

console.log(apresentacao);

console.log("-----------------------------------")
console.log("Aula 05 - Operadores")

console.log("EX1")
let nomeDoFulano = "Lucas";
let nomeDoBeltrano = "Pedro";
let mesmoNome = nomeDoFulano == nomeDoBeltrano;
console.log("Os nomes",mesmoNome?"são iguais":"são diferentes");
console.log("");


console.log("EX2");

idade = 19;
maioridade = idade>=18;

// console.log(maioridade);
console.log("Esta pessoa é", maioridade?"maior de idade" : "menor de idade")
console.log("");

console.log("EX3");

valor = 15;
valorComJuros = valor +(valor*10/100);
console.log("O valor original do boleto é de ", valor)
console.log("O valor atualizado do boleto é de ", valorComJuros);
console.log("");

console.log("EX4");
item1 = 1;
item2 = 2;
item3 = 3;
item4 = 4;
item5 = 5;
media = (item1+item2+item3+item4+item5)/5;
console.log("A média aritmética dos números ",item1,", ",item2,", ",item3,", ",item4," e ",item5," é de ",media);
console.log("");

console.log("EX5");
rl = 10;
cv = 8;
lb = rl-cv;
mb = lb/rl*100;
console.log("A margem bruta é de", mb, "%");

console.log("");
console.log("EX6");

saldo = 1000;
calca = 99.90;
salario = 2500;
doacao = 0.1;
saldo = saldo - calca + salario - doacao;
arcondicionado = 25/100*saldo
saldo = saldo - arcondicionado;
divida = saldo/2;
saldo = saldo-divida;
console.log("O saldo atual é de R$",saldo);
console.log("");

console.log("-----------------------------------")
console.log("Aula 06 - Condicionais");

// calcular o imc 

/* Menor do que 18,50	Magreza	0
Entre 18,50 e 24,99	Normal	0
Entre 25,00 e 29,99	Sobrepeso	1
Entre 30,00 e 39,99	Obesidade	2
Maior ou igual a 40,00	Obesidade grave	3 */

var peso = 75;
var altura = 1.75;
var imc = peso /(altura**2);



if(imc<18.5) {
    var grau = 0;
    var classifica = "Magreza";
} else if (imc<25) {
    var classifica = "Normal";
} else if (imc < 29) {
    var classifica = "Sobrepeso";
    var grau = 1;
} else if (imc <40) {
    var classifica = "Obesidade"
    var grau = 2;
} else {
    var classifica = "Obesidade grave";
    var grau = 3;
}


console.log("Seu IMC é de",imc.toFixed(2),"e sua classificação é",classifica);
if (grau == 1 || grau == 2) {
    console.log("Cuidado! Você está acima do peso recomendado pela OMS.");
} else if(grau == 3) {
    console.log("É importante procurar um médico para avaliar sua saúde.");
} 


console.log("-----------------------------------");
console.log("Aula 07 - Vetores, Matrizes e Arrays");


console.log("");
console.log("Array [1,2,3,4,5]");

console.log("-----------------------------------");
console.log("Aula 08 - Estruturas de repetição");
console.log("");

/* timesDeFutebol = ["Grêmio", "Inter", "Corinthians", "Flamengo"]

quantidadeDeTimes = timesDeFutebol.length

console.log(quantidadeDeTimes) */

console.log("EX1 - criar array e exibir todos os elementos")

var carrosComF = ["fusion", "fusca", "ferrari", "fiorino", "focus", "fiesta"];
console.log("Carros com F")
for (i=0;i<carrosComF.length; i++) {
    console.log(carrosComF[i]);
}

console.log("");
console.log("EX2 - calcular média aritmética de um array");

algarismos = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55];
i=0;
soma=0;
while (i<algarismos.length) {
    soma+= algarismos[i];
    i++;
}

console.log("A média destes números é",soma/algarismos.length);

console.log("");
console.log("EX3 - nomes mais populares");

nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
"Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
"Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
"Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
"Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"];

var meuNome = "Alejandro";
var isNomeComum = false;

for (i=0; i<nomesComuns.length;i++) {
    if (meuNome == nomesComuns[i]) {
        var isNomeComum = true;
        break
    }
}
if (isNomeComum) {
    console.log("É, nome comum :P");
} else {
    console.log("Diferentão, hein? XD");
}
console.log("");
console.log("----------------------------------");
console.log("Aula 09 - Funções");

console.log("EX 1 - Criar função imprimir");
// função pega um valor "value" e retorna um valor impresso no console
function imprimir(value) {
    console.log(value);
}
imprimir("Estou aprendendo muito com o Reset");
console.log("");
console.log("EX 2 - Transformar aula 5 em funções");

console.log("1")
// função compara dois nomes (a e b), se forem iguais, retorna verdadeiro, se não, retorna falso
function comparaNomes(a,b) {
    nomeDoFulano = a;
    nomeDoBeltrano = b;
    mesmoNome = nomeDoFulano == nomeDoBeltrano;
    return mesmoNome;
}
cwi = "CWI"
reset = "Reset"
imprimir(comparaNomes(cwi, cwi))   // true
imprimir(comparaNomes(cwi, reset)) // false

console.log("");
console.log("2");

// função retorna verdadeiro para maiores de idade e falso para menores de idade
function maiorDeIdade(idade) {
    maiorIdade = idade>=18;
    return maiorIdade;
}
imprimir(maiorDeIdade(30)) // true
imprimir(maiorDeIdade(18)) // true
imprimir(maiorDeIdade(5))  // false

console.log("");
console.log("3");

// função calcula 10% de juros sobre qualquer valor
function  calculaJuros(valor) {
    valorComJuros = valor*1.1;
// Utilizei o .toFixed pois estava retornando um número com diversas casas decimais no primeiro cálculo 
    return valorComJuros.toFixed(2)
}
imprimir(calculaJuros(100))   // 110
imprimir(calculaJuros(984.5)) // 1082.95

console.log("");
console.log("4");

// função calcula a média aritmética de um array de qualquer tamanho
function mediaAritmetica(itens) {
    soma=0;
// iniciado o loop for para percorrer todo o array
    for (i=0;i<itens.length;i++) {
// variável soma itera com cada item do array
        soma+=itens[i];
    }
// cálculo de media retorna a soma dividida pelo tamanho [i] do array
    media = soma/itens.length;
    return media;
}

imprimir(mediaAritmetica([1]))             // 1
imprimir(mediaAritmetica([1, 4, 10]))      // 5
imprimir(mediaAritmetica([1, 2, 3, 4, 5])) // 3

console.log("");
console.log("5");

/* Função para cálculo de margem bruta (mb), que é o lucro bruto (lb) dividido pela receita líquida (rl).
O lucro bruto (lb) é obtido calculando receita líquida (rl) menos custo de venda (cv).
*/
function margemBruta(rl, cv) {
    lb = rl-cv;
    mb = lb/rl*100;
    return mb.toFixed(3);
}

imprimir(margemBruta(1000000, 500000))      // 50
imprimir(margemBruta(528459.11, 632501.87)) // -19.68[...]

console.log("");
console.log("----------------------------------");
console.log("Aula 10 - Juntando Tudo");


/*
Uma empresa quer verificar se um colaborador está qualificado para a aposentadoria.
Para estar em condições de se aposentar, ele deve atender a pelo menos um dos seguintes critérios:

Ter pelo menos 65 anos de idade;
Ter trabalhado no mínimo 30 anos;
Ter pelo menos 60 anos de idade e 25 anos de trabalho.
*/

colaboradores    = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison']
idades           = [      69,          66,           58,      61,         60,          64,         59,         55]
temposDeTrabalho = [      31,          29,           30,      26,         25,          24,         26,         29]


function verificarAposentadoria(nome) {
    // Função para verificar a condição de aposentadoria de um funcionário
    // Para poder se aposentar, deve atender a pelo menos um dos critérios:
    // Ter pelo menos 65 anos de idade;
    // Ter trabalhado no mínimo 30 anos;
    // Ter pelo menos 60 anos de idade e 25 anos de trabalho.
    
    colaboradores    = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison']
    idades           = [      69,          66,           58,      61,         60,          64,         59,         55]
    temposDeTrabalho = [      31,          29,           30,      26,         25,          24,         26,         29]
    
    for(i=0; i<colaboradores.length; i++) {
        if(nome == colaboradores[i]) {
            //Verifica se o nome está no array
            isColaborador=true;
            break
        } else {
            isColaborador = false;
            
        }
}

        if (!isColaborador) {
            // Caso o nome não esteja no array, retorna mensagem de erro
            console.log("Colaborador inválido :|")
            
        } else {
            // Caso o nome esteja no array, verifica as regras de aposentadoria
            if (idades[i] >=65 || temposDeTrabalho[i] >=30) {
                console.log("Parabéns, já pode sair de férias eternas :)");
            } else if (idades[i] >=60 && temposDeTrabalho[i] >=25){
                console.log("Parabéns, já pode sair de férias eternas :)");
            } else {
                console.log("Infelizmente para você, ainda falta um tempo :(");
            }
    
}
}

        
verificarAposentadoria('Rosiméri')    // true (regra 3)
verificarAposentadoria('Agripino')    // false (falta 1 ano de idade para regra 3)
verificarAposentadoria('Rhoger')      // true (todas)
verificarAposentadoria('Hudnélson')   // false (colaborador inexistente)
verificarAposentadoria('Gleysberto')  // true (regra 2)
verificarAposentadoria('Regislane')   // false (falta 1 ano de idade para regra 1 e 1 de trabalho para regra 3)
verificarAposentadoria('Cléverson')   // true (regras 1 e 3)
verificarAposentadoria('Nádio')       // true (regra 3)
verificarAposentadoria('Wellison')    // false (falta 1 ano de trabalho para regra 2)
verificarAposentadoria('Florisberto') // false (colaborador inexistente)