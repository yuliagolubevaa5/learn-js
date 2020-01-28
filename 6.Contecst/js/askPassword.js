//Исправьте функцию, теряющую "this"

function askPassword(ok, fail) {
    let password = prompt('Пароль?', '');
    if (password == 'rockstar') {
        ok();
    } else {
        fail();
    }
};

let user = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },
};

askPassword(() => user.loginOk(), () => user.loginFail());

//Использование частично применнной функции для логина

let user2 = {
    name: 'John',
    login(result) {
        alert(this.name + (result? ' logged in' : ' failed to log in'));
    }
};

askPassword(user2.login.bind(user2, true), user2.login.bind(user2, false));