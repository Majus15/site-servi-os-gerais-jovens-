function entrar() {

    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let cidade = document.getElementById("cidade").value;
    let endereco = document.getElementById("endereco").value;

    if(nome === "" || telefone === "" || cidade === "" || endereco === ""){
        alert("Preencha todos os campos para continuar.");
        return;
    }

    alert("Bem-vindo(a), " + nome + "!");

    document.getElementById("cadastro").style.display = "none";
    document.getElementById("site").style.display = "block";
}

function contratar(nomeProfissional){

    let resposta = confirm(
        "Deseja contratar " + nomeProfissional + "?"
    );

    if(resposta){

        alert(
            "Solicitação enviada com sucesso!\n\n" +
            "O profissional " + nomeProfissional +
            " entrará em contato em breve pelo telefone cadastrado."
        );

    }

}
