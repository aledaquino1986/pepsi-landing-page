const pepsiBlue = document.querySelector(".pepsi-blue");
const pepsiLight = document.querySelector(".pepsi-light");
const pepsiMax = document.querySelector(".pepsi-max");
const sec = document.querySelector(".sec");
const navigation = document.querySelector(".navigation")
const menuToggle = document.querySelector(".toggleMenu");
const blueColor = "pepsi-blue-bg";
const lightColor = "pepsi-light-bg";
const maxColor = "pepsi-max-bg";

const imgSlider = (anything) => {
  document.querySelector(".pepsi").src = anything;
};

const changeBgColor = (color) => {
  sec.classList.add(color);
};

const toggleMenu = () => {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

pepsiBlue.addEventListener("click", () => {
  if (sec.classList.contains(lightColor) || sec.classList.contains(maxColor)) {
    sec.classList.remove(lightColor);
    sec.classList.remove(maxColor);
  }
  imgSlider("img/pepsi001.png");
  changeBgColor(blueColor);
});

pepsiLight.addEventListener("click", () => {
  if (sec.classList.contains(blueColor) || sec.classList.contains(maxColor)) {
    sec.classList.remove(blueColor);
    sec.classList.remove(maxColor);
  }
  imgSlider("img/pepsi002.png");
  changeBgColor(lightColor);
});

pepsiMax.addEventListener("click", () => {
  if (sec.classList.contains(lightColor) || sec.classList.contains(blueColor)) {
    sec.classList.remove(blueColor);
    sec.classList.remove(lightColor);
  }
  imgSlider("img/pepsi003.png");
  changeBgColor(maxColor);
});


menuToggle.addEventListener("click", toggleMenu);