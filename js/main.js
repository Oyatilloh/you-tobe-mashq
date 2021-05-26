// let films = [
// 	{ title: 'Vue darsi', genre: 1, sourceLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZqgiuPt5QZo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
// 	{ title: 'Vue darsi', genre: 2, sourceLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZqgiuPt5QZo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
// 	{ title: 'Vue darsi', genre: 3, sourceLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZqgiuPt5QZo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
// 	{ title: 'Vue darsi', genre: 1, sourceLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZqgiuPt5QZo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
// 	{ title: 'Vue darsi', genre: 4, sourceLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZqgiuPt5QZo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
// ]



// window.localStorage.setItem('data', JSON.stringify(films))

let films = window.localStorage.getItem('data')
if(!films) films = []
else films = JSON.parse(films)

let filterSelect = document.querySelector("#filterSelect")
let filmsList = document.querySelector(".films-list")
let form = document.querySelector("form")



function filmsRenderer (array, genresList) {
	filmsList.innerHTML = null
	for(let element of arrays) {
		let li = document.createElement('li')
		let topDiv = document.createElement('div')
		let bottomDiv = document.createElement('div')
		let h3 = document.createElement('h3')
		let span = document.createElement('span')

		li.classList.add('films-item')
		topDiv.innerHTML = element.sourceLink
		h3.textContent = element.title
		let found = genresList.find(e => e.id == element.genre)
		span.textContent = found.genre
		bottomDiv.classList.add('films-text-wrapper')

		bottomDiv.appendChild(h3)
		bottomDiv.appendChild(span)
		li.appendChild(topDiv)
		li.appendChild(bottomDiv)
		filmsList.appendChild(li)
	}
}

function filterFilms(array, genreKey) {
	let trash = []
	for( let film of array ) {
		if(film.genre == genreKey) {
			trash.push(film)
		} else if(genreKey == 0) {
			return array
		}
	}
	return trash
}


form.addEventListener('submit', event => {
	event.preventDefault()
	let filteredFilms = filterFilms(films, filterSelect.value)
	filmsRenderer(filteredFilms, genres)
})

filmsRenderer()