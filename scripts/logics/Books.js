class Books extends Favourites {
	constructor() {
		super();

		this.LIMIT = 50;
		this.API_URL = `https://example-data.draftbit.com/books`;
		this.loader = false;
	}

	async getBooks() {
		this.loader = true;

		const response = await fetch(`${this.API_URL}?_limit=${this.LIMIT}`, { method: "GET" });
		const data = await response.json();

		console.log(this.getStorage);

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