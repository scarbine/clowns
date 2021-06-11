import {
  getReservations,
  deleteReservation,
  completeReservation,
} from "./dataAccess.js";

export const Reservations = () => {
  const reservations = getReservations()
  const sortedReservations = reservations.sort((a,b) => {

    return parseInt(a.date.split("-").join("")) - parseInt(b.date.split("-").join(""))
  })
  let html = "<ul>";

  // capture the value of the date
  // split the value of the date at -
  // join the value of the date with .join ""
  // parseInt the value of the join
  // sort the values by lowest to highest

  const listReservationItems = sortedReservations.map((reservation) => {
    const dateSplit = reservation.date.split("-");
    const dateAsString = dateSplit.join("");

    return `<li class="reservation_item" > <div value="${dateAsString}"class="reservation_list_item" id="reservation--${reservation.id}"> ${reservation.childName} has a party on ${reservation.date} and should last ${reservation.duration} hours. ${reservation.numberOfChildren} kids are expected at the party.</div> 
    <button id="reservation--${reservation.id}" name="delete_button" class="delete_order_button">Delete</button> 
    <button id="complete--${reservation.id}" name="complete_button" class="complete_order_button">Complete</button></li>`;
  });

  html += listReservationItems.join("");
  html += "</ul>";
  return html;
};


// this function listens to the delete records button and deletes the record from the database
const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", (event) => {
  if (event.target.id.startsWith("reservation--")) {
    const [, reservationId] = event.target.id.split("--");
    deleteReservation(parseInt(reservationId));
  }
});

mainContainer.addEventListener("click", (event) => {
  if (event.target.id.startsWith("complete--")) {
    const [, reservationId] = event.target.id.split("--");
    completeReservation(parseInt(reservationId));
  }
});
