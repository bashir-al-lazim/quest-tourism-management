import { useEffect, useState } from "react";
import TouristCard from "./TouristCard";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';



const TouristContainer = ({ countryCheck }) => {

    const [touristSpots, setTouristSpots] = useState([])
    const { country } = useParams()
    const link = countryCheck ? `https://quest-tourism-server.vercel.app/tourist_spots/country/${country}` : 'https://quest-tourism-server.vercel.app/tourist_spots'

    useEffect(() => {
        fetch(link)
            .then(res => res.json())
            .then(data => {
                { countryCheck ? setTouristSpots(data) : setTouristSpots(data.slice(0, 6)) }
                toast.success('Tourist spots data successfully fetched')
            })
            .catch(() => toast.error('Could not fetch tourist spots data : try RELOAD'))
    }, [countryCheck])


    return (
        <section className={`py-6 mt-5 sm:py-12 dark:text-gray-800 ${countryCheck ? 'min-h-[calc(100vh-23.26rem)]' : ''}`}>
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-4xl font-bold text-emerald-400 mb-12">{countryCheck ? `Tourist Spots in ${country}` : 'Trending Tourist Spots'}</h2>
                </div>
                {
                    touristSpots.length === 0 ? <div className="hero h-72"><span className="loading loading-bars loading-lg bg-emerald-400"></span></div> :
                        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                            {
                                touristSpots.map(spot => <TouristCard key={spot._id} spot={spot} countryCheck={countryCheck}></TouristCard>)
                            }
                        </div>
                }
            </div>
        </section>
    );
};

export default TouristContainer;

TouristContainer.propTypes = {
    countryCheck: PropTypes.bool,
}