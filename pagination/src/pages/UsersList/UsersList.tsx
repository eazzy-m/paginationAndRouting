import {useCallback, useEffect, useState, ChangeEvent, FC} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import "./UsersList.scss";
import Loader from "../Loader/Loader";
import SearchIcon from '@mui/icons-material/Search';
import {IUser} from "../../constants/interfaces"

const UsersList: FC = () => {
    const initialPage = 1;
    const [hasMore, setHasMore] = useState(true);
    const [items, setItems] = useState<IUser[]>([]);
    const [page, setPage] = useState(2);
    const [searchTerm, setSearchTerm] = useState("");

    const baseUrl = 'https://core-area-api.herokuapp.com';

    useEffect(() => {
        (async function getInitialData(): Promise<void> {
            const newData = await fetchData(initialPage);
            setItems([...items, ...newData]);
        })();
        }, []);

    const fetchData = async (pageNumber): Promise<IUser[]> => {
        const res = await fetch(`${baseUrl}/users?_page=${pageNumber}&_limit=20`, {
            method: 'GET',
            headers: {
                authorization: 'super-token',
                'Content-Type': 'application/json',
            },
        });
        return await res.json();
    };


    const nextItems = async (): Promise<void> => {
        const newData = await fetchData(page);
        setItems([...items, ...newData]);
        if (newData.length === 0 || newData.length < 20) {
            setHasMore(false);
        }
        setPage(page + 1);
    };

    const debounce = (callBack: (e: ChangeEvent<HTMLInputElement>) => void, delay: number):() => void => {
        let timer: any;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(():void => {
                // @ts-ignore
                callBack(...args);
            }, delay);
        };
    };

    const searchHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
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
                        Enter first or last name:
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
                        <p style={{ textAlign: 'center', marginTop: "15px" }}>
                            <b>These are all users whose first or last name includes "{searchTerm}"</b>
                        </p>
                    }>
                    <table className="users-list">
                    <tbody>
                        {items.filter((value: IUser) => {
                            if (searchTerm === "") {
                                return value
                            } else if (
                                value.first_name.toLowerCase().includes(searchTerm.trim().toLowerCase())
                            ||
                                value.last_name.toLowerCase().includes(searchTerm.trim().toLowerCase())
                            ) {
                                return value
                            } return null
                        }).map((user: IUser) => {
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
};

export default UsersList;