import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!")
});


// Kodlar buraya gelecek!

const degisimler = document.querySelectorAll(".nav-link")

for (const degisim of degisimler) {
  degisim.addEventListener("click", (event) => {
    event.target.style.color = "green";
    event.target.style.border = "3px solid black";
    degisim.addEventListener("mouseover", (event) => {
      event.target.style.color = "orange";
    })

  });

}
const basliklar = document.querySelectorAll(".text-content h2")
for (const baslik of basliklar) {
  baslik.addEventListener("mouseover", (event) => {
    event.target.style.background = "orange";
  })
}

const scroll2Top = document.createElement("div");
const scrollContent = document.createTextNode("Üste!");
scroll2Top.appendChild(scrollContent);
document.body.appendChild(scroll2Top);

scroll2Top.style.backgroundColor = "tomato";
scroll2Top.style.width = "50px";
scroll2Top.style.height = "50px";
scroll2Top.style.position = "fixed";
scroll2Top.style.bottom = "100px";
scroll2Top.style.color = "white";

scroll2Top.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

const tumResimler = document.querySelectorAll("img")

tumResimler.forEach((resim) => {
  resim.addEventListener("dblclick", (event) => {
    resim.style.filter = "grayscale(100%)";
  })
})

const yazilar = document.querySelectorAll(".destination p")

yazilar.forEach((yazi) => {
  yazi.addEventListener("wheel", myFunc)

  function myFunc(e) {
    e.target.style.color = "red"
  }
})

const input = document.createElement("input");
input.setAttribute("type", "text");
input.className = "password";
document.body.appendChild(input);
const createdInput = document.querySelector(".password");
createdInput.addEventListener("focus", (e) => {
  e.target.style.background = "pink";
});