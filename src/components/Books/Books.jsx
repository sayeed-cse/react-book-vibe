import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    const booksObj = useLoaderData();
    useEffect(() => {
        setBooks(booksObj.books);
    }, [books]);
    return (
        <div>
            <h2 className="text-5xl font-bold mb-9 mt-24 text-center">Books {books.length}</h2>
            <div className="grid lg:grid-cols-3 gap-6 mb-28">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;