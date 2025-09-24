var images = [
	"../../assets/img/avatar/rules.jpeg",
    "../../assets/img/avatar/holt.jpg",
	"../../assets/img/avatar/orochimaru.png",
    "../../assets/img/avatar/mark.jpg",
    "../../assets/img/avatar/bree.jpg",
    "../../assets/img/avatar/ichiraku.png",
    "../../assets/img/avatar/koby.png",
    "../../assets/img/avatar/kabuto.png",
    "../../assets/img/avatar/eddie.jpg",
    "../../assets/img/avatar/luffy.png",
    "../../assets/img/avatar/hinata.png",
	"../../assets/img/avatar/amelia.jpg",
    "../../assets/img/avatar/lucasnathan.jpg",
	"../../assets/img/avatar/shino.png",
	"../../assets/img/avatar/michael.jpg",
    "../../assets/img/avatar/barney.jpg",
    "../../assets/img/avatar/gabrielle.jpg",
    "../../assets/img/avatar/friends.jpg",
	"../../assets/img/avatar/tashigi.png",
    "../../assets/img/avatar/cristinameredith.png",
    "../../assets/img/avatar/jayceviktor.jpg",
	"../../assets/img/avatar/end.jpg",
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