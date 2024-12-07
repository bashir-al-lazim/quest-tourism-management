import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AllTouristsSpotCard from "./AllTouristsSpotCard";

const AllTouristsSpot = () => {

    const [touristSpots, setTouristSpots] = useState([])
    const [showAll, setShowAll] = useState(false)
    const [select, setSelect] = useState('')

    useEffect(() => {

        fetch(`https://quest-tourism-server.vercel.app/tourist_spots${select}`)
            .then(res => res.json())
            .then(data => {
                { showAll ? setTouristSpots(data) : setTouristSpots(data.slice(0, 6)) }
                toast.success('Tourist spots data successfully fetched')
                console.log(touristSpots)
            })
            .catch(() => toast.error('Could not fetch tourist spots data : try RELOAD'))
    }, [showAll, select])

    return (
        <div className="grid my-14">
            <div className="dropdown place-self-center max-w-max mb-8">
                <div tabIndex={0} role="button" className="btn hover:bg-emerald-600 border-none hover:shadow-none text-lg text-white font-semibold flex bg-emerald-400 gap-3 drop-shadow-xl"><span className="pb-1">Sort by</span><div><img src="images/arrow.svg" alt="dropdown icon" className="w-7" /></div></div>
                <ul id="select" tabIndex={0} className="dropdown-content z-[1] menu p-2 -left-9 bg-transparent rounded-box text-base font-medium w-52 text-center">
                    <li onClick={() => setSelect('/cost_descending/true')} className={`drop-shadow bg-base-100 border-b-[0.2rem] ${select === '/cost_descending/true' ? 'text-emerald-500 border-b-emerald-500' : 'border-b-[#898888]'}  hover:text-emerald-500 rounded-xl mx-auto`}><a className="hover:bg-white pb-[0.125rem] w-full">Cost High to Low</a></li>
                    <li onClick={() => setSelect('/cost_ascending/true')} className={`drop-shadow bg-base-100 border-b-[0.255rem] ${select === '/cost_ascending/true' ? 'text-emerald-500 border-b-emerald-500' : 'border-b-[#898888]'}  hover:text-emerald-500 rounded-xl mx-auto mt-2`}><a className="hover:bg-white pb-[0.125rem] w-full">Cost Low to High</a></li>
                </ul>
            </div>
            <section className="grid">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 mb-12">
                    {
                        touristSpots.length === 0 ? <div className="hero h-72"><span className="loading loading-bars loading-lg bg-emerald-400"></span></div> :
                        <div className="grid justify-center grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                touristSpots.map(spot => <AllTouristsSpotCard key={spot._id} spot={spot} />)
                            }
                        </div>
                    }
                </div>
                <button className="max-w-max btn bg-gradient-to-br from-green-500 via-emerald-400 to-lime-300 border-none text-white font-semibold text-lg place-self-center" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show Less' : 'Show All'}</button>
            </section>
        </div>
    );
};

export default AllTouristsSpot;