const IMG_PATH = "https://picsum.photos/v2/list";

const container = document.querySelector(".image-container");

fetchImage(IMG_PATH);

async function fetchImage(img) {
  const res = await fetch(img);
  const data = await res.json();

  getImage(data);
}

function getImage(img) {
  container.innerHTML = "";

  img.forEach((imgs) => {
    const imgEl = document.createElement("img");
    imgEl.src = imgs.download_url;

    container.appendChild(imgEl);
  });
}
