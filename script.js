let frm = document.querySelector("#note");
let inp = document.querySelector("#inp");
let txt = document.querySelector("#txt");

let arr = JSON.parse(localStorage.getItem("notes")) || [];

function createCard(obj) {
  let forCard = document.querySelector(".forCard");

  let card = document.createElement("div");
  card.className =
    "card h-65 w-90 lg:w-45 lg:h-55 bg-blue-600 p-3 shadow-xl/30 flex flex-col justify-between rounded-lg";

  let textdiv = document.createElement("div");

  let h3 = document.createElement("h3");
  h3.className = "text-xl font-bold text-white";
  h3.textContent = obj.title;

  let hr = document.createElement("hr");
  hr.className = "text-white border";

  let p = document.createElement("p");
  p.className = "py-3 text-white";
  p.textContent = obj.note;

  let btnDiv = document.createElement("div");
  btnDiv.className = "flex flex-col items-center";

  let delbtn = document.createElement("button");
  delbtn.className =
    "delbtn pl-1 pr-1 bg-red-600 shadow-xl/20 text-white hover:bg-red-700";
  delbtn.textContent = "Delete";

  btnDiv.appendChild(delbtn);

  textdiv.appendChild(h3);
  textdiv.appendChild(hr);
  textdiv.appendChild(p);

  card.appendChild(textdiv);
  card.appendChild(btnDiv);

  forCard.appendChild(card);

  delbtn.addEventListener("click", function () {
    let index = arr.indexOf(obj);

    if (index !== -1) {
      arr.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(arr));
    }

    card.remove();
  });
}

arr.forEach(function (obj) {
  createCard(obj);
});

frm.addEventListener("submit", function (e) {
  e.preventDefault();

  let obj = {
    title: inp.value,
    note: txt.value
  };

  arr.push(obj);

  localStorage.setItem("notes", JSON.stringify(arr));

  createCard(obj);

  inp.value = "";
  txt.value = "";
});