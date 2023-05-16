let ageAlert = document.querySelector("#ageAlert");
let emailAlert = document.querySelector("#emailAlert");
let passAlert = document.querySelector("#passAlert");
let confPassAlert = document.querySelector("#confPassAlert");

const regexEmail = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
const regexPass = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/; //TODO regula exp da cambiare con quella giusta


function validaForm(datadinascita, email, username, passwordVal, confpassword) {
    resetForm();
    let nowDate = new Date();  // data di ora
    let dataNascita = new Date(datadinascita.value);
    if (  (nowDate.getFullYear() - dataNascita.getFullYear() < 18) ||  //if per controllare che la data di nascita inserita sia di un maggiorenne
        ((nowDate.getFullYear() - dataNascita.getFullYear() === 18) && (nowDate.getMonth() < dataNascita.getMonth() )) ||
        ((nowDate.getFullYear() - dataNascita.getFullYear() === 18) && (nowDate.getMonth() === dataNascita.getMonth()) && (nowDate.getDate() < dataNascita.getDate()))
    ){
        ageAlert.style.color = "#FF0000";       //se la regola non è rispettata mostro il messaggio di errore e metto li il focus
        ageAlert.style.fontSize = "small";
        datadinascita.focus();
        alert('non sei maggiorenne!');
        return false;
    }else if(!regexEmail.test(email.value)){
        emailAlert.hidden = false;       //se la regola non è rispettata mostro il messaggio di errore e metto li il focus
        email.focus();
        alert('Email non valida!');
        return false;
    }else if(!regexPass.test(passwordVal.value)){
        passAlert.style.color = "#FF0000";
        passAlert.style.fontSize = "small";
        passwordVal.focus();              //se la regola non è rispettata mostro il messaggio di errore e metto li il focus
        alert('Password non valida!');
        return false;
    }else if(passwordVal.value!==confpassword.value){
        confPassAlert.hidden = false;     //se la regola non è rispettata mostro il messaggio di errore e metto li il focus
        passwordVal.focus();
        alert('Password non valida!');
        return false;
    }
    return true;
}

function resetForm(){
    ageAlert.style.color = "#000000";
    ageAlert.style.fontSize = "xx-small";
    emailAlert.hidden = true;       //nascondo tutti gli i messaggi di errore
    passAlert.style.color = "#000000";
    passAlert.style.fontSize = "xx-small";
    confPassAlert.hidden = true;
}


