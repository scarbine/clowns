import { ReservationForm } from "./ReservationForm.js";
import { Reservations } from "./Reservations.js";

export const ClownParty = () => {
  return `
		<article> 
			<h2> Clown Request Form </h2>
			<div> ${ReservationForm()} </div>
		</article>
		<article>
			<h2> Reservations </h2>
			 <div> ${Reservations()} </div>
		</article>

	`;
};
