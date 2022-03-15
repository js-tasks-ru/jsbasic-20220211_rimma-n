function toggleText() {
const hiddenButton = document.querySelector('.toggle-text-button');
const div = document.getElementById('text');

	hiddenButton.onclick = function() {
		if (div.hidden !== true) {
			div.hidden = true;
		}
		else {
			div.hidden = false;
		}
	}	 
	 
}	 
