class Books extends Favourites {
	constructor() {
		super();

		this.LIMIT = 50;
		this.API_URL = `https://example-data.draftbit.com/books`;
		this.loader = false;
	}

	_checkFavouriteBook(data) {
		const favouritesBooks = this.getStorage;

		for (let i = 0; i < data.length; i++) {
			const book = data[i];
			const favouriteBook = favouritesBooks.findIndex(({ id }) => id === book.id);

			if (favouriteBook !== -1) {
				data[i]["favourite"] = true;
			}
		}
	}

	async getBooks() {
		this.loader = true;

		const response = await fetch(`${this.API_URL}?_limit=${this.LIMIT}`, { method: "GET" });
		const data = await response.json();

		this._checkFavouriteBook(data);

		this.loader = false;

		return data;
	}

	async getOneBook(id) {
		this.loader = true;

		const response = await fetch(`${this.API_URL}?id=${id}`, { method: "GET" });
		const data = await response.json();

		this.loader = false;

		return data[0];
	}

	get getLimit() {
		return this.LIMIT;
	}

	set setLimit(count) {
		this.LIMIT = count;
		return;
	}

	get getLoader() {
		return this.loader;
	}
}