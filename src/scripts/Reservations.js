import { getReservations, deleteReservation } from "./dataAccess.js";

export const Reservations = () => {
  const reservations = getReservations();
  let html = "<ul>"
  const listReservationItems = reservations.map((reservation) => {
    return `<li class="reservation_item" > <div class="reservation_list_item" id="reservation--${reservation.id}"> ${reservation.childName} has a party on ${reservation.date} and should last ${reservation.duration} hours. ${reservation.numberOfChildren} kids are expected at the party.</div> 
    <button id="reservation--${reservation.id}" name="delete_button" class="delete_order_button">Delete</button> </li>`
  });
  html += listReservationItems.join("")
  html += "</ul>"
  return html;
};


// this function listens to the delete records button and deletes the record from the database
const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", (event) => {
	if (event.target.id.startsWith("reservation--")){
		const [,reservationId] = event.target.id.split("--")
		deleteReservation(parseInt(reservationId))

	}
})