const toggleModeButton = document.getElementById("page-mode");

// array para semantica
const images = [
  {
    elemento: document.getElementById("post1"),
    imgLight: "./assets/img/posts/post1-light.png",
    imgDark: "./assets/img/posts/post1.png",
  },
  {
    elemento: document.getElementById("post2"),
    imgLight: "./assets/img/posts/post2-light.png",
    imgDark: "./assets/img/posts/post2.png",
  },
  {
    elemento: document.getElementById("post3"),
    imgLight: "./assets/img/posts/post3-light.png",
    imgDark: "./assets/img/posts/post3.png",
  },
  {
    elemento: document.getElementById("linkedin"),
    imgLight: "./assets/icons/linkedin.png",
    imgDark: "./assets/icons/linkedin-light.svg",
  },
  {
    elemento: document.getElementById("github"),
    imgLight: "./assets/icons/github.svg",
    imgDark: "./assets/icons/github-light.svg",
  },
];

function updateModeAssets() {
  const isLightMode = document.documentElement.classList.contains("light-mode");

  // altera imagem do botão para melhorar ux
  if (isLightMode) {
    toggleModeButton.querySelector("img").src = "./assets/icons/moon.svg";
  } else {
    toggleModeButton.querySelector("img").src = "./assets/icons/sun.svg";
  }

  // percorre array trocando a src da imagem dos posts
  images.forEach((image) => {
    if (image.elemento != null) {
      if (isLightMode) {
        image.elemento.src = image.imgLight;
      } else {
        image.elemento.src = image.imgDark;
      }
    }
  });
}

function toggleMode() {
  document.documentElement.classList.toggle("light-mode");
  updateModeAssets();
}

updateModeAssets();
