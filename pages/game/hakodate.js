var images = [
	"../../assets/img/hakodate/rules.jpg",
    "../../assets/img/hakodate/karaoke.png",
    "../../assets/img/hakodate/luckypierrotkanemori.png",
    "../../assets/img/hakodate/daiso.png",
    "../../assets/img/hakodate/akagawairiguchi.png",
	"../../assets/img/hakodate/himawari.png",
    "../../assets/img/hakodate/asaichi.png",
    "../../assets/img/hakodate/barrage.png",
    "../../assets/img/hakodate/donqui.png",
    "../../assets/img/hakodate/future.png",
    "../../assets/img/hakodate/goryokaku.png",
    "../../assets/img/hakodate/kanemori.png",
    "../../assets/img/hakodate/rgee.png",
    "../../assets/img/hakodate/sevenelevenappart.png",
    "../../assets/img/hakodate/monappart.png",
    "../../assets/img/hakodate/tenguramen.png",
    "../../assets/img/hakodate/capetachimachi.png",
    "../../assets/img/hakodate/izakaya.png",

]

var reponses = [
	"",
	"Manekineko",
	"Lucky Pierrot à côté du Kanemori",
	"Daiso",
	"Akagawairiguchi",
	"Himawari",
	"Asaichi",
	"Barrage (Sasanagare Dam)",
	"Donqui",
	"Future",
	"Goryokaku",
	"Kanemori",
	"Appart de Rgee",
	"Seven Eleven à côté de l'appart",
	"Mon appart hehe",
	"Tengu Ramen",
	"Cape Tachimachi",
	"Izakaya",
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