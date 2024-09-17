import { getLocalStorageData } from "../../utilities/localStorage";
import { useEffect, useState } from "react";
import ListedBook from "../ListedBook/ListedBook";

const Wishlist = ({ books, sortBy }) => {
    const [wishList, setwishList] = useState([]);
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        setAllBooks(books);

        const wishLishtIds = getLocalStorageData('wishlist');

        const getwishLisht = allBooks.filter(book => wishLishtIds.find(id => id == book.bookId));
        setwishList(getwishLisht);
    }, [allBooks, books, sortBy]);

    return (
        <div>
            {
                wishList.map(book => <ListedBook key={book.bookId} book={book}></ListedBook>)
            }
        </div>
    );
};

export default Wishlist;