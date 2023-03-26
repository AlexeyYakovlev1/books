const books = new Books();

const $coverImg = document.querySelector(".cover__img");
const $aboutInfo = document.querySelectorAll("span[data-about]");
const $content = document.querySelector(".content");
const $loader = document.querySelector(".loader");
const $quotesList = document.querySelector(".quotes__list");
const $genresList = document.querySelector(".genres__list");

const queryId = window.location.href.split("?").filter(str => str.includes("id="))[0];
const currentIdBook = parseInt(queryId.split("=").pop());
const promiseBookes = books.getOneBook(currentIdBook);

promiseBookes.then((data) => {
	const { image_url, Quote1, Quote2, Quote3, genre_list, title } = data;
	const quoutes = [Quote1, Quote2, Quote3];
	const genres = genre_list.split(",");

	document.title = title;

	if (!books.getLoader) {
		$coverImg.src = image_url
		$loader.style.display = "none";
		$content.style.opacity = "1";
	}

	$aboutInfo.forEach(($about) => {
		$about.textContent = data[$about.dataset.about];
	});

	quoutes.map(quote => $quotesList.innerHTML += `<li>${quote}</li>`);
	genres.map(genre => $genresList.innerHTML += `<li>${genre}</li>`);
});