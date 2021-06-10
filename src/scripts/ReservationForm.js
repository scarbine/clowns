import {sendRequest} from "./dataAccess.js"

export const ReservationForm = () => {
  let html = `
		
		<article class="submitted-fields">
		<div class="field" name="fields">
			<label class="label for="parent_name"> Parent Name </label>
			<input type="text" name="parent_name" class="input"/>
		</div>
		<div class="field" name="fields">
			<label class="label for="child_name"> Child Name </label>
			<input type="text" name="child_name" class="input"/>
		</div>
		<div class="field" name="fields">
			<label class="label for="number_of_children"> Number of Children </label>
			<input type="number" name="number_of_children" class="input"/>
		</div>
		<div class="field" name="fields">
			<label class="label for="address"> Address </label>
			<input type="text" name="address" class="input"/>
		</div>
		<div class="field" name="fields">
			<label class="label for="date"> Date of Party </label>
			<input type="date" name="date" class="input"/>
		</div>
		<div class="field" name="fields">
			<label class="label for="duration"> Duration </label>
			<input type="number" name="duration" class="input"/>
		</div>
		
		<button class="button" id="submit_request"> Submit Reservation </button>

		</article>
		`;

  return html;
};

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", (event) => {
  if (event.target.id === "submit_request") {
    const parentName = document.querySelector(
      "input[name='parent_name']"
    ).value;
    const childName = document.querySelector("input[name='child_name']").value;
    const number_of_children = document.querySelector(
      "input[name='number_of_children']"
    ).value;
    const address = document.querySelector("input[name='address']").value;
    const date = document.querySelector("input[name='date']").value;
    const duration = document.querySelector("input[name='duration']").value;

    const sendToAPI = {
      parentName: parentName,
      childName: childName,
      numberOfChildren: number_of_children,
      address: address,
      date: date,
      duration: duration,
    };

    sendRequest(sendToAPI);
  }
});
