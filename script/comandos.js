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
}

function alternarBotao(botao)
{
    botoes[botao] = true;
    document.getElementById('botao'+botao).style.backgroundColor = "rgb(73, 211, 31)";
}

function colorirBotoes()
{
    for(let i=1; i<=25; i++)
    {
        if(botoes[i])
        {
            document.getElementById('botao'+i).style.color = "rgb(99, 199, 182)"
        }
    }
}

function carregarComponente(idElemento, arquivoHTML)
{}
