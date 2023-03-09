class Favourites {
	constructor() {
		this.storage = this._getStorageFromCookie();
	}

	_getStorageFromCookie() {
		const cookie = document.cookie; // name=oeschger; favorite_food=tripe; ...
		const storage = cookie
			.split(";")
			.filter((el) => el.split("=")[0] == "storage")[0];

		const result = JSON.parse(storage ? storage.replace("storage=", "") : "[]");

		return result;
	}

	_updateStorage() {
		document.cookie = `storage=${JSON.stringify(this.storage)}`;
	}

	setStorage(data) {
		if (Array.isArray(data)) {
			document.cookie = `storage=${JSON.stringify(data)}`;
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