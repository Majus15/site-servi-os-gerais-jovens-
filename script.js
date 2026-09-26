function entrar() {

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const endereco = document.getElementById("endereco").value.trim();

    if (!nome || !telefone || !cidade || !endereco) {
        alert("Preencha todos os campos.");
        return;
    }

    document.getElementById("cadastro").style.display = "none";
    document.getElementById("site").style.display = "block";
}

function contratar(nome) {
    alert("Você contratou " + nome + "!\nEm breve ele entrará em contato.");
}
