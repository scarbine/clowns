import { getCompletions } from "./dataAccess.js";

export const Completions = () => {
  const completions = getCompletions();
  let html = "<ul>";
  const listReservationItems = completions.map((reservation) => {
    return `<li class="reservation_item" > <div class="reservation_list_item" id="reservation--${reservation.id}">Party number ${reservation.id} with ${reservation.childName} is complete. </div>`;
  });
  html += listReservationItems.join("");
  html += "</ul>";
  return html;
};
