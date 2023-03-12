class Favourites {
	constructor() {
		this.storage = this._getStorageFromLocalStorage();
	}

	_getStorageFromLocalStorage() {
		return JSON.parse(localStorage.getItem("storage") || "[]");
	}

	_updateStorage() {
		localStorage.setItem("storage", JSON.stringify(this.storage));
	}

	setStorage(data) {
		if (Array.isArray(data)) {
			localStorage.setItem("storage", JSON.stringify(data));
			this.storage = data;
		} else {
			throw new Error(`Type "data" must be array`);
		}
	}

	get getStorage() {
		return this.storage;
	}

	add(book) {
		this.storage.push(book);
		this._updateStorage();
	}

	remove(id) {
		const newStorage = this.storage.filter((book) => book.id.toString() !== id.toString());
		this.setStorage(newStorage);
	}
}