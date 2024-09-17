import './ListedBooks.css';
import { useEffect, useState } from "react";
import ReadBooks from "../ReadBooks/ReadBooks";
import Wishlist from "../Wishlist/Wishlist";
import { useLoaderData } from 'react-router-dom';

const ListedBooks = () => {
    const [sortedBooks, setSortedBooks] = useState([]);
    const [sortBy, setSortBy] = useState('all');


    const [active, setActive] = useState("1");

    const { books } = useLoaderData();

    useEffect(() => {
        setSortedBooks(books);
    }, [books])

    const handleSortBy = (sortBy) => {
        setSortBy(sortBy);

        if (sortBy === 'rating') {
            const rating = books.sort((a, b) => a.rating - b.rating);
            setSortedBooks(rating);
        }
        else if (sortBy === 'totalPages') {
            const totalPages = books.sort((a, b) => a.totalPages - b.totalPages);
            setSortedBooks(totalPages);
        }
        else if (sortBy === 'yearOfPublishing') {
            const yearPublishing = books.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            setSortedBooks(yearPublishing);
        }
    }
    const handleClick = (evnet) => {
        const id = evnet.target.id;
        setActive(id);

    }
    return (
        <div>
            <h2 className="py-8 text-center font-bold text-3xl bg-gray-100 rounded-2xl">Books</h2>
            <div className="flex justify-center my-8">
                <details className="dropdown">
                    <summary className="btn btn-lg bg-[#23BE0A] text-white w-52">Sort By</summary>
                    <ul className="menu dropdown-content bg-gray-100 z-[1]  w-52 p-2 shadow rounded-t-0">
                        <li><a onClick={() => handleSortBy('rating')} className="text-base">Rating</a></li>
                        <li><a onClick={() => handleSortBy('totalPages')} className="text-base">Number of pages</a></li>
                        <li><a onClick={() => handleSortBy('yearOfPublishing')} className="text-base">Publisher year</a></li>
                    </ul>
                </details>
            </div>
            <div className="flex mb-8">
                <button id="1" onClick={handleClick} className={`px-4 py-3 listed ${active === "1" ? "active" : undefined}`}>Read Books</button>
                <button id="2" onClick={handleClick} className={`px-4 py-3 listed ${active === "2" ? "active" : undefined}`}>Wishlist Books</button>
                <div className="border-b pb-[10px] flex-auto"></div>
            </div>
            {
                active === "1" ? <ReadBooks books={sortedBooks} sortBy={sortBy}></ReadBooks> : <Wishlist books={sortedBooks}></Wishlist>
            }
        </div>
    );
};

export default ListedBooks;