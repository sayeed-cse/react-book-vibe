import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <div className="shadow-md min-h-screen rounded-3xl border-s-[10px] border-red-400 ">
            <Helmet>
                <title>Book Vibe | About</title>
            </Helmet>
            <div className="p-10 lg:p-20">
                <div className="text-balance lg:me-28 mt-5">
                    <h1 className="text-4xl font-bold">About Book Vibe</h1>
                    <hr className='h-1 bg-gradient-to-r from-red-500 to-red-200 rounded-full my-2 w-1/2' />
                    <p className="py-6">
                        Welcome to Book Vibe, your one-stop destination for everything book-related. Our passion for reading and our commitment to providing an exceptional experience for book lovers inspired us to create this platform, where the love for literature meets convenience.

                        At Book Vibe, we believe that the right book can change your life. Whether you're looking for the latest bestsellers, timeless classics, or niche genres, we’ve got something for every reader. We carefully curate our collections to make sure there's a book for every mood, vibe, and journey.</p>
                </div>

                <div className="text-balance lg:me-28 mt-5">
                    <h1 className="text-4xl font-bold">Our Story</h1>
                    <hr className='h-1 bg-gradient-to-r from-red-500 to-red-200 rounded-full my-2 w-1/2' />
                    <p className="py-6">
                        Founded in 2023, Book Vibe started with a simple mission: to bring the joy of reading to everyone, everywhere. What began as a small online venture by a group of passionate readers quickly blossomed into a full-fledged bookstore, serving readers worldwide. Today, Book Vibe is home to thousands of books, e-books, and audiobooks across a wide range of genres.</p>
                </div>
                <div className="text-balance lg:me-28 mt-5">
                    <h1 className="text-4xl font-bold">What We Offer</h1>
                    <hr className='h-1 bg-gradient-to-r from-red-500 to-red-200 rounded-full my-2 w-1/2' />
                    <div className='flex flex-col gap-5 ps-10 py-10'>
                        <div className="collapse collapse-arrow border bg-green-50">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium">Extensive Collection:</div>
                            <div className="collapse-content">
                                <p>From fiction and non-fiction to self-help, young adult, fantasy, and more, our catalog covers all reading preferences.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow border bg-green-50">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Personalized Recommendations:</div>
                            <div className="collapse-content">
                                <p>Let our AI-powered recommendation system suggest books based on your reading history and preferences.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow border bg-green-50">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Curated Book Lists:</div>
                            <div className="collapse-content">
                                <p>Handpicked by our team of book enthusiasts, our lists cover everything from hidden gems to the latest trending reads.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow border bg-green-50">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Fast Delivery:</div>
                            <div className="collapse-content">
                                <p>With speedy worldwide shipping, we ensure that your books reach you wherever you are.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow border bg-green-50">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Exclusive Membership Benefits:</div>
                            <div className="collapse-content">
                                <p>Join the Book Vibe Club to receive early access to new releases, member-only discounts, and invitations to author events.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-balance lg:me-28 mt-5">
                    <h1 className="text-4xl font-bold">Our Vision</h1>
                    <hr className='h-1 bg-gradient-to-r from-red-500 to-red-200 rounded-full my-2 w-1/2' />
                    <p className="py-6">
                        At Book Vibe, we envision a world where reading is more than just a hobby—it’s a way of life. We aim to cultivate a community of readers who share, learn, and grow together through the transformative power of books.</p>
                </div>
                <div className="text-balance lg:me-28 mt-5">
                    <h1 className="text-4xl font-bold">Join the Vibe</h1>
                    <hr className='h-1 bg-gradient-to-r from-red-500 to-red-200 rounded-full my-2 w-1/2' />
                    <p className="py-6">Whether you’re a lifelong bibliophile or someone looking to rekindle your love for reading, we welcome you to join our community. Subscribe to our newsletter for the latest updates on new arrivals, promotions, and literary events.
                        <span className='block py-2 font-semibold'>Stay connected, and keep the vibe going!</span>
                    </p>
                </div>
                <div className="text-balance lg:me-28 mt-5">
                    <h1 className="text-4xl font-bold mb-4">Follow Us</h1>
                    <hr className='h-1 bg-gradient-to-r from-red-500 to-red-200 rounded-full my-2 w-1/2' />
                    <p className="py-1 ms-3"><span className='font-semibold'>Instagram: </span><a href="">@bookvibeshop</a></p>
                    <p className="py-1 ms-3"><span className='font-semibold'>Twitter: </span><a href="">@bookvibe</a></p>
                    <p className="py-1 ms-3"><span className='font-semibold'>Facebook: </span><a href="">Book Vibe</a></p>
                </div>
            </div>
        </div>
    );
};

export default About;