/*
---PROBLEMA---
Dato un array di oggetti letterali con:
- url dell’immagine
- titolo
- descrizione

Creare un carosello come nella foto allegata.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/

// CONTENITORE INFORMAZIONI
const images = [
    {
        image: './assets/img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './assets/img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './assets/img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './assets/img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './assets/img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// COSTANTI ARROW
const prev = document.querySelector(`#prev`)

const next = document.querySelector(`#next`)

// CONTENITORE IMMAGINI
const photo = document.querySelector('#foto')

// VARIABILE PER CAMBIARE LE IMMAGINI
let indexActive = 0;

// COSTANTI PLAY/PAUSE
const play = document.querySelector('#play')

const pause = document.querySelector('#pause')

// let soldatino = true

photo.innerHTML = 
`
<div class="item active first">
    <img src="${images[0].image}" alt="" height="500px" width="400px">
</div> 
`

// INTERVALLI DI CAMBIO FOTO
let autoChange = setInterval(function(){
    if(indexActive>=4){
        indexActive = 0
    } else{
        indexActive++
    }
    photo.innerHTML = 
    `
    <div class="item active first">
        <img src="${images[indexActive].image}" alt="" height="500px" width="400px">
    </div> 
    `
},3000)

// STOP INTERVALLI
pause.addEventListener('click', function(){
    clearInterval(autoChange)
    pause.classList.remove('active')
    play.classList.add('active')
})

// RIPRESA AUTO-CHANGE
play.addEventListener('click', function(){
    play.classList.remove('active')
    pause.classList.add('active')
})

// CLICK ARROW AVANTI
next.addEventListener('click', function(){
    if(indexActive>=4){
        indexActive = 0
    } else{
        indexActive++
    }
    photo.innerHTML = 
    `
    <div class="item active first">
        <img src="${images[indexActive].image}" alt="" height="500px" width="400px">
    </div> 
    `
})

// CLICK ARROW INDIETRO
prev.addEventListener(`click`, function(){
    if(indexActive==0){
        indexActive = 5
    } else{
        indexActive--
    }
    indexActive--;
    photo.innerHTML = 
    `
    <div class="item active first">
        <img src="${images[indexActive].image}" alt="" height="500px" width="400px">
    </div> 
    `
})

//     let activeItem = document.querySelector(`.item.active`)
    
//     let changeActive = activeItem.nextElementSibling

//     if(activeItem.classList.contains(`last`)){
//         changeActive = document.querySelector(`.item.first`)
//     }

//     activeItem.classList.remove(`active`)

//     changeActive.classList.add(`active`)