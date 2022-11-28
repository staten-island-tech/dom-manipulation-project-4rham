const DOMSelectors = {
    name: document.getElementById("name"),
    genre: document.getElementById("genre"),
    platform: document.getElementById("platform"),
    button: document.getElementById("button"),
    section: document.getElementById("section"),
};

DOMSelectors.form.addEventListener("submit", function (){
    event.preventDefault();
    let box = {};
    box.name = document.getElementById("name");
    box.genre = document.getElementById("genre");
    box.platform = document.getElementById("platform");
});

DOMSelectors.form.addEventListener("submit", function () {
    let name = DOMSelectors.name.value;
    let genre = DOMSelectors.genre.value;
    let platform = DOMSelectors.platform.value;
    DOMSelectors.container.insertAdjacentHTML(
        "beforehand",
        `<div class="card">
        <img src="https://media.tenor.com/SSY2V0RrU3IAAAAd/rick-roll-rick-rolled.gif" alt="rickoll" id="game-cover">
        <p> Dear $(name), you requested a $(genre) game on $(platform), error occured due to you being "too broke", so take this L you broke loser go buy an actual game hahahahahhahahahhah </p>
        </div>`
    );
});

DOMSelectors.form.addEventListener