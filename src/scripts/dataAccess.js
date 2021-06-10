const API = "http://localhost:8088";

const reservationState = {
  reservations: [],
};


export const fetchRequest = () => {
	return fetch(`${API}/reservations`)
	.then(response => response.json())
	.then((clownRequests) => {
		reservationState.reservations = clownRequests;
	});
};

export const sendRequest = (userReservationRequest) => {
	const fetchOptions = {
		method: "POST",
		headers: {
			"Content_Type" : "application.json"
		},
		body: JSON.stringify(userReservationRequest)
	}
	return fetch(`${API}/reservations`, fetchOptions)
	.then(response => response.json())
	.then(() =>{
		document.dispatchEvent(new CustomEvent("stateChanged"))
	})
}

export const getReservations = () => {
	return reservationState.reservations.map(reservation => ({...reservation}))
}

// console.log("getReservations is linked!!!");
// let html = `<ul>`;

// html += `<li class="reservation_list_item" value =""> THIS WILL BE A RESERVATION LIST ITEM </li>`;

// html += `</ul>`;
// return html;
