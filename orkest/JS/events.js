chmod = 775;//seuls le président et les administrateurs peuvent modifier cette page

//si la date est atteinte alors elle passe de la box a_venir à la box passé

//ecoulement du temps entre maintenant et le jour du spectacle
const today=new Date().getTime();
const spectacle= document.getElementsByClassName('date');
//enregistrement automatique de la date d'insertion

//creation d'un décompte
function getTimeRemaining(){
    const countdownDate = new Date(spectacle).getTime();
    const total = countdownDate - today;// décompte de jours entre la date du spectacle et la date actuelle
    //décompte heures, minutes, secondes 
    const seconds = Math.floor( (total%(1000*60)/1000));//1000nb de ms
    const minutes = Math.floor( (total%(1000*60*60)/(1000*60)));
    const hours = Math.floor( (total%(1000*60*60*24)/(1000*60*60)));
    const days = Math.floor( total/(1000*60*60*24) );
console.log(days, hours, minutes, seconds);
    alert(`Dans ${days} j ${hours} h ${minutes} min  ${seconds} s, notre représentation commencera!`);
}
getTimeRemaining();
// affichage de l'ecoulement du temps toutes les secondes
countdownInterval = setInterval(()=>{
    getTimeRemaining()
},1000);

// quand la date de spectacle =today, la dateOf Show passe dans .pass chronologiquement du récent au plus ancien
if(today === Date(spectacle)){
   
   li.classList.addEventListener('date',function(){

     dateOfShow = document.remove.appendChild(li).prependTo (".passed") ;
   });
    
}

