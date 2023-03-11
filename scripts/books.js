const books = new Books();
const favourites = new Favourites();

const $list = document.querySelector(".list");
const $loader = document.querySelector(".loader");
const $searchInput = document.querySelector(".search--input");
const $titleNoFind = document.querySelector("#titleNoFind");

let copyBooks = [];

document.addEventListener("DOMContentLoaded", () => {
	const promiseBooks = books.getBooks();

	promiseBooks.then((data) => {
		if (!books.getLoader) {
			$loader.style.display = "none";
			$list.style.opacity = "1";
		}

		copyBooks = data;
		renderList();
	});
});

$searchInput.addEventListener("input", (event) => {
	if (!copyBooks.length) return

	const originValue = event.target.value;
	const val = originValue.trim().toLowerCase();

	if (!val) return;

	$list.innerHTML = ``;

	const result = copyBooks.filter((book) => book.title.toLowerCase().includes(val));

	if (!result.length) {
		console.log(1);
		$titleNoFind.classList.remove("hidden");
		$titleNoFind.textContent = `По запросу "${originValue}" ничего не найдено`;
		return;
	}

	$titleNoFind.classList.add("hidden");

	renderList(result);
});

$searchInput.addEventListener("keypress", (event) => {
	if (event.keyCode === 13) {
		$list.innerHTML = ``;
		renderList();
	}
});

function renderList(list = copyBooks) {
	list.forEach(({ id, title, description, rating, image_url }) => {
		const $book = `
				<li class="list__item">
					<div class="list__item--cover">
						<img src="${image_url}" alt="book ${title}">
					</div>
					<div class="list__item--body">
						<span class="list__item--title">
							<a href="./book.html?id=${id}">${title}</a>
						</span>
						<div class="list__item--rating">
							<?xml version="1.0" encoding="UTF-8"?>
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="26px"
								height="26px" viewBox="0 0 26 26" version="1.1">
								<g id="surface1">
									<path style=" stroke:none;fill-rule:evenodd;fill:#7049C3;fill-opacity:1;"
										d="M 13 3.734375 L 15.300781 10.816406 L 22.75 10.816406 L 16.726562 15.195312 L 19.027344 22.277344 L 13 17.902344 L 6.972656 22.277344 L 9.277344 15.195312 L 3.25 10.816406 L 10.699219 10.816406 Z M 13 3.734375 " />
								</g>
							</svg>
							${rating}
						</div>
						<p class="list__item--description">${description}</p>
					</div>
					<button id="btnFavourite" data-id="${id}">
						<?xml version="1.0" encoding="UTF-8"?>
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="25px"
							viewBox="0 0 25 25" version="1.1">
							<g id="surface1">
								<path style=" stroke:none;fill-rule:nonzero;fill:#19191B;fill-opacity:1;"
									d="M 16.640625 4.054688 C 14.992188 4.054688 13.476562 4.824219 12.5 6.09375 C 11.523438 4.824219 10.007812 4.054688 8.359375 4.054688 C 5.472656 4.054688 3.125 6.410156 3.125 9.3125 C 3.125 10.671875 3.640625 11.96875 4.585938 12.953125 L 11.96875 20.410156 L 12.5 20.945312 L 13.03125 20.410156 L 20.273438 13.09375 C 21.296875 12.105469 21.875 10.757812 21.875 9.3125 C 21.875 6.410156 19.527344 4.054688 16.640625 4.054688 Z M 16.640625 4.054688 " />
							</g>
						</svg>
					</button>
				</li>
			`;

		$list.innerHTML += $book;
	});

	const $btnFavourite = document.querySelectorAll("#btnFavourite");

	$btnFavourite.forEach(($btn) => {
		$btn.addEventListener("click", () => {
			const findBook = copyBooks.filter((book) => book.id.toString() === $btn.dataset.id.toString())[0];
			favourites.add(findBook);
		});
	});
}