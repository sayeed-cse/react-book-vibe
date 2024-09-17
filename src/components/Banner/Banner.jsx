
const Banner = () => {
    return (
        <div className="hero  min-h-96 bg-gray-100 py-4 px-5 lg:py-16 lg:px-28  rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img
                    src={`./assets/book.png`}
                    className="" />
                <div>
                    <h1 className="text-2xl lg:text-6xl font-bold leading-relaxed">Books to freshen up your bookshelf!</h1>
                    <button className="btn bg-[#23BE0A] text-white px-7 text-xl mt-10">View the List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;