import { Link } from "react-router-dom";

const ListedBook = ({ book }) => {
    const { bookId, bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    const [tag1, tag2, tag3] = tags;
    return (
        <div className="border rounded-2xl p-6 mb-6 m-4">
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12">
                <div className="bg-gray-100 py-2 px-4 lg:py-5 lg:px-12 rounded-2xl">
                <img
                    src={`./${image}`} className="w-40  rounded-2xl" />
                </div>
                
                <div className="">
                    <h1 className="text-2xl lg:text-[40px] font-bold">{bookName}</h1>
                    <h3 className="text-xl font-medium"><span>By </span>{author}</h3>
                    <div className="w-2/3 flex flex-wrap items-center gap-2 py-6 mb-6 border-b">
                        <p className="font-bold">Tag</p>
                        <p className="text-[#23BE0A] font-medium py-1 px-2 text-xs lg:text-base lg:py-2 lg:px-4 rounded-full me-3 bg-green-50">{tag1}</p>
                        <p className="text-[#23BE0A] font-medium py-1 px-2 text-xs lg:text-base lg:py-2 lg:px-4 rounded-full me-3 bg-green-50">{tag2}</p>
                        <p className="text-[#23BE0A] font-medium py-1 px-2 text-xs lg:text-base lg:py-2 lg:px-4 rounded-full me-3 bg-green-50">{tag3}</p>
                        <p className="text-gray-600">Year of Publishing:</p>
                        <p className="font-semibold">{yearOfPublishing}</p>
                        <p className="text-gray-600">Publisher:</p>
                        <p className="font-semibold">{publisher}</p>
                        <p className="text-gray-600">Number of Pages:</p>
                        <p className="font-semibold">{totalPages}</p>
                    </div>
                    <div className="flex gap-3">
                        <p className="py-1 px-2 text-xs lg:text-base lg:py-2 lg:px-5 rounded-full bg-sky-100 text-sky-500">Category : {category}</p>
                        <p className="py-1 px-2 text-xs lg:text-base lg:py-2 lg:px-5 rounded-full bg-orange-50 text-orange-500">Rating:{rating}</p>
                        <Link to={`/react-book-vibe/bookDetails/${bookId}`} className="py-1 px-2 text-xs lg:text-base lg:py-2 lg:px-5 rounded-full bg-green-500 text-white">ViewDetails</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ListedBook;