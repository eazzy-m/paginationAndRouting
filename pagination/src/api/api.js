
const baseUrl = 'https://core-area-api.herokuapp.com';


export const handlerLogin = data => {
    return fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            authorization: 'super-token',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...data
        }),
    })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
};

export const getUsersFromServer = () => {
    return fetch(`${baseUrl}/users`, {
        method: 'GET',
        headers: {
            authorization: 'super-token',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
};

export const newUserRegistration = data => {
   return  fetch(`${baseUrl}/register`,{
        method: 'POST',
        headers: {
            authorization: 'super-token',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...data
        }),
    })
        .then(() => true)
        .catch(err => console.log(err))
};

