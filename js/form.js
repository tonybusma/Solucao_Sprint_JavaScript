//class contato

class contato {
    _nome;
    _sobrenome;
    _email;
    _cpf;
    _telefone;
    _contato;

    constructor(nome, sobrenome, email, cpf, telefone, contato){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
        this._telefone = telefone;
        this._contato = contato;
    }
}

function Post(form) {

  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);
  
}

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
}


const botao = document.getElementById('button');

botao.addEventListener("click", function(event){
    console.log(Enviar());
})

function Transicao(){
    botao.style.background = "white";
    botao.style.border = "#1351d8 solid 2px";
    botao.style.width = "240px";
    botao.style.height = "45px";
    botao.style.fontSize = "20px";
    botao.style.cursor = "pointer";
    botao.style.color = "#1351d8";
    botao.style.fontWeight = "bold";
}

botao.addEventListener("mouseover", Transicao);
botao.addEventListener("mouseout", function(){
    botao.style.background = "#1351d8";
    botao.style.border = "none";
    botao.style.width = "200px";
    botao.style.height = "40px";
    botao.style.fontSize = "13px"
    botao.style.color = "white";
});
