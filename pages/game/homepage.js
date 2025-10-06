// to launch locally
// import { games } from "../../assets/variables.js";
// To change for githubpages
// import { games } from "/../../assets/variables.js";
import { games } from "/matteio/assets/variables.js";

function setGames()
{
    var gamesLayout = document.createElement("div");
    gamesLayout.classList.add("gamesLayout");

    for(let i = 0; i < games.length; i++)
    {
        console.log(i);
        var jeu = document.createElement("div");
        jeu.classList.add("jeu");

        var gameImgNb = i%9;
        jeu.style.backgroundImage = "url('assets/img/game"+gameImgNb+".png')"

        jeu.onclick = function() {
            const page = games[i][0];
            const index = i;
            window.location.href = `pages/page/${page}.html?pageIndex=${index}`;
        };

        var gameSpan = document.createElement("span");
        gameSpan.innerHTML = games[i][1];

        gamesLayout.appendChild(jeu);
    }


document.getElementById("home").appendChild(gamesLayout);
}

setGames();

