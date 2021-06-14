import { getClowns, getCompletions,sendClownUpdate } from "./dataAccess.js";

export const clownSelector = (reservation) => {
  const clowns = getClowns();
  return `<select class="clowns" id="clowns">
    <option value="">Choose</option>
    ${clowns
      .map((clown) => {
        return `<option value="clowns--${clown.id}--${reservation.id}--${clown.name}">${clown.name}</option>`;
      })
      .join("")}
</select>`;
};



document.addEventListener("change", (event) => {
 const completions = getCompletions()
    if (event.target.value.startsWith("clowns--")){
        
        const [,clownIdValue,reservationIdValue,clownName] = event.target.value.split("--")
        const clownId = parseInt(clownIdValue)
        const reservationId = parseInt(reservationIdValue)
        const foundCompletion = completions.find(completion => completion.id === reservationId)
        foundCompletion.isComplete = true
        const selectedClown = () =>{ if(clownId === 1)
            return foundCompletion.clownId ="1"
        else { if(clownId ===2)
            return foundCompletion.clownId = "2"
            }
        }

        selectedClown()
        sendClownUpdate(foundCompletion, foundCompletion.id)
        // window.alert(`Scares provided by ${clownName}.`)
        document.dispatchEvent(new CustomEvent("stateChanged"))  
    }
});
