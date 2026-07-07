const botoes = {
    1:false,
    2:false,
    3:false,
    4:false,
    5:false,
    6:false,
    7:false,
    8:false,
    9:false,
    10:false,
    11:false,
    12:false,
    13:false,
    14:false,
    15:false,
    16:false,
    17:false,
    18:false,
    19:false,
    20:false,
    21:false,
    22:false,
    23:false,
    24:false,
    25:false,
}

function colorirBotoes()
{
    for(let i=1; i<=25; i++)
    {
        if(!botoes[i])
        {
            document.getElementById('botao'+i).style.color = "rgb(99, 199, 182)"
        }
    }
}

function enviarResposta()
{
    let resposta = 0
    for(let i=1;i<=25;i++)
    {
        if(botoes[i])
        {
            resposta++
        }
    }

    responderPergunta(resposta)

    document.getElementById('resposta').textContent = resposta
    for(let i=1;i<=25;i++)
    {
        botoes[i]=false
        document.getElementById('botao'+i).style.backgroundColor = "rgb(99, 199, 182)"
    }
}

function alternarBotao(botao)
{
    if(!botoes[botao])
    {
        botoes[botao] = true;
        document.getElementById('botao'+botao).style.backgroundColor = "rgb(73, 211, 31)";
    }
    else
    {
        botoes[botao] = false;
        document.getElementById('botao'+botao).style.backgroundColor = 'rgb(99, 199, 182)'
    }
}

function gerarPergunta() // gera uma Soma
{
    let resultado;
    let parcela1;
    let parcela2;

    do{
        resultado = Math.floor(Math.random() * 25);
        parcela1 = Math.floor(Math.random() * 24);
        parcela2 = resultado - parcela1;
    }while(parcela2<0);

    const container = document.getElementById("pergunta");
    let pergunta = "<h3>selecione "+parcela1+"+"+parcela2+" quadrados</h3>";
    container.innerHTML = pergunta;
}

function responderPergunta(resposta)
{
    
}

function carregarComponente(idElemento, arquivoHTML)
{}

document.addEventListener("DOMContentLoaded", () => {
    carregarComponente("espaco-cabecalho", "cabecalho.html");
    carregarComponente("espaco-rodape", "rodape.html");
    gerarPergunta()
});