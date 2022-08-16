
let activePage;
let activeLink;
let width;
let progress=performance.now()-Date.now();
let mouse;
let response;
let searchPage;
let selectedPage="";
let page1=fetch("introduction.html");
let page2=fetch("managers.html");
let page3=fetch("conductors.html");
let page4=fetch("events.html");
let page5=fetch("join_us.html");
let page6=fetch("member.html");

const page=[page1,page2,page3,page4,page5,page6]

const link =document.getElementById("link");//select

// si je crée une nouvelle page, elle push dans la const page

// 1- je vérifie que la nouvelle page n'existe pas dans page
let newpage="";

switch(newpage){
    case'newpage!==[0]':console.log('page différente');
    break;
    case'newpage!==[1]':console.log('page différente');
        break;
    case'newpage!==[2]':console.log('page différente');
        break;
    case'newpage!==[3]':console.log('page différente');
        break;
    case'newpage!==[4]':console.log('page différente');
        break;
    case'newpage !==[5]':console.log('page différente') ;
    break;
    //2- si cette nouvelle page n'existe pas alors elle se rajoute en bout d'array
    default:page.push();
}
// lorsque je survole le logomenu, le menurun apparait et la souris change d'aspect
let menurun=document.getElementById("menurun");//form
let logomenu = document .getElementById("logomenu");// iconmenu
menurun.style.visibility="hidden";
logomenu.addEventListener("click",()=>{
    console.log('mouse!');
    // link.style.visibility="visible";
    logomenu.mouseover=aff;
    function aff(){
        menurun.style.visibility="visible";
        menurun.style.display="block";
        link.style.display="block";
        logomenu.style.visibility="hidden";
        mouse.style.cursor="pointer";
    }aff();
});



logomenu.addEventListener("mouseout",()=>{
    console.log('no mouse!')
    //link.style.visibility="hidden";
    
    logomenu.mouseout=cac;
    function cac(){
        let time="";
        if(time<5000){
            menurun.style.visibility="visible";
            link.style.display = "block";
        }else{
        
        menurun.style.visibility="hidden";
        link.style.display = "none";
        logomenu.style.display="block";
        mouse.style.cursor = " default";
    }
}cac();
//Quand je suis sur une page, le lien de la selectedPage apparait en surbrillance

//Lorsqu'on clique sur un lien du menu, la page présente disparait et la page sélectionnée apparait de droite à gauche en2s
//1. je clique sur le lien 

link.addEventListener('click',()=>{

//2. je recherche la page selectionnée après avoir cliqué sur le lien correspondant 
searchPage=fetch('page');
//3. La page est trouvée et est en attente en promesse

let selectedpage= async function selectPage(){
    response =await searchPage;
//4. On recupere la promesse (etat intermediaire)
    Promise.then(value=>console.log(value)).catch(e=>console.log(e));
    //echec
    if(!response.ok){
        throw new Error("Error http. status:${response.status}!");
    }//reussite
    return await response.value;
    }
selectedpage.then((page)=>{
    document.body.appendChild(page);
}).catch(e =>console.log(e));
//5. une fois la promesse realisée, la page apparait par une translation de la page de la droite vers la gauche et simultanément la page précédente disparait
let duration=2000;
let easing ='ease-in-out' ;

//console.log('click!');
document.getElementById("page").animate({
    // pour chaque page choisie
    forEach(page) {
        /*activePage.style.display = "none";
        selectedPage.style.display = "block";*/
        switch(page){
            case'activePage':
            {[{transform: 'translateX(0) opacity:1'}, {transform: 'translateX(-100%) opacity:0'}], {duration, easing};
        }
        break;
        case 'selectedPage':
            {[{transform: 'translateX(100%) opacity:0'}, {transform: 'translateX(0) opacity:1'}], {duration, easing};
        }
        break;
        default:  alert ("La page demandée n'a pu être chargée");}
        
    }});
    // arrêt de l'animation
    let start = Date.now();// enregistrement de l'heure actuelle
    let timer = setInterval(()=>{
        // temps écoulé depuis le debut de l'animation
        let timePassed = Date.now()- start;
        function animate(time){
            let timeFraction = (time-start)/duration;
            if(timeFraction>1) timeFraction=1;
            let timing=timeFraction-progress;
            return(timing);
        }
        animate();
        //durée de l'animation
        if (timePassed >=2000){
            clearInterval(timer);
        }else{return timer}
        
        document.getElementById('page').animate(activePage,selectedPage)
    });
    page.style.left= width*progress+'px';});
    //la page selectionnée devient la nouvelle page active ;
    activePage = new selectedPage;
    // le lien cliqué apparait en surligné ou gras dans menurun
    activeLink.style.fontWeight= "strong";
})
    

                    
      