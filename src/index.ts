const imageElement = document.getElementById("imageElement") as HTMLImageElement;
const coinElement = document.getElementById("coin") as HTMLParagraphElement;

let coin = 0;

if (imageElement) {
    imageElement.addEventListener("click", () => {
    coin += 1;
    coinElement.textContent = `Coin : ${coin}`;
  });
}
