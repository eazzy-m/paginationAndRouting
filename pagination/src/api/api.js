"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUserRegistration = exports.getUsersFromServer = exports.handlerLogin = void 0;
const baseUrl = 'https://core-area-api.herokuapp.com';
const handlerLogin = (data) => {
    return fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            authorization: 'super-token',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.assign({}, data)),
    })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
};
exports.handlerLogin = handlerLogin;
const getUsersFromServer = () => {
    return fetch(`${baseUrl}/users`, {
        method: 'GET',
        headers: {
            authorization: 'super-token',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
};
exports.getUsersFromServer = getUsersFromServer;
const newUserRegistration = (data) => {
    return fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            authorization: 'super-token',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.assign({}, data)),
    })
        .then(() => true)
        .catch(err => console.log(err));
};
exports.newUserRegistration = newUserRegistration;
