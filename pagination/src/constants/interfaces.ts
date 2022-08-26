export interface IUser {
    first_name: string,
    last_name: string,
    user_name: string,
    email: string,
    password: string,
    id?: string,
    age?: number,
    address?: string,
    gender?: string
}

export interface IGlobalState {
    login: {
        isLoading: boolean,
        isLogin: string
    },
    registration: {
        isLoading: boolean,
        isRegister: boolean
    },
    users: {
        isLoading: boolean
        users: []
    }
}
