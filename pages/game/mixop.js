var images = [
	"../../assets/img/mixop/rules.png",
    "../../assets/img/mixop/gaimomonosuke.png",
    "../../assets/img/mixop/namihawk.png",
    "../../assets/img/mixop/shiraoshiki.png",
    "../../assets/img/mixop/kumakino.png",
    "../../assets/img/mixop/denjirobin.png",
    "../../assets/img/mixop/giniji.png",
	"../../assets/img/mixop/kakuina.png",
    "../../assets/img/mixop/kayamato.png",
    "../../assets/img/mixop/koalaboon.png",
    "../../assets/img/mixop/boars.png",
]

var reponses = [
	"",
	"Gaimomonosuke",
	"Namihawk",
	"Shiraoshiki",
	"Kumakino",
	"Denjirobin",
	"Giniji (ou Niginny)",
	"Kakuina",
	"Kayamato",
	"Koalaboon",
	"Boars",
]


/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", images[id]) ;

/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", images[id]) ;
 		document.getElementById("solution").textContent = "Réponse";
		document.getElementById("solution").classList.add("btn"); 
	}
	function precedent() {
		id--;
		raz();
	}

	function suivant() {
		if(id<images.length-1)
		{
			id++;
			raz();
		}
		document.getElementById("solution").classList.add("btn") ;
	}

 	function reponse() {
		document.getElementById("solution").textContent = reponses[id] ;
		document.getElementById("solution").style.style = "bold" ;
		document.getElementById("solution").classList.remove("btn") ;
	}