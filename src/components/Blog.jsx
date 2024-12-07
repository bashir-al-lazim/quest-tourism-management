/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <section className="py-6 mb-5 sm:py-12">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-4xl font-bold text-emerald-400 mb-12">Get Inspiration For Your Next Trip</h2>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    <article className="flex flex-col border-b-[0.25rem] border-b-emerald-700">
                        <Link to='https://www.booking.com/articles/experience-old-tokyo.en-us.html?label=gen173bo-1DEghhcnRpY2xlcyiCAjjoB0gzWANoFIgBAZgBMbgBF8gBDNgBA-gBAfgBAogCAZgCAqgCA7gCkqSzsQbAAgHSAiQ5ZDVhNDQxOC04NzA3LTQwZWEtOTQxYi0wYzBkYWEzY2Q0ZjfYAgTgAgE' className="h-full">
                            <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://i.ibb.co/BL5QR5N/378-Tokyo-003-2-min.jpg" />
                            <div className="flex flex-col flex-1 p-6 h-[calc(100%-13rem)]">
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">8 places to experience the old Tokyo</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                    <span>April 1, 2024</span>
                                    <span>2.6K views</span>
                                </div>
                            </div>
                        </Link>
                    </article>
                    <article className="flex flex-col border-b-[0.25rem] border-b-emerald-700">
                        <Link to='https://www.booking.com/articles/romantic-destinations-never-heard-of.en-us.html?label=gen173bo-1DEghhcnRpY2xlcyiCAjjoB0gzWANoFIgBAZgBMbgBF8gBDNgBA-gBAfgBAogCAZgCAqgCA7gCkqSzsQbAAgHSAiQ5ZDVhNDQxOC04NzA3LTQwZWEtOTQxYi0wYzBkYWEzY2Q0ZjfYAgTgAgE' className="full">
                            <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://i.ibb.co/QH8kPvk/Header-Romantic-places-min-1-compressed-1.jpg" />
                            <div className="flex flex-col flex-1 p-6 h-[calc(100%-13rem)]">
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">5 romantic places you probably haven't heard of</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                    <span>January 22, 2024</span>
                                    <span>2.2K views</span>
                                </div>
                            </div>
                        </Link>
                    </article>
                    <article className="flex flex-col border-b-[0.25rem] border-b-emerald-700">
                        <Link to='https://www.booking.com/articles/where-celebrate-songkran-new-year-thailand.en-us.html?label=gen173bo-1DEghhcnRpY2xlcyiCAjjoB0gzWANoFIgBAZgBMbgBF8gBDNgBA-gBAfgBAogCAZgCAqgCA7gCkqSzsQbAAgHSAiQ5ZDVhNDQxOC04NzA3LTQwZWEtOTQxYi0wYzBkYWEzY2Q0ZjfYAgTgAgE' className="h-full">
                            <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://i.ibb.co/D4Zt59T/Songkran.jpg" />
                            <div className="flex flex-col flex-1 p-6 h-[calc(100%-13rem)]">
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">8 places to celebrate Songkran in Thailand</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                    <span>March 23, 2024</span>
                                    <span>3.7K views</span>
                                </div>
                            </div>
                        </Link>
                    </article>
                    <article className="flex flex-col border-b-[0.25rem] border-b-emerald-700 h-full">
                        <Link to='https://www.booking.com/articles/top-destinations-for-a-girls-trip.en-us.html?label=gen173bo-1DEghhcnRpY2xlcyiCAjjoB0gzWANoFIgBAZgBMbgBF8gBDNgBA-gBAfgBAogCAZgCAqgCA7gCkqSzsQbAAgHSAiQ5ZDVhNDQxOC04NzA3LTQwZWEtOTQxYi0wYzBkYWEzY2Q0ZjfYAgTgAgE' className="h-full">
                            <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://i.ibb.co/9wqydWh/Header-Girls-Trip.jpg" />
                            <div className="flex flex-col flex-1 p-6 h-[calc(100%-13rem)]">
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Top 7 destinations for a girls' trip</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                    <span>February 16, 2024</span>
                                    <span>1.2K views</span>
                                </div>
                            </div>
                        </Link>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Blog;