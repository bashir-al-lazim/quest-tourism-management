import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const TouristDetails = () => {

    const { _id } = useParams()

    const [spot, setSpot] = useState({})
    useEffect(() => {
        fetch(`https://quest-tourism-server.vercel.app/tourist_spots/spot/${_id}`)
        .then(res => res.json())
        .then(data => {
            setSpot(data)
            toast.success('Tourist spot data successfully fetched')
        })
        .catch(() => toast.error('Could not fetch tourist spot data : try RELOAD'))
    },[_id])

    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16">
            <div className="w-11/12 sm:w-5/6 mx-auto mb-8 sm:mb-14 text-center">
                <h1 className="text-4xl font-bold leading-tight md:text-5xl text-emerald-400">{spot.tourist_spot_name}</h1>
                <hr className="border-[0.25rem] border-emerald-400 w-[20%] mx-auto my-8 rounded-full"/>
            </div>
            <div className="flex flex-col w-full mx-auto overflow-hidden rounded">
                <img src={spot.image} alt="" className="w-full object-cover h-60 sm:h-[30rem] border-b-[0.25rem] border-emerald-400" />
                <div className="p-6 w-max m-8 rounded-t-sm -mt-[2.7rem] bg-emerald-400">
                    <div className="text-lg font-medium sm:text-2xl text-white">
                        <p>{spot.country_name}</p>
                    </div>
                </div>
            </div>
            <div className="py-12 mx-auto sm:px-10 lg:rounded-md flex flex-col md:flex-row">
                <div className="md:w-3/5 border-b-[0.125rem] border-b-emerald-400 md:border-b-0 md:border-r-[0.125rem] md:border-r-emerald-400 pb-6 md:pb-0 md:pr-6 text-justify text-lg">
                    <div>
                        <p>{spot.description}</p>
                    </div>
                </div>
                <div className="space-y-4 md:w-2/5 md:pl-6 pt-6 md:pt-0 text-lg text-medium">
                    <p><span className="font-bold">LOCATION :</span> {spot.location}</p>
                    <p><span className="font-bold">SEASONALITY :</span> {spot.seasonality}</p>
                    <p><span className="font-bold">TRAVEL TIME :</span> {spot.travel_time}</p>
                    <p><span className="font-bold">VISITORS PER YEAR :</span> {spot.visitors_per_year}</p>
                    <p><span className="font-bold">AVERAGE COST :</span> ${spot.cost}</p>
                </div>
            </div>
        </div>
    );
};

export default TouristDetails;