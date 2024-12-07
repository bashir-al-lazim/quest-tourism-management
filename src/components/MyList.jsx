import { useEffect, useState } from "react";
import MyListRow from "./MyListRow";
import { toast } from "react-toastify";
import auth from "../firebase/firebase.config";

const MyList = () => {

    const [mySpots, setMySpots] = useState([])

    useEffect(() => {
        fetch(`https://quest-tourism-server.vercel.app/tourist_spots/${auth.currentUser.email}`)
            .then(res => res.json())
            .then(data => {
                setMySpots(data)
                toast.success('Your added tourist spots data successfully fetched')
            })
            .catch(() => toast.error('Could not fetch your added tourist spots data : try RELOAD'))
    }, [])

    return (
        <div className="container p-2 mx-auto my-6 sm:p-4 min-h-[calc(100vh-26.00001rem)] mb-10">
            <h2 className="mb-6 text-4xl font-semibold leading-tight text-emerald-400">Tourist Spots You Have Added</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-24" />
                    </colgroup>
                    <thead className="bg-emerald-700 text-white">
                        <tr className="text-left">
                            <th className="p-3">Spot Name</th>
                            <th className="p-3">Country</th>
                            <th className="p-3">Travel Time</th>
                            <th className="p-3">Average Cost</th>
                            <th className="p-3 text-right"></th>
                            <th className="p-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mySpots.map(spot => <MyListRow key={spot._id} spot={spot} setMySpots={setMySpots} mySpots={mySpots}></MyListRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;