// ### Creare una lista di razze di cani da javascript

const listElement = document.getElementById('list');
// console.log(listElement);

//1. aggiungere elementi lista modificando il suo innerHTML
let listClass = 'classe1'; 

// const listItem = '<li class="' + listClass + '">Pastore tedesco</li>';
const listItem = `<li class="${listClass}">Pastore tedesco</li>`;
// console.log(listItem);
// listItem.addEventListener('click', function() {
//     alert('BAU');
// })

listElement.innerHTML = listItem;


//2. creare un nuovo elemento del con createElement e appenderlo alla nostra lista
const listItem2 = document.createElement('li');

listItem2.append('Duzioni');
listItem2.classList.add('classe2');

listItem2.addEventListener('click', function(){
    alert('BAU');
});
// console.log(typeof(listItem2), listItem2);

listElement.appendChild(listItem2);

//### settiamo un attributo src ad un link

// const mainLink = document.getElementById('main-link');
// const LINK_URL = 'https://barnels.com/wp-content/uploads/2018/09/Beautiful-Horse-16X20-Privately-Owned-e1538083076392.jpg'

// mainLink.src = LINK_URL;

//### generare una lista di razze di cani dato un array
const dogsArray = ['✨Duzioni✨','Pastore australiano','Pincher','Carlino', 'terrier'];
const dogsList = document.getElementById('dogs-list');

for(let i = 0; i < dogsArray.length; i++) {
    // dogsList.innerHTML += `<li class="${dogsArray[i].toLowerCase()}">${dogsArray[i]}</li>`;
    const newLi = document.createElement('li');
    newLi.innerHTML = dogsArray[i];
    newLi.classList.add(dogsArray[i].replace(' ', '-').toLowerCase());
    dogsList.append(newLi);
}

//### stampare stringhe array con for
const array = ['string1', "string2", "string3", "string4"];
// console.log(array[0], array[1]);
for(let i = 0; i < array.length; i++){
    console.log(array[i]); //1. array[0] 2.array[1]
}


