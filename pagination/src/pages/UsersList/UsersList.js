import React, {useEffect, useState} from 'react';
// import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
// import { getUsers, nextPage } from "../../features/usersList/usersListSlice";
import "./UsersList.css";
import Loader from "../Loader/Loader";


const UsersList = () => {
    // const dispatch = useDispatch();
    // const { isLoading } = useSelector((state) => state.users);
    //
    // const { users } = useSelector((state) => state.users);
    const [hasMore, setHasMore] = useState(true)

    const [items, setItems] = useState([])
    const [page, setPage] = useState(2)


    const baseUrl = 'https://core-area-api.herokuapp.com';

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`${baseUrl}/users?_page=${1}&_limit=20`, {
                method: 'GET',
                headers: {
                    authorization: 'super-token',
                    'Content-Type': 'application/json',
                },
            })
            const data = await res.json();
            setItems(data)
        }
        getData();
        }
    , []);

    const fetchData = async () => {
        const res = await fetch(`${baseUrl}/users?_page=${page}&_limit=20`, {
            method: 'GET',
            headers: {
                authorization: 'super-token',
                'Content-Type': 'application/json',
            },
        })
        return await res.json();
    }
    const nextItems = async () => {
        const newData = await fetchData();
        setItems([...items, ...newData])
        if (newData.length === 0 || newData.length < 20) {
            setHasMore(false)
        }
        setPage(page + 1);
    }

    return (

        <>
            <h1>Users List</h1>
            <div className="container">

                <InfiniteScroll
                    style={{marginLeft: "200px", width: "1000px"}}
                    dataLength={items.length} //This is important field to render the next data
                    next={nextItems}
                    hasMore={hasMore}
                    loader={<Loader/>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                ><table className="users-list">
                    <tbody>
                        {items.map((user) => {
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