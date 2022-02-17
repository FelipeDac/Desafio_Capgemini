function passwordValidation() {
    var checkPassword = document.getElementById('password').value;
    characterCheck = checkPassword.length - 6;
    requiredcharacters = characterCheck * -1;
    if (checkPassword.length == 0){
        document.getElementById('requirements').innerHTML = `Sua senha não pode ficar em branco!`;
    } else if (checkPassword.length < 6) {
        document.getElementById('requirements').innerHTML = `Você precisa adicionar mais ${requiredcharacters} caracteres para sua senha se tornar segura.`;
    } else {
        document.getElementById('requirements').innerHTML = "<span style=' color: #97D8C4'>Senha válida!</span>" ;
    }

}