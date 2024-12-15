const link = document.createElement("link");
link.rel = "stylesheet";
link.href =
  "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
document.head.appendChild(link);

// body、main、header以外のブロック要素を選択
const elements = document.querySelectorAll("*:not(body):not(main):not(header)");

function getRandomSpeedClass() {
  const speedClasses = ["animate__slow", "animate__fast"];
  const randomIndex = Math.floor(Math.random() * speedClasses.length);
  return speedClasses[randomIndex];
}

// 各要素にAnimate.cssのクラスを追加
elements.forEach((element) => {
  if (window.getComputedStyle(element).display === "block") {
    element.classList.add(
      "animate__animated",
      "animate__shakeX",
      "animate__infinite",
      getRandomSpeedClass()
    );
  }
});
