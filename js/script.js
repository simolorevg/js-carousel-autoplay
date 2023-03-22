const imgArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];//creo array di immagini
const imgSection = document.querySelector('.img-section'); //creo variabile per individuare la sezione delle immagini
console.log(imgSection);
for (let i = 0; i < imgArray.length; i++) {
    let currentImg = imgArray[i];// creo variabile per effettuare assegnaione di immagine all'interno di img-section
    imgSection.innerHTML += `<div class="img-container">
    <img src="${currentImg}" alt="">
    </div>`;
    console.log(imgSection);
};
//creo la sequenza
imgContainerArray = document.getElementsByClassName('img-container');//genero l'array di div contenenti le immagini
console.log(imgContainerArray);
let containerIndex = 0;//imposto l'indice a zero
imgContainerArray[0].classList.add("active");//parte dalla prima immagine
const upBtn = document.querySelector('.up');
const downBtn = document.querySelector('.down');//creo le variabili per poter utilizzare i pulsanti up e down
upBtn.addEventListener("click", function () {
    downBtn.classList.remove('hidden');//faccio riapparire il pulsante down
    clearInterval(automaticTransitionCarousel);
    automaticTransitionCarousel();
    setInterval(automaticTransitionCarousel,3000);
});
let containerArrayLenght = imgContainerArray.length;//questo mi servirà per il superbonus
downBtn.addEventListener("click", function () {
    upBtn.classList.remove('hidden');// faccio riapparire i pulsante up
    clearInterval(automaticTransitionCarousel);
    carouselPrev();
    setInterval(automaticTransitionCarousel,3000);
});
/////////FUNZIONE DEDICATA PER IL CAROSELLO AUTOMATICO
function automaticTransitionCarousel(){
    if (containerIndex === imgContainerArray.length - 1) { //se arrivo in fondo al carosello mi fa ripartire da capo
        imgContainerArray[containerIndex].classList.remove('active');//rimuovo la classe active all'immagine corrente
        containerIndex = 0;//riporto all'inizio l'indice
        imgContainerArray[containerIndex].classList.add('active');//aggiungo active all'immagine successiva
    } else {
        imgContainerArray[containerIndex].classList.remove("active");//nascondo l'immagine corrente
        containerIndex++;//incremento di uno l'indice
        imgContainerArray[containerIndex].classList.add('active');//faccio apparire l'immagine successiva
    }
    console.log('passo a nuova immagine, containerIndex: '+containerIndex);
}
function carouselPrev(){
    if (containerIndex === 0) { //se arrivo in fondo al carosello ricomincio da capo
        // downBtn.classList.add("hidden");
        imgContainerArray[containerIndex].classList.remove('active');
        containerIndex = containerArrayLenght - 1;
        imgContainerArray[containerIndex].classList.add('active');
    } else {
        imgContainerArray[containerIndex].classList.remove("active");//nascondo l'immagine corrente
        containerIndex--;//decremento di uno l'indice
        imgContainerArray[containerIndex].classList.add('active');//faccio apparire l'immagine successiva
    }
}
/////////CREO INTERVALLO
const carouselAutomatic = setInterval(automaticTransitionCarousel,3000);//ho riportato il programma eseguito sull'upBTN, mettendo l'intervallo dopo 2 secondi
//se clicco il bottone su o giuù
// allora blocco per tot tempo il carosello e poi riparte
