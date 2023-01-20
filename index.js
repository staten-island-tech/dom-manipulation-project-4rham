const DOMSelectors = {
  name: document.getElementById("name"),
  genre: document.getElementById("genre"),
  platform: document.getElementById("platform"),
  submit: document.getElementById("button"),
  form: document.querySelector("#form"),
  display: document.querySelector(".display")
};

function createobject() {
  event.preventDefault();
  let game = {};
  game.name = document.getElementById("name");
  game.genre = document.getElementById("genre");
  game.platform = document.getElementById("platform");
}

function insert() {
let name = DOMSelectors.name.value;
let genre =  DOMSelectors.genre.value;
let platform =  DOMSelectors.platform.value;
DOMSelectors.display.insertAdjacentHTML (
  "afterbegin",
  `<div class = "crd">
  <img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/fortnite/2/2a/Fortnite-blog-patch-v-1-6---fortnite-battle-royale-Fortnite_BR_Key-Art_w-Logo_ENG-1920x1080-3e2ce1453476b725fa59e7aeb6ecb90e4b75a0df.jpg" alt = "fort" id = "nite"
  <p> Greetings ${name}, we reccomend you to play the new latest hit in the youth... FORTNITE BATTLE ROYALE, fear not as fortnite is available for the ${platform} and with its wide variety of game mods it can fit every genre even ${genre}!!! Now what are you waiting for drop out the battle bus crank some 90's and experience the game of a century!" 
  <button id = "remove"> Remove this impurity off my screen. </button>
  </div>`
);
}

function clear() {
  DOMSelectors.name.value = "";
  DOMSelectors.genre.value = "";
  DOMSelectors.platform.value = "";
}

function remove() {
  const remove = Array.from(document.querySelectorAll("#remove"));
  remove.forEach((button) => {
    button.addEventListener("click", function () {
      this.parentElement.remove();
    })
  })
}

DOMSelectors.form.addEventListener("submit", function () {
  createObject();
  insert();
  clear();
  remove();
})







































//function add(game) {
//  DOMSelectors.display.insertAdjacentHTML(
//    "afterbegin",
//    `<div class = "displaycard">
//    <img id = "img" src = "${game.cover}"/>
//    <h2 id = "name"> "${game.genre}" </h2>
//    <h3 id = "platform"> "${game.platform}" </h3>
//    <button id = "remove"> Remove </button>
//    `
//  )
//}
//
//function clear(game) {
//  DOMSelectors.cover.value = "";
//  DOMSelectors.genre.value = "";
//  DOMSelectors.platform.value = "";
//}
//
//DOMSelectors.form.addEventListener("submit", function (event) {
//  event.preventDefault();
//  let game = {};
//  game.cover = document.getElementById("cover").value;
//  game.genre = document.getElementById("genre").value;
//  game.platform = document.getElementById("platform").value;
//  console.log(game);
//  add(game);
//  clear(game);
//  const removebuttons = document.querySelectorAll(".displaycard");
//  removebuttons.forEach((btn) => btn.addEventListener("click", function (e) {
//      e.target.parentElement.remove();
//  }//));
//});