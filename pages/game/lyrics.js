var questions = [
    "Dans tout Babylone, j'batifole mais mon seul antidote...",
    "Let's go to Nice...",
    "Ya decidí que esta noche se sale",
    "Nobody nobody nobody",
	"Ya le juraron amor y le fallaron",
    "Llegué al club con el combo, rápido la vi lejos <br/> Se pintaba los labios y la copa como espejo <br/> Se acercó, poco a poco, y yo queriendo que me baile <br/> Luego me dijo: Vamos, que te enseño Buenos Aire' <br/> Quédate",
    "Sogeki no shima de <br/> Umareta ore wa",
]

var reponses = [
	"c'est quand ton joli booty back it up <br/> Zequin - Babylone",
	"and give your sister a niece <br/> Jack Harlow - Hello Miss Johnson",
	"Con toda' mis motomami', con toda' mis gyale' <br/> Rosalia - Despecha",
	"nobody nobody nobody <br/> Mitski - Nobody",
	"Ojitos secos de todo lo que lloraron <br/> Kali Uchis / Peso Pluma - Iqual que un angel",
	"Que las noches, sin ti, duelen <br/> BZRO Quevedo - Quédate",
	"Hyaku patsu hyaku chyu <br/> Ru ru ra ra ru <br/> Nezumi no medama mo <br/> Lock on! <br/> Omae no haato mo <br/> LOCK ON! <br/> Sogeki no shima kara kita otoko <br/> Ru ru ru ru ru ra ra <br/> Sore nigero! <br/> Sogege Sogesoge <br/> SOGEKINGU!!!  <br/>" 
]


var id = 0;
document.getElementById("question").innerHTML=questions[id];

function raz() {
	document.getElementById("question").innerHTML=questions[id];
}
function precedent() {
	id--;
	raz();
}

function suivant() {
	if(id<questions.length-1)
	{
		id++;
		raz();
	}
	document.getElementById("solution").classList.toggle("hide");
}

function reponse () {
	document.getElementById("solution").classList.toggle("hide");
	document.getElementById("solution").innerHTML=reponses[id];
}