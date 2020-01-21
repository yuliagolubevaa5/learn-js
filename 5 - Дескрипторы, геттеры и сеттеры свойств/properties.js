//Добавить get/set свойства

class User {
    constructor(fullName) {
        this.fullName = fullName;

        Object.defineProperties(this, {
                firstName: {
                    get: () => {
                        return this.fullName.split(' ')[0];
                    },
                    set: (newFirstName) => {
                        this.fullName = newFirstName + ' ' + this.lastName
                    }
                },
                lastName: {
                    get: () => {
                        return this.fullName.split(' ')[1];
                    },
                    set: (newLastName) => {
                        this.fullName = this.firstName + ' ' + newLastName
                    }
                }
            });
        }
}

let vasya = new User('Василий Попкин');
alert(vasya.firstName);
vasya.lastName = 'Сидоров'; // запись в lastName
alert(vasya.lastName);
