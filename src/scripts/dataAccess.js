


const API = "http:/localhost:8080"

// const reservationState = {
// 	reservation: [

// 	]
// }

export const getReservations = () => {
	console.log("getReservations is linked!!!")
	let html =`<ul>`
	
	
	html += `<li class="reservation_list_item" value =""> THIS WILL BE A RESERVATION LIST ITEM </li>`

	html += `</ul>`
	return html
}
