import { useLoaderData, useParams } from "react-router-dom";
import { setToLocalStorage } from "../../utilities/localStorage";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const { books } = useLoaderData();
    const { id } = useParams();
    const book = books.find(book => book.bookId === parseInt(id));
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    const [tag1, tag2, tag3] = tags;

    const handleSaveData = (id, localStorageName) => {
        setToLocalStorage(id, localStorageName);
        toast('Successfully Added to : ' + localStorageName.toUpperCase());
    }

    return (
        <div className="grid place-items-center min-h-screen">
            <div className="flex gap-12">
                <img
                    src={`${image}`} className="w-1/2 p-20 bg-gray-100 rounded-2xl" />
                <div className="w-1/2">
                    <h1 className="text-[40px] font-bold">{bookName}</h1>
                    <h3 className="text-xl font-medium"><span>By </span>{author}</h3>
                    <h3 className="text-xl font-medium border-y py-4 my-6">{category}</h3>
                    <p className="py-6"><span className="font-bold">Review: </span>{review}</p>
                    <div className="flex items-center gap-2 py-6 mb-6 border-b">
                        <p className="font-bold">Tag</p>
                        <p className="text-[#23BE0A] font-medium py-2 px-4 rounded-full me-3 bg-green-50">{tag1}</p>
                        <p className="text-[#23BE0A] font-medium py-2 px-4 rounded-full me-3 bg-green-50">{tag2}</p>
                        <p className="text-[#23BE0A] font-medium py-2 px-4 rounded-full me-3 bg-green-50">{tag3}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-600">Number of Pages:</p>
                        <p className="font-semibold">{totalPages}</p>
                        <p className="text-gray-600">Publisher:</p>
                        <p className="font-semibold">{publisher}</p>
                        <p className="text-gray-600">Year of Publishing:</p>
                        <p className="font-semibold">{yearOfPublishing}</p>
                        <p className="text-gray-600">Rating:</p>
                        <p className="font-semibold">{rating}</p>
                    </div>
                    <div className="flex gap-4 pt-8">
                        <button onClick={() => handleSaveData(id, 'read')} className="btn btn-outline px-7 text-lg">Read</button>
                        <button onClick={() => handleSaveData(id, 'wishlist')} className="btn bg-[#50B1C9] text-white text-lg px-7">Wishlist</button>
                    </div>
                    <ToastContainer />

                </div>
            </div>
        </div>
    );
};

export default BookDetails;