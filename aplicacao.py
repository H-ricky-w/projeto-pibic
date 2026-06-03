# importa as bibliotecas
from flask import *
from random import *

# 2. Criar a aplicação
app = Flask(__name__)

# Página inicial
@app.route('/')
def pagina_inicial():

    return render_template("index.html")

# Página de jogo
@app.route('/jogo')
def pagina_jogo():
    
    return render_template('jogo.html')

@app.route('/responder', methods=['POST'])
def enviar_resposta():
    botoes = []
    nomeBotao = 'botao{}'
    for n in range(1,26):
        botoes.append(nomeBotao.format(n))
    
    return redirect('/jogo')

# 5. Iniciar o servidor
if __name__ == '__main__':
    app.run(debug=True)