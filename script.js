
function validarFormulario() {
    // Verifica se o campo nome foi preenchido
    var nome = document.getElementById("nome");
    if (nome.value.trim() == "") {
        alert("Por favor, preencha o campo nome.");
        nome.focus();
        return false;
    }

    // Verifica se o campo e-mail foi preenchido
    var email = document.getElementById("email");
    if (email.value.trim() == "") {
        alert("Por favor, preencha o campo e-mail.");
        email.focus();
        return false;
    }

    // Verifica se o campo senha foi preenchido
    var senha = document.getElementById("senha");
    if (senha.value.trim() == "") {
        alert("Por favor, preencha o campo senha.");
        senha.focus();
        return false;
    }

    // Verifica se o campo confirmação de senha foi preenchido
    var confirmaSenha = document.getElementById("confirma-senha");
    if (confirmaSenha.value.trim() == "") {
        alert("Por favor, preencha o campo confirmação de senha.");
        confirmaSenha.focus();
        return false;
    }

    // Verifica se as senhas digitadas são iguais
    if (senha.value != confirmaSenha.value) {
        alert("As senhas digitadas não são iguais. Por favor, verifique.");
        senha.focus();
        return false;
    }

    // Se chegou até aqui, o formulário foi preenchido corretamente
    alert("Cadastro realizado com sucesso! Obrigado por se cadastrar.");
    return true;
}
