var images = [
	"../../assets/img/hakodate/rules.jpeg",
    "../../assets/img/hakodate/holt.jpg",
	"../../assets/img/hakodate/orochimaru.png",
    "../../assets/img/hakodate/mark.jpg",
    "../../assets/img/hakodate/bree.jpg",
    "../../assets/img/hakodate/ichiraku.png",
    "../../assets/img/hakodate/koby.png",
    "../../assets/img/hakodate/kabuto.png",
    "../../assets/img/hakodate/eddie.jpg",
    "../../assets/img/hakodate/luffy.png",
    "../../assets/img/hakodate/hinata.png",
	"../../assets/img/hakodate/amelia.jpg",
    "../../assets/img/hakodate/lucasnathan.jpg",
	"../../assets/img/hakodate/shino.png",
	"../../assets/img/hakodate/michael.jpg",
    "../../assets/img/hakodate/barney.jpg",
    "../../assets/img/hakodate/gabrielle.jpg",
    "../../assets/img/hakodate/friends.jpg",
	"../../assets/img/hakodate/tashigi.png",
    "../../assets/img/hakodate/cristinameredith.png",
    "../../assets/img/hakodate/jayceviktor.jpg",
	"../../assets/img/hakodate/end.jpg",
]

var reponses = [
	"",
	"Holt (B99)",
	"Orochimaru",
	"Mark Scout",
	"Bree Van de Kamp",
	"Ichiraku",
	"Koby",
	"Kabuto",
	"Eddie Britt",
	"Luffy",
	"Hinata",
	"Amelia Shepard",
	"Lucas Scott & Nathan Scott",
	"Shino",
	"Michael Scott",
	"Barney Stinson",
	"Gabrielle Solis",
	"Friends tous là",
	"Tashigi",
	"Cristina et Meredith",
	"Viktor et Jayce",
	""
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