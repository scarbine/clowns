const API = "http://localhost:8088";

const reservationState = {
  reservations: [],
};

const completionState = {
  completions: [],
};

export const fetchRequest = () => {
  return fetch(`${API}/reservations`)
    .then((response) => response.json())
    .then((clownRequests) => {
      reservationState.reservations = clownRequests;
    });
};

export const fetchComplete = () => {
  return fetch(`${API}/completions`)
    .then((response) => response.json())
    .then((completeRequests) => {
      completionState.completions = completeRequests;
    });
};

export const getReservations = () => {
  return reservationState.reservations.map((reservation) => ({
    ...reservation,
  }));
};

export const getCompletions = () => {
	return completionState.completions.map((reservation) => ({...reservation}))
}

export const sendRequest = (userServiceRequest) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userServiceRequest),
  };

  return fetch(`${API}/reservations`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      document.dispatchEvent(new CustomEvent("stateChanged"));
    });
};

export const sendCompletions = (userServiceRequest) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userServiceRequest),
  };

  return fetch(`${API}/completions`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      document.dispatchEvent(new CustomEvent("stateChanged"));
    });
};

export const deleteReservation = (id) => {
  return fetch(`${API}/reservations/${id}`, { method: "DELETE" }).then(() => {
    document.dispatchEvent(new CustomEvent("stateChanged"));
  });
};

export const completeReservation = (id) => {
  const currentReservations = getReservations();
  // Find the reservation that matches the id argument
  const result = currentReservations.find(
    (reservation) => reservation.id === id
  );
  // Ask the user which clown went to the party
  const clownChoice = prompt("For Crusty type 1, for Leslie type 2. ");
  if (clownChoice === "0") {
    return prompt(
      "You did not select a valid input.For Crusty type 1, for Leslie type 2. "
    );
  }
  // set the clownId to relevant clown
  result.clownId = clownChoice;
  // set the value of is complete to "Complete"
  result.isComplete = "Complete";
  //Send the new object to the completions array
  sendCompletions(result);
  // Delete the completed object from the reservations array
  deleteReservation(id);
  console.log(result);
  // completionState.push(result)
  window.alert("Your reservation is now complete.");
};

// const result = trees.find(tree => tree.startsWith("m"));
