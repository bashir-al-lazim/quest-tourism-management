import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import { toast } from "react-toastify";


const MyListRow = ({ spot, setMySpots, mySpots }) => {


    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://quest-tourism-server.vercel.app/tourist_spots/spot/${spot._id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
            
                            });
                            const remaining = mySpots.filter(findSpot => findSpot._id !== _id)
                            setMySpots(remaining)
                        }
                        else{
                            toast.error('Error! Could not delete tourist spot : try AGAIN')
                        }
                    })
            }
        });
    }

    return (
        <tr className="border-b border-opacity-20 text-white bg-emerald-950">
            <td className="p-3">
                <p>{spot.tourist_spot_name}</p>
            </td>
            <td className="p-3">
                <p>{spot.country_name}</p>
            </td>
            <td className="p-3">
                <p>{spot.travel_time}</p>
            </td>
            <td className="p-3">
                <p>${spot.cost}</p>
            </td>
            <td className="p-3 text-right">
                <Link to={`/update_tourist_spot/${spot._id}`} className="px-3 py-1 font-semibold rounded-md text-white bg-gradient-to-br from-green-400 via-emerald-400 to-lime-300 hover:text-emerald-800 hover:cursor-pointer">
                    <span>Update</span>
                </Link>
            </td>
            <td onClick={() => handleDelete(spot._id)} className="p-3 text-left">
                <span className="px-3 py-1 font-semibold rounded-md text-white bg-gradient-to-br bg-red-600 hover:text-red-900 hover:cursor-pointer">
                    <span>Delete</span>
                </span>
            </td>
        </tr>
    );
};

export default MyListRow;

MyListRow.propTypes = {
    spot: PropTypes.object.isRequired,
    setMySpots: PropTypes.func.isRequired,
    mySpots: PropTypes.array.isRequired,
}