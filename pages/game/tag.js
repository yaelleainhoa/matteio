var sons = [
    "../../assets/img/tag/cashmoneyap.mp3",
    "../../assets/img/tag/djesco.mov",
    "../../assets/img/tag/djmustard.mp4",
    "../../assets/img/tag/dontoliver.mov",
	"../../assets/img/tag/earlonthebeat.mp3",
    "../../assets/img/tag/filthy.mp4",
    "../../assets/img/tag/fki2st.mov",
    "../../assets/img/tag/metroagain.mp3",
    "../../assets/img/tag/metroblooming.mp4",
    "../../assets/img/tag/pharell.mp4",
    "../../assets/img/tag/pierrebourne.mp4",
    "../../assets/img/tag/remaorvibez.mp4",
    "../../assets/img/tag/wheezy.mp3",
    "../../assets/img/tag/zaytoven.mp3",
]

var reponses = [
	"Cash Money AP",
	"DJ esco",
	"DJ Mustard",
	"Don Toliver",
	"Earl on the beat",
	"Filthy",
	"Fki 1st",
	"Metro Bloomin",
	"Metro Bloomin",
	"Goryokaku",
	"Pharell Williams",
	"Pierre Bourne",
	"Rema (or Vibez?)",
	"Wheezy",
	"Zaytoven",
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