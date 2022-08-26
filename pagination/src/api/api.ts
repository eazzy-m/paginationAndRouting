import {IUser} from "../constants/interfaces";

const baseUrl = 'https://core-area-api.herokuapp.com';


export const handlerLogin = (data: {login:string, password: string}) => {
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

export const newUserRegistration = (data: {
                                    user_name: string,
                                    first_name: string,
                                    last_name: string,
                                    email: string,
                                    password: string
                                        }) => {
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

export const fetchPartOfData = async (pageNumber): Promise<IUser[]> => {
    const res = await fetch(`${baseUrl}/users?_page=${pageNumber}&_limit=30`, {
        method: 'GET',
        headers: {
            authorization: 'super-token',
            'Content-Type': 'application/json',
        },
    });
    return await res.json();
};