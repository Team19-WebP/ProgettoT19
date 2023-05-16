function validaFormLogin(username, password) {
    const regexPass = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/; //TODO regula exp da cambiare con quella giusta

    if(!regexPass.test(passwordVal.value)){
        passwordVal.focus();              //se la regola non è rispettata mostro il messaggio di errore e metto li il focus
        alert('Password non valida!');
        return false;
    }
    return true;
}