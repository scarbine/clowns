import { clownSelector } from "./Clowns.js";
import { fetchComplete, getClowns, getCompletions } from "./dataAccess.js";

export const Completions = () => {
  fetchComplete()	
  const completions = getCompletions();
  let html = "<ul>";
  const listReservationItems = completions.map((reservation) => {
	  if ( reservation.isComplete === false){
    return `<li class="reservation_item" > <div class="reservation_list_item" id="reservation--${reservation.id}">Party number ${reservation.id} with ${reservation.childName} is complete.Please Choose the clown that attend the party.   ${clownSelector(reservation)} </div>`;
  } else{
	  const reservationId = parseInt(reservation.clownId)
	  const clowns = getClowns()
	  const foundClown = clowns.find(({...clown}) => {return clown.id === reservationId})
	  return `<li class="reservation_item" > <div class="reservation_list_item" id="reservation--${reservation.id}">Party number ${reservation.id} with ${reservation.childName} is complete. ${foundClown.name} serviced this party.</div>`;
  }});
  html += listReservationItems.join("");
  html += "</ul>";
  return html;
};
