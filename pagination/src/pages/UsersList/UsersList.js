import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";

import ReactPaginate from "react-paginate";
import "./UsersList.css";


const UsersList = () => {

    const { users } = useSelector((state) => state.users);

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(users.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(users.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, users]);

    const handlePageClick = event => {
        const newOffset = (event.selected * itemsPerPage) % users.length;
        setItemOffset(newOffset);
    };


    return (
        <>
            <h1>Users List</h1>
            <div className="container">
                <table className="users-list">
                    <tbody>
                    {currentItems.map((user) => {
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
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< Previous"
                    renderOnZeroPageCount={null}
                    containerClassName="paginate"
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num"
                    nextLinkClassName="page-num"
                    activeClassName="active"
                />
            </div>
        </>
    );
}

export default UsersList;