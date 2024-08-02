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

flecheGauche = document.querySelector(".arrow_left")
flecheGauche.addEventListener("click", () => {
	console.log("Tu as cliqué sur la flèche de Gauche ! Bravo")
})
flecheDroite = document.querySelector(".arrow_right")
flecheDroite.addEventListener("click", () => {
	console.log("Tu as cliqué sur la flèche de Droite !")
})


bulletPointContainer = document.getElementById("dots")
bulletPointContainer.innerHTML =`

				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>

	`
	console.log(bulletPointContainer) 


	// Ajout des bullets points au html

/*let slideClickButton = document.querySelector(".dots")
for (let i=0; i< slides.length; i++) {

} */


