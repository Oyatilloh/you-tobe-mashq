let adminSelect = document.querySelector('#adminSelect')
let iframeInput = document.querySelector('#iframeInput')
let titleInput = document.querySelector('#titleInput')
let form = document.querySelector('form')
function genresRenderer (array) {
	for( let element of array ) {
		let option = document.createElement('option')
		option.innerText = element.genre
		option.value = element.id

		adminSelect.appendChild(option)
	}
}
form.onsubmit = function (event) {
	event.preventDefault()
	console.log(iframeInput.value)
	console.log(titleInput.value)
	console.log(adminSelect.value)

}
genresRenderer(genres)