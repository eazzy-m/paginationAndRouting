import {useCallback, useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import "./UsersList.scss";
import Loader from "../Loader/Loader";
import {Input} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import * as React from "react";

const UsersList = () => {

    interface user {
        first_name: string,
        last_name: string,
        user_name: string,
        id: string,
        age: number,
        address: string,
        gender:string
    }

    const [hasMore, setHasMore] = useState(true);
    const [items, setItems] = useState<user[]>([]);
    const [page, setPage] = useState(2);
    const [searchTerm, setSearchTerm] = useState("");

    const baseUrl = 'https://core-area-api.herokuapp.com';

    useEffect(() => {
        const getData = async (): Promise<void> => {
            const res = await fetch(`${baseUrl}/users?_page=${1}&_limit=20`, {
                method: 'GET',
                headers: {
                    authorization: 'super-token',
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            setItems(data);
        };
        getData();
        }, []);

    const fetchData = async (): Promise<any> => {
        const res = await fetch(`${baseUrl}/users?_page=${page}&_limit=20`, {
            method: 'GET',
            headers: {
                authorization: 'super-token',
                'Content-Type': 'application/json',
            },
        });
        return await res.json();
    };


    const nextItems = async (): Promise<any> => {
        const newData = await fetchData();
        setItems([...items, ...newData]);
        if (newData.length === 0 || newData.length < 20) {
            setHasMore(false);
        }
        setPage(page + 1);
    };

    const debounce = (callBack: (e) => void, delay: number):() => void => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                // @ts-ignore
                callBack(...args);
            }, delay);
        };
    };

    const searchHandler = (evt: any): void => {
        let searchItem = evt.target.value;
        searchItem.length > 2 ? setSearchTerm(searchItem) : setSearchTerm(searchItem);
    };

    const updatedSearchHandler = useCallback(debounce(searchHandler, 500), [searchTerm]);

    return (
        <>
            <h1>Users List</h1>
            <div className="container">
                <div className="search-container">
                    <label className="search-wrapper">
                        Enter first name or last name:
                        <input onChange={updatedSearchHandler} className="search-input" placeholder="..."/>
                        <SearchIcon className="search-image"/>
                    </label>
                </div>
                <InfiniteScroll
                    style={{marginLeft: "200px", width: "1000px"}}
                    dataLength={items.length}
                    next={nextItems}
                    hasMore={hasMore}
                    loader={<Loader/>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }>
                    <table className="users-list">
                    <tbody>
                        {items.filter(value => {
                            if (searchTerm === "") {
                                return value
                            } else if (
                                value.first_name.toLowerCase().includes(searchTerm.trim().toLowerCase())
                            ||
                                value.last_name.toLowerCase().includes(searchTerm.trim().toLowerCase())
                            ) {
                                return value
                            }
                        }).map((user) => {
                            return (
                                <tr key={user.id} className="description">
                                    <th className="number title">&#9737;</th>
                                    <th className="name title">{user.first_name} {user.last_name}</th>
                                    <th className="age title">{user.age}</th>
                                    <th className="gender title">{user.gender}</th>
                                    <th className="address title">{user.address}</th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </InfiniteScroll>
            </div>
        </>
    );
}

export default UsersList;