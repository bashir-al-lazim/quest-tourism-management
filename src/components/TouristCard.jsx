import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tooltip';

const TouristCard = ({ spot, countryCheck }) => {


    return (
        <article className={`flex flex-col ${countryCheck ? '' : 'border-b-[0.5rem] border-b-emerald-700'} rounded-t-2xl`}>
            <a data-tooltip-id="tooltip-anchor-hide"
                data-tooltip-content={spot.tourist_spot_name}
                data-tooltip-delay-hide={1000}
                data-tooltip-delay-show={1000}>
                <div className="h-full flex flex-col">
                    <div className="relative">
                        <img alt={spot.tourist_spot_name} className={`object-cover ${countryCheck ? 'rounded-t-2xl' : 'mb-1 rounded-2xl'} w-full h-72 bg-lime-100`} src={spot.image} />
                        <h3 className="absolute bg-emerald-700 px-2 text-base text-white font-bold top-3 right-3 rounded-md">{spot.country_name}</h3>
                        <div className={`flex flex-col flex-1 absolute text-white h-28 w-full ${countryCheck ? 'bg-gradient-to-t from-emerald-400 bottom-0' : 'bg-gradient-to-t from-[#000000a2] rounded-b-2xl bottom-1'}`}>
                            <div className="absolute bottom-3 flex gap-2 w-full justify-between px-3">
                                <div>
                                    <h3 className="flex-1 text-xl font-semibold leading-snug">{spot.tourist_spot_name}</h3>
                                    <p className="text-sm">{spot.location}</p>
                                </div>
                                {countryCheck || <Link to={`/tourist_spot_details/${spot._id}`} className="min-w-max px-3 pt-2 pb-[0.4rem] rounded-lg text-sm text-white h-fit bg-gradient-to-br from-green-500 via-emerald-400 to-lime-300 border-none self-end">View Details</Link>}
                            </div>
                        </div>
                    </div>
                    {
                        countryCheck && <div className="bg-emerald-400 rounded-b-2xl text-white px-3 pb-3 flex flex-col flex-1 justify-between">
                            <div>
                                <p className="py-1 px-3 mb-2 mt-1 border-[0.0625rem] border-white max-w-max font-semibold text-[0.7rem] rounded-full">Seasonality: {spot.seasonality}</p>
                                <p className="mb-4 text-sm">{spot.description.split(' ').slice(0, 20).join(' ')}...</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-[1.6rem] font-semibold">${spot.cost}</p>
                                <Link to={`/tourist_spot_details/${spot._id}`} className="min-w-max px-4 pt-3 pb-2 rounded-lg bg-white text-sm text-white bg-gradient-to-br from-green-500 via-emerald-400 to-lime-400 border-none drop-shadow-2xl shadow-xl">View Details</Link>
                            </div>
                        </div>
                    }
                </div>
            </a>
            <Tooltip id="tooltip-anchor-hide" />
        </article>
    );
};

export default TouristCard;

TouristCard.propTypes = {
    spot: PropTypes.object.isRequired,
    countryCheck: PropTypes.bool,
}