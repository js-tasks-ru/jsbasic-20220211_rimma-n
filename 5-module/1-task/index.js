function hideSelf() {
	const hiddenButton = document.querySelector('.hide-self-button');
	hiddenButton.onclick = () => {
		hiddenButton.setAttribute('hidden', true);
	}
}
