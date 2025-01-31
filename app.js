const numeroFrases = document.querySelector("#quotesInput");
const dondeIncrustar = document.querySelector(".quotes");

async function generarFrases() {
  let numero = parseInt(numeroFrases.value);
  try {
    const datos = await fetch(
      `https://api.breakingbadquotes.xyz/v1/quotes/${numero}`
    );
    const datosJson = await datos.json();
    return datosJson;
  } catch (error) {
    console.error(error);
  }
}
async function generarQuotes() {
  dondeIncrustar.innerHTML = "";
  const datos = await generarFrases();
  console.log(datos);
  datos.forEach((item) => {
    let quote = item.quote;
    let author = item.author;
    let div = document.createElement("div");
    div.className = "quote";
    let h2 = document.createElement("h2");
    h2.className = "author";
    h2.textContent = author;
    let p = document.createElement("p");
    p.textContent = quote;

    div.appendChild(h2);
    div.appendChild(p);
    dondeIncrustar.appendChild(div);
  });
}
