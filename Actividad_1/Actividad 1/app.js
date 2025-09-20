// 1) Obtén el título del sitio (h1) y muestra su texto en consola.
const titulo = document.querySelector('h1');
console.log('1) ', titulo?.innerText);

// 2)Selecciona todos los enlaces del nav con la clase .btn.
const linksNav = document.querySelectorAll('nav .btn');
console.log('2) ', linksNav);


// 3) Selecciona el primer enlace externo (el que tiene target="_blank").
const primerExterno = document.querySelector('a[target="_blank"]');
console.log('3) ', primerExterno);


// 4) Selecciona todas las tarjetas (.card) y luego el título de la tarjeta con id card-2.
const cards = document.querySelectorAll('.card');
const tituloCard2 = document.querySelector('#card-2 h2');
console.log('4) ', cards, tituloCard2); 

// 5) Selecciona el ítem de agenda que tiene data-role="speaker".
const itemSpeaker = document.querySelector('[data-role="speaker"]');
console.log('5) ', itemSpeaker);

// 6) Selecciona el botón con aria-label="marcar favorito".
const btnFavorito = document.querySelector('button[aria-label="marcar favorito"]');
console.log('6) ', btnFavorito);


// 7) Selecciona todos los <input> de tipo email (aunque solo haya uno).
const emails = document.querySelectorAll('input[type="email"]');
console.log('7) ', emails);


// 8) Selecciona los ítems impares de .agenda-list (1, 3, …).
const impares = document.querySelectorAll('.agenda-list li:nth-child(odd)');
console.log('8) ', impares);

// 9) Selecciona la última .tag dentro de #card-1.
const ultimaTagCard1 = document.querySelector('#card-1 .tag:last-child');
console.log('9) ', ultimaTagCard1);

