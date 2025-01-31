const numeroFrases = document.querySelector("#quotesInput");
const dondeIncrustar = document.querySelector(".quotes");

async function generarFrases() {
  let numero = parseInt(numeroFrases.value);
  if (numero >= 0) {
    try {
      const datos = await fetch(
        `https://api.breakingbadquotes.xyz/v1/quotes/${numero}`
      );
      const datosJson = await datos.json();
      return datosJson;
    } catch (error) {
      console.error(error);
    }
  } else {
    alert("Introduce un numero.");
  }
}
async function generarQuotes() {
  dondeIncrustar.innerHTML = "";
  const datos = await generarFrases();
  dondeIncrustar.style = "flex";
  datos.forEach((item) => {
    let quote = item.quote;
    let author = item.author;
    let div = document.createElement("div");
    div.className = "quote";
    let h2 = document.createElement("h2");
    h2.className = "author";
    h2.textContent = author;
    let img = document.createElement("img");
    switch (author) {
      case "Walter White":
        img.src =
          "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png";
        break;
      case "Saul Goodman":
        img.src =
          "https://upload.wikimedia.org/wikipedia/en/3/34/Jimmy_McGill_BCS_S3.png";
        break;
      case "Gustavo Fring":
        img.src =
          "https://upload.wikimedia.org/wikipedia/en/6/69/Gustavo_Fring_BCS_S3E10.png";
        break;
      case "Skyler White":
        img.src =
          "https://upload.wikimedia.org/wikipedia/en/f/fb/Skyler_White_S5B.png";
        break;
      case "Mike Ehrmantraut":
        img.src =
          "https://upload.wikimedia.org/wikipedia/en/e/ea/Mike_Ehrmantraut_BCS_S3.png";
        break;
      case "Tio Salamanca":
        img.src =
          "https://www.lavoz.com.ar/resizer/v2/HERRTY7IXFEQ3D3C4SY4NDILAM.jpg?quality=75&smart=true&auth=a1dde1bc2d56ef39e40800268290229bdae945944ff5fc320dd24028309826d6&width=980&height=640";
        break;
      case "Tuco Salamanca":
        img.src =
          "https://preview.redd.it/9gn9kv7j5px41.jpg?auto=webp&s=d3a7c491f809116ddbe540438eda0f41f272b4e8";
        break;
      case "Uncle Jack":
        img.src =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUo2YkrbX8Gu8xNyn1MG1obch7Lo5ad--Og&s";
        break;
      case "Gale Boetticher":
        img.src =
          "https://i.pinimg.com/736x/50/c7/c4/50c7c4fb59d1eba6abaaa8c2b0897180.jpg";
        break;
      case "The fly":
        img.src =
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRvypbW2FYZ-b8qrpWGGm2HLPtzubtJYvavRKLPR5-U0KGZoJt733asiJUGTXdYSJaL6RLaD3zD6MNZhVujhJVfB0SdTJTw7-DDBQaptsP4DKMawwykHgSKJ9a8WOn-Juc_YmnmA/s1600/breaking.bad.s03e10.720p.hdtv.x264-ctu%5B00-53-05%5D.JPG";
        break;
      case "Todd":
        img.src =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Jesse_Plemons_%2820769593584%29.jpg/1200px-Jesse_Plemons_%2820769593584%29.jpg";
        break;
      case "Jesse Pinkman":
        img.src =
          "https://upload.wikimedia.org/wikipedia/en/c/c6/Jesse_Pinkman_S5B.png";
        break;
      case "Hank Schrader":
        img.src =
          "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Hank_Schrader_S5B.png/220px-Hank_Schrader_S5B.png";
        break;
      case "Walter White Jr":
        img.src =
          "https://upload.wikimedia.org/wikipedia/en/c/ce/Walter_White_Jr_S5B.png";
        break;
      case "Marie Schrader":
        img.src =
          "https://upload.wikimedia.org/wikipedia/en/c/cb/Marie_Schrader_S5B.png";
        break;
      case "Badger":
        img.src =
          "https://preview.redd.it/why-do-you-think-he-got-the-nickname-badger-v0-lndkole17xfa1.jpg?auto=webp&s=89b11edcfe67472adf557a99354d3ab023dea213";
        break;
      default:
        img.src =
          "https://i.pinimg.com/474x/e3/d1/04/e3d104d24a4a474c83d1964f78925015.jpg";
        break;
    }
    img.setAttribute("class", "fraseImagen");
    let p = document.createElement("p");
    p.textContent = quote;

    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(p);
    dondeIncrustar.appendChild(div);
    numeroFrases.value = "";
  });
}
