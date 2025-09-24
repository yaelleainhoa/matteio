var images = [
	"../../assets/img/opcolors/rules.png",
	"../../assets/img/opcolors/q0.png",
	"../../assets/img/opcolors/r0.png",
	"../../assets/img/opcolors/q1.png",
	"../../assets/img/opcolors/r1.png",
	"../../assets/img/opcolors/q2.png",
	"../../assets/img/opcolors/r2.png",
	"../../assets/img/opcolors/q3.png",
	"../../assets/img/opcolors/r3.png",
	"../../assets/img/opcolors/q4.png",
	"../../assets/img/opcolors/r4.png",
	"../../assets/img/opcolors/q5.png",
	"../../assets/img/opcolors/r5.png",
	"../../assets/img/end.png",
]

var reponses = [
	"",
	"",
]


/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", images[id]) ;

/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", images[id]) ;
/* 		document.getElementById("solution").textContent = "Réponse";
		document.getElementById("solution").classList.add("btn"); */
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
	}

/* 	function reponse() {
		document.getElementById("solution").textContent = reponses[id] ;
		document.getElementById("solution").style.fontFamily = "Police1" ;
		document.getElementById("solution").style.paddingBottom = "10px" ;
		document.getElementById("solution").style.paddingTop = "10px" ;

	} */