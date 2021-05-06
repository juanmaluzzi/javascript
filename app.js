const buttons = document.querySelectorAll("button");
const instructions = document.getElementById("instructions");

buttons.forEach((button) => button.addEventListener("click", sound));

function sound(event) {
  const button = event.target;
  const note = button.dataset.note;

  const noteSound = document.getElementById(`sound${note}`);
  noteSound.pause();
  noteSound.currentTime = 0;
  noteSound.play();
  // dejo los logs para saber que se esta tocando
  console.log(noteSound);
  console.log(button);
}

document.addEventListener("keypress", (event) => {
  const key = event.key;
  const button = document.querySelector(`button[key="${key}"]`);
  if (button) {
    button.click();
  }
});
