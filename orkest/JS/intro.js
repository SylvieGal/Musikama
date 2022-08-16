/*
let selectedPage;
let activePage;
let page;
let link;
let chosenPage;

const choice = document.querySelector(".choice")

const classOption = document.querySelector('[.page1,.page2,.page3,.page4,.page5,.page6]')


//lorsqu'on clique sur un lien du menu, la page présente disparait et la page sélectionnee lien apparait de droite à gauche 
 //translation de la page vers la gauche    
link.addEventListener('click',()=>{
document.getElementById("page").animate(()=>{
        if (chosenPage in classOption){
        activePage.style.display = none;
        selectedPage.style.opacity=1;
        [{transform : 'translateX(0px)'},
        {transform : 'translateX(-100%)'}],{duration:1000,timing:makeEaseOut(quad),draw:function(progress){
            page.style.right=width*progress+'px'}
        }}
    })
// arret de l animation
let start = Date.now();// enregistrement de l 'heure actuelle 
let timer = setInterval(()=>{
// temps ecoulé depuis le debut de l'animation     
    let timePassed = Date.now()- start;
//durée de l'animation
    if (timePassed >=2000){
        clearInterval(timer);
        return;}
    else {
        requestedAnimationFame(animate);}
    draw(timePassed);},20)
    }
);
activePage = new selectedPage();*/