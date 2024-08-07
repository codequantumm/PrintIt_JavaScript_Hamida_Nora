slides  = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]





// Sélection des éléments du DOM
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const dotsContainer = document.getElementById('dots');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

let indexActuel= 0;


// Initialisation des points (bullet points) 8 plusieurs points s'affichaient car espace dans le html)
function initDots() {
	slides.forEach((slide, index) => {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		if (index === 0) dot.classList.add('dot_selected');
		dotsContainer.appendChild(dot);
	});
}

// Mise à jour de l'affichage
function updateSlide(index) {
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
    bannerText.innerHTML = slides[index].tagLine;

    document.querySelector('.dot.dot_selected').classList.remove('dot_selected');
    dotsContainer.children[index].classList.add('dot_selected');
}

// Gestionnaire de clic pour la flèche droite
arrowRight.addEventListener('click', () => {
    indexActuel = (indexActuel + 1) % slides.length;
    updateSlide(indexActuel);

	console.log("Tu as cliqué sur la flèche de Droite !")
});

// Gestionnaire de clic pour la flèche gauche
arrowLeft.addEventListener('click', () => {
    indexActuel = (indexActuel - 1 + slides.length) % slides.length;
    updateSlide(indexActuel);

	console.log("Tu as cliqué sur la flèche de Gauche !")
});

// Initialisation
initDots();
updateSlide(indexActuel);