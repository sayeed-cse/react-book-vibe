import { getLocalStorageData } from "../../utilities/localStorage";
import { useEffect, useState } from "react";
import ListedBook from "../ListedBook/ListedBook";

const ReadBooks = ({ books, sortBy }) => {
    const [readBooks, setReadBooks] = useState([]);
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        setAllBooks(books);

        const readBookIds = getLocalStorageData('read');

        const getReadBooks = allBooks.filter(book => readBookIds.find(id => id == book.bookId));
        setReadBooks(getReadBooks);
    }, [allBooks, books, sortBy]);

    return (
        <div>
            {
                 readBooks.map(book => <ListedBook key={book.bookId} book={book}></ListedBook>)
            }
        </div>
    );
};

export default ReadBooks;