let listaDosAmigos = []; //Cria um array para salvar os nomes

function limparCampo(){ //Cria uma função para limpar o campo "input"
    nomeDoAmigo = document.querySelector("input");
    nomeDoAmigo.value = "";
}

function adicionarAmigo(){ //Cria uma função para sempre que o botão "adicionar" for clicado, adicione um nome ao array
    let nomeDoAmigo = document.querySelector("input").value.trim(); //.trim() elimina qualquer espaço vazio do texto
    if (nomeDoAmigo == ""){ //Se o espaço estiver em branco, nada será salvo no array, e será emitido um alerta 
        alert("Insira um nome válido!");
        return; //interrompe a função
    }

    listaDosAmigos.push(nomeDoAmigo); //Salva o nome no array
    console.log(listaDosAmigos);

    let textoListaAmigos = document.getElementById("listaAmigos"); //Atribui o nome do array à um texto exibido na tela
    let li = document.createElement("li"); //Cria um formato de lista, para os nomes ficarem ordenados um abaixo do outro
    li.textContent = nomeDoAmigo;
    textoListaAmigos.appendChild(li);

    limparCampo();
}

function sortearAmigo(){ ////Cria uma função para quando o botão "Sortear Amigo" for clicado, sorteie um nome aleatoriamente 
    numeroDeAmigos = listaDosAmigos.length; //Define o numero maximo de nomes na lista
    let nomeEscolhido = parseInt(Math.random() * numeroDeAmigos);  //Escolhe um numero aleatorio entre 1 e o numero maximo
    let textoAmigoEscolhido = document.getElementById("resultado"); //Atribui uma variavel "textoAmigoEscolhido" ao texto que será exibido na tela
    textoAmigoEscolhido.innerHTML = `O amigo escolhido foi: ${listaDosAmigos[nomeEscolhido]}`; //Usa o nomero aleatorio para puxa um nome da lista pelo ID(?) 
    console.log(`Amigo: ${listaDosAmigos[nomeEscolhido]}`);
}