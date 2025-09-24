var images = [
	"../../assets/img/hxh/rules.jpg",
	"../../assets/img/hxh/q0.jpg",
	"../../assets/img/hxh/r0.jpg",
	"../../assets/img/hxh/q1.jpg",
	"../../assets/img/hxh/r1.jpg",
	"../../assets/img/hxh/q2.jpg",
	"../../assets/img/hxh/r2.jpg",
	"../../assets/img/hxh/q3.jpg",
	"../../assets/img/hxh/r3.jpg",
	"../../assets/img/hxh/q4.jpg",
	"../../assets/img/hxh/r4.jpg",
	"../../assets/img/hxh/q6.jpg",
	"../../assets/img/hxh/r6.jpg",
	"../../assets/img/hxh/q7.jpg",
	"../../assets/img/hxh/r7.jpg",
	"../../assets/img/hxh/q8.jpg",
	"../../assets/img/hxh/r8.jpg",
	"../../assets/img/hxh/q9.jpg",
	"../../assets/img/hxh/r9.jpg",
	"../../assets/img/hxh/q10.jpg",
	"../../assets/img/hxh/r10.jpg",
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