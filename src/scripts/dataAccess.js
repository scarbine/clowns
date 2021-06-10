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
			"Content-Type" : "application.json"
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

// export const sendRequest = (userServiceRequest) => {
// 	const fetchOptions = {
// 	    method: "POST",
// 	    headers: {
// 		"Content-Type": "application/json"
// 	    },
// 	    body: JSON.stringify(userServiceRequest)
	    
// 	}
    
// 	return fetch(`${API}/reservations`, fetchOptions)
// 	    .then(response => response.json())
// 	    .then(() => {
// 		document.dispatchEvent(new CustomEvent("stateChanged"))
// 	    })
//     }