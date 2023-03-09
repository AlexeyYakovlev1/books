const favourites = new Favourites();
const storage = favourites.getStorage;

const $list = document.querySelector(".list");
const $titleEmpty = document.querySelector(".title--empty");

function checkStorage() {
	if (!favourites.getStorage.length) {
		$titleEmpty.classList.remove("hidden");
		$list.innerHTML = ``;
	}
}

checkStorage();

function renderList(list = storage) {
	list.forEach(({ id, title, description, rating, image_url }) => {
		const $book = `
			<li class="list__item" data-id="${id}">
				<div class="list__item--left">
					<div class="list__item--cover">
						<img src="${image_url}" alt="book ${title}">
					</div>
					<div class="list__item--body">
						<span class="list__item--title">
							<a href="./book.html?id=${id}">${title}</a>
						</span>
						<div class="list__item--rating">
							<?xml version="1.0" encoding="UTF-8"?>
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="26px" height="26px"
								viewBox="0 0 26 26" version="1.1">
								<g id="surface1">
									<path style=" stroke:none;fill-rule:evenodd;fill:#7049C3;fill-opacity:1;"
										d="M 13 3.734375 L 15.300781 10.816406 L 22.75 10.816406 L 16.726562 15.195312 L 19.027344 22.277344 L 13 17.902344 L 6.972656 22.277344 L 9.277344 15.195312 L 3.25 10.816406 L 10.699219 10.816406 Z M 13 3.734375 " />
								</g>
							</svg>
							${rating}
						</div>
						<p class="list__item--description">${description}</p>
					</div>
				</div>
				<div class="list__item--remove" data-id="${id}">✕</div>
			</li>
		`;

		$list.innerHTML += $book;
	});
}

renderList();

const $listItemRemove = document.querySelectorAll(".list__item--remove");

$listItemRemove.forEach(($el) => {
	$el.addEventListener("click", () => {
		const currentId = $el.dataset.id;
		favourites.remove(currentId);
		document.querySelector(`.list__item[data-id="${currentId}"]`).remove();
		checkStorage();
	});
});