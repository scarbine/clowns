import { getReservations } from "./dataAccess.js";

export const Reservations = () => {
  const reservations = getReservations();
  let html = "<ul>"
  const listReservationItems = reservations.map((reservation) => {
    return `<li class="reservation_item"> <div> ${reservation.childName} has a party on ${reservation.date} and should last ${reservation.duration} hours.</div>  </li>`
  });
  html += listReservationItems.join("")
  html += "</ul>"
  return html;
};
