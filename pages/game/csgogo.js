var questions = [
    "CSGO, le jeu de GO ou ta go ?",
    "A permis de récolter des dons au ZEvent",
    "Parfois, il suffit de capturer au bon moment",
    "Une bombe peut tout chambouler",
    "Les débutants tendance à ignorer les coins",
    "Les meilleurs viennent du nord",
    "On peut y pratiguer le ko",
    "Il est essentiel de penser au long terme",
]

var reponses = [
    "",
    "CSGO",
    "GO et CSGO",
    "CSGO et ta go",
    "GO et CSGO",
    "CSGO et ta go",
    "CSGO et GO",
    "Les trois!!",
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