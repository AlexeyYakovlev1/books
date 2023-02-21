class Books {
	constructor() {
		this.LIMIT = 50;
		this.API_URL = `https://example-data.draftbit.com/books?_limit=${this.LIMIT}`;
		this.loader = false;
	}

	async getBooks() {
		this.loader = true;

		const response = await fetch(this.API_URL, { method: "GET" });
		const data = await response.json();

		this.loader = false;

		return data;
	}

	get getLimit() {
		return this.LIMIT;
	}

	get getLoader() {
		return this.loader;
	}
}