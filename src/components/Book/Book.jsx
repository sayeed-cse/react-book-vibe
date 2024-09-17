import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
    const { bookId,bookName, author, image, rating, category, tags } = book;
    return (
        <Link to={`/react-book-vibe/bookDetails/${bookId}`}>
            <div className="card bg-base-100 border m-4 lg:m-0">
                <figure className="m-5 lg:m-10 bg-gray-100 rounded-xl">
                    <img
                        src={image}
                        alt={bookName}
                        className="p-4 lg:p-10" />
                </figure>

                <div className="card-body">
                    <div>
                        {
                            tags.map((tag, index) =>
                                <button key={index} className="text-[#23BE0A] font-medium py-1 px-2 lg:py-2 lg:px-4 rounded-full me-2 lg:me-3 bg-green-50">{tag}</button>)
                        }
                    </div>
                    <h2 className="text-xl lg:text-2xl font-bold">{bookName}</h2>
                    <p className="font-medium text-gray-700">By : {author}</p>
                    <hr className="border-b border-dashed my-2 lg:my-5" />
                    <div className="flex justify-between text-gray-900">
                        <p>{category}</p>
                        <p className="flex items-center gap-2 justify-end">{rating} <FaRegStar /></p>
                    </div>

                </div>
            </div>
        </Link>

    );
};

export default Book;