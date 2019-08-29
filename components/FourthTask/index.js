class User {
	constructor(typeOfUser) {
		this._canEditEverything = false;
		if (typeOfUser === 'administrator') {
			this._canEditEverything = true;
		}
	}
	get canEditEverything() {
		return this._canEditEverything;
	}
}

let u1 = new User('user');
let u2 = new User('administrator');
