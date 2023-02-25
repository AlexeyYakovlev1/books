const $popularList = document.querySelector(".popular__list");

const books = new Books();
const promiseBooks = books.getBooks();

if (books.getLoader) {
	$popularList.innerHTML = LOADER;
}

// generate number which divisible by 4
function getRandomNum(limit = books.getLimit) {
	let n = Math.floor(Math.random() * limit);

	while (n % 4 !== 0) n++;

	return n;
}

// render popularity list of books
promiseBooks.then((list) => {
	const end = getRandomNum();
	const start = end - 4;
	const popularity = list.slice(start, end);

	if (!books.getLoader) {
		$popularList.innerHTML = ``;
	}

	popularity.forEach((book) => {
		const { authors, image_url, title, id, description } = book;
		const $popularBook = `
			<li class="popular__list-item card__book">
				<div class="card__book--cover">
					<img
						class="card__book--photo"
						src="${image_url}"
						alt="cover book"
					/>
				</div>
				<div class="card__book--body">
					<span class="card__book--name">
						<a href="./pages/book.html?id=${id}">${title}</a>
					</span>
					<p class="card__book--description">${description}</p>
					<small class="card__book--author">${authors}</small>
				</div>
			</li>
		`;

		$popularList.innerHTML += $popularBook;
	});
});