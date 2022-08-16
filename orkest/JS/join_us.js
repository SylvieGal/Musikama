let form= document.querySelector('#loginForm');
form.email;

const validEmail =function(inputEmail){
    let emailRegEx =new RegEx('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+{.}{1}[a-z]{2,10})$',g);
}
let testEmail = emailRegEx.text(inputEmail.value);
let small=inputEmail.nextElementSibling;
if (testEmail) {
    small.innerHTML='Email valide';
    small.classList.add(text-success);
    small.classList.remove(text-danger);
    return true;
}else{
    small.innerHTML = 'Email non valide';
    small.classList.add('text-danger');
    small.classList.remove('text-success');
    return false;

    form.email.addEventListener('change', function(){
        validEmail(this);
    })
}

form.password;
const validPassword =function(inputPassword){
    let passwordRegEx =new RegEx('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+{.}{1}[a-z]{2,10})$',g);
}
let testPassword = passwordRegEx.text(inputPassword.value);
let message;
let valid = false;
if (inputPassword .value.length < 3||inputPassword.value.length > 20||![a-z]||![ A-Z]||![0-9] ){
    message='Mot de passe invalide. Le mot de passe doit contenir au moins une minuscule, une majuscule,un chiffre';
}else{
    message ='Le mot de passe est valide';
    valid =true;
}

let small=inputPassword.nextElementSibling;
if (testPassword) {
    small.innerHTML='Mot de passe valide';
    small.classList.add(text-success);
    small.classList.remove(text-danger);
    return true;
}else{
    small.innerHTML = 'Mot de passe non valide';
    small.classList.add('text-danger');
    small.classList.remove('text-success');
    return false;

    form.password.addEventListener('change', function(){
        validEmail(this);
    })
}
form.addEventListener('submit',function(e){
    e.preventDefault();
    if (![validEmail= true]||![validPassword= true]>=3){
       message='Votre compte est bloqué après trois tentatives infructueuses. Contactez votre administrateur.'

    }
});
