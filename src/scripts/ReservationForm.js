
export const ReservationForm = () => {
	
	let html = `<article>
		
		</article class="submitted-fields>
		<div name="fields">
			<label class="label for="parent_name"> Parent Name </label>
			<input type="text" name="parent_name" class="input"/>
		</div>
		<div name="fields">
			<label class="label for="child_name"> Child Name </label>
			<input type="text" name="child_name" class="input"/>
		</div>
		<div name="fields">
			<label class="label for="number_of_children"> Number of Children </label>
			<input type="number" name="number_of_children" class="input"/>
		</div>
		<div name="fields">
			<label class="label for="address"> Address </label>
			<input type="text" name="address" class="input"/>
		</div>
		<div name="fields">
			<label class="label for="date"> Date of Party </label>
			<input type="date" name="date" class="input"/>
		</div>
		<div name="fields">
			<label class="label for="duration"> Duration </label>
			<input type="number" name="duration" class="input"/>
		</div>
		
		<button class="button" id="submit_request"> Submit Reservation </button>
		`

	return html

}