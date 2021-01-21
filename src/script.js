function armyMember() {
  let fandom = prompt("Did you understand the reference on the button?");
  fandom = fandom.toLowerCase();
  fandom = fandom.trim();
  fandom = fandom.replace("yeah", "yes");
  if (fandom === "yes") {
    let h2 = document.querySelector("h2");
    h2.innerHTML = "💜 Welcome, ARMY! 💜";
  } else {
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Have fun learning more about BTS!";
  }
}
let armyButton = document.querySelector(".army");
armyButton.addEventListener("click", armyMember);
