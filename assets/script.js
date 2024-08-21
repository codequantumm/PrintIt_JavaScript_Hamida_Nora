const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const dotsContainer = document.getElementById('dots');
let indexActuel = 0;

function initBulletPoints() {
	slides.forEach((slide, index) => {
		let dot = document.createElement('div');
		dot.classList.add('dot');
		if (index === 0) {
			dot.classList.add('dot_selected');
		}
		dotsContainer.appendChild(dot);
	});
}

initBulletPoints();

function metAJourAffichage(index) {
    document.querySelector('.banner-img').src = `./assets/images/slideshow/${slides[index].image}`;
    document.querySelector('#banner p').innerHTML = slides[index].tagLine;

    document.querySelector('.dot.dot_selected').classList.remove('dot_selected');
    dotsContainer.children[index].classList.add('dot_selected');
}


document.querySelector('.arrow_right').addEventListener('click', () => {
	indexActuel = (indexActuel + 1) % slides.length;
    metAJourAffichage(indexActuel);
});

document.querySelector('.arrow_left').addEventListener('click', () => {
	indexActuel = (indexActuel - 1 + slides.length) % slides.length;
    metAJourAffichage(indexActuel);
});
