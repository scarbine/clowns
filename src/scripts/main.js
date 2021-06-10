import {ClownParty} from "./ClownParty.js"


console.log("Hello, Clowns!")



const mainContainer = document.querySelector("#container")

const render = () =>{

	mainContainer.innerHTML = ClownParty()

}

render()