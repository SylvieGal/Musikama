
const event=()=>{
alert( "N'oubliez pas notre rendez-vous du Samedi 23avril 2022 à 15.00 au centre culturel le Moelie à Linkebeek")
};
event();
// quand un evenement est ajouté, apparition de la pop up
let li =document.getElementsByTagName('li') ;

for(li++){
   event();
}