const DOMSelectors = {
  name: document.getElementById("name"),
  genre: document.getElementById("genre"),
  platform: document.getElementById("platform"),
  button: document.getElementById("button"),
  form: document.querySelector("#form"),
  container: document.querySelector("#container"),
  remove: document.querySelectorAll("#remove"),
};

DOMSelectors.form.addEventListener("submit", function () {
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
        <img src="https://cdn.vox-cdn.com/thumbor/WR9hE8wvdM4hfHysXitls9_bCZI=/0x0:1192x795/1400x1400/filters:focal(596x398:597x399)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg" id="game-cover">
        <p> Dear $(name), you requested a $(genre) game on $(platform), error occured due to you being "too broke", so take this L you broke loser go buy an actual game hahahahahhahahahhah </p>
        </div>`
  );
});

DOMSelectors.form.addEventListener("submit", function () {
  DOMSelectors.name.value = "";
  DOMSelectors.genre.value = "";
  DOMSelectors.platform.value = "";
});

function remove() {
  let remove = document.querySelectorAll("#remove");
  remove.forEach((button) => {
    button.addEventListener("submit", function () {
      remove.parentElement.remove();
    });
  });
}
