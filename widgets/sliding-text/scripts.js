document.addEventListener("DOMContentLoaded", loadSlidingText);

function loadSlidingText() {
  const input = document.getElementsByClassName("container")[0].children[0];
  input.value = "";
  let savedText =
    localStorage.getItem("sliding-text") ||
    "Enter your text here and hit ENTER";
  input.value = savedText;
}

function changeSlidingText() {
  const input = document.getElementsByClassName("container")[0].children[0];
  const text = input.value;
  localStorage.setItem("sliding-text", text);
  const slidingText = document.getElementsByClassName("sliding-text")[0];
  slidingText.textContent = text;
}
