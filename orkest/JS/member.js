let form =document.querySelectorAll('#signinForm');
let news;


if (!inputEmail === validEmail && !inputPassword === validPassword){
    let news = document.querySelector('#news').addEventListener('click', function(e){
        e.preventDefault(e);
    });
}else{
    let target = this.getAttribute('href');
    windows.location=target;
}
chmod = 775;//seuls president et  administrateurs peuvent modifier la page 