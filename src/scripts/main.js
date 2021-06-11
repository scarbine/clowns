import { ClownParty } from "./ClownParty.js";
import { fetchComplete, fetchRequest } from "./dataAccess.js";

console.log("Hello, Clowns!");

const mainContainer = document.querySelector("#container");

const render = () => {
  fetchComplete()
  fetchRequest().then(() => {
    mainContainer.innerHTML = ClownParty();
  });
};

render();

document.addEventListener("stateChanged", () => {
  console.log("The state of the data has changed. Regenerate that sexy HTML...");
  render();
});
