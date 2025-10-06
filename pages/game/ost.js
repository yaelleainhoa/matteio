var sons = [
    "../../assets/img/ost/amongus.mp3",
    "../../assets/img/ost/csgo.mov",
    "../../assets/img/ost/fortnite.mp3",
    "../../assets/img/ost/ghost.mp3",
	"../../assets/img/ost/outerwild.mp3",
    "../../assets/img/ost/rocketleague.mp3",
    "../../assets/img/ost/silksong.mp3",
    "../../assets/img/ost/tunic.mp3",
    "../../assets/img/ost/valorant.mp3",
    "../../assets/img/ost/witcher.mp3",
]

var reponses = [
	"Among Us",
	"CSGO",
	"Fortnite",
	"Ghost of Tsushima",
	"Outerwild",
	"Rocket League",
	"Silksong",
	"Tunic",
	"Valorant",
	"The Witcher",
]


var id = 0;
document.getElementById("audio").setAttribute("src", sons[id]) ;

function raz() {
	document.getElementById("audio").setAttribute("src", sons[id]) ;
	document.getElementById("solution").textContent = "Réponse";
	document.getElementById("solution").classList.add("btn"); 
}
function precedent() {
	id--;
	raz();
}

function suivant() {
	if(id<sons.length-1)
	{
		id++;
		raz();
	}
	document.getElementById("solution").classList.add("btn") ;
}

function reponse () {
	document.getElementById("solution").textContent=reponses[id];
}