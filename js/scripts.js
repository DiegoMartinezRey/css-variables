const rootStyles = document.documentElement.style;
const buttonRGBElement = document.getElementById("button-rgb");
const buttonHexaElement = document.getElementById("button-hexa");
const titleElement = document.getElementById("title");

const characters = "0123456789ABCDEF";

const getRandomNum = (num) => {
  return Math.floor(Math.random() * num + 1);
};

const getColorByRGB = () => {
  rootStyles.setProperty(
    "--bg-color",
    `rgb(${getRandomNum(255)},${getRandomNum(255)},${getRandomNum(255)})`
  );
};

const getColorByHexa = () => {
  let colorHex = "";
  for (let i = 0; i < 6; i++) {
    colorHex += characters[getRandomNum(characters.length - 1)];
  }
  rootStyles.setProperty("--bg-color", `#${colorHex}`);
};

const printScroll = () => {
  let barPorcent =
    (window.scrollY * 100) / (document.body.scrollHeight - window.innerHeight);
  rootStyles.setProperty("--sz-bar", `${barPorcent}%`);
  titleElement.textContent = `Desplazamiento: ${Math.ceil(barPorcent)}%`;
};

buttonRGBElement.addEventListener("click", getColorByRGB);
buttonHexaElement.addEventListener("click", getColorByHexa);
document.addEventListener("scroll", printScroll);
