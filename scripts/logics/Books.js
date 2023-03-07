class Books {
	constructor() {
		this.LIMIT = 50;
		this.API_URL = `https://example-data.draftbit.com/books`;
		this.loader = false;
	}

	// get books (limit)
	async getBooks() {
		this.loader = true;

		const response = await fetch(`${this.API_URL}?_limit=${this.LIMIT}`, { method: "GET" });
		const data = await response.json();

		this.loader = false;

		return data;
	}

	// get book by id
	async getOneBook(id) {
		this.loader = true;

		const response = await fetch(`${this.API_URL}?id=${id}`, { method: "GET" });
		const data = await response.json();

		this.loader = false;

		return data[0];
	}

	// return limit
	get getLimit() {
		return this.LIMIT;
	}

	set setLimit(count) {
		this.LIMIT = count;
		return;
	}

	// return loader
	get getLoader() {
		return this.loader;
	}
}