import { getReservations } from "./dataAccess.js";

export const Reservations = () => {
  const reservations = getReservations();
  let html = "<ul>";
  const listReservationItems = reservations.map((reservation) => {
    return `<li class="reservation_item"><div> ${reservation.childName} has a party on ${reservation.date}</div></li>`;
  });
  html += listReservationItems;
  html += "</ul>";
  return html;
};
