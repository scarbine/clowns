import { ReservationForm} from "./ReservationForm.js"
import { getReservations} from "./dataAccess.js"



export const ClownParty = () => {

	return	`<h1> Clowns are Friends </h1>
		<article> 
			<h2> Clown Request Form </h2>
			<div> ${ReservationForm()} </div>
		</article>
		<article>
			<h2> Reservations </h2>
			<div> ${getReservations()} </div>
		</article>

	`
}