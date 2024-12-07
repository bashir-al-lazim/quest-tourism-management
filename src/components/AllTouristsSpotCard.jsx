import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllTouristsSpotCard = ({ spot }) => {
    return (
        <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline shadow-lg shadow-emerald-300 border-b-[0.25rem] border-l-[0.25rem] border-emerald-400 rounded-bl-3xl">
            <div className='h-full'>
                <img role="presentation" className="object-cover w-full rounded-se-xl h-44" src={spot.image} />
                <div className='h-[calc(100%-11rem)]'>
                    <div className="pt-5 grid gap-5 justify-between h-full">
                        <div className='px-6'>
                            <h3 className="text-2xl font-semibold">{spot.tourist_spot_name}</h3>
                            <span className="text-sm">{spot.location}</span>
                            <p className='text-base mt-3'>{spot.description.split(' ').slice(0, 15).join(' ')}...</p>
                        </div>
                        <div className='self-end'>
                            <ul className='flex flex-wrap text-sm font-bold gap-3 text-white px-6'>
                                <li className='bg-cyan-400 px-3 py-[0.0925rem] border-[0.0625rem] border-white rounded-full'>{spot.seasonality}</li>
                                <li className='bg-emerald-400 px-3 py-[0.0925rem] border-[0.0625rem] border-white rounded-full'>{spot.travel_time}</li>
                                <li className='bg-red-400 px-3 py-[0.0925rem] border-[0.0625rem] border-white rounded-full'>{spot.visitors_per_year}/year</li>
                            </ul>
                            <div className='flex justify-between items-center mt-7'>
                                <p className='pl-6 text-3xl font-semibold'>${spot.cost}</p>
                                <Link to={`/tourist_spot_details/${spot._id}`} className="max-w-max px-4 pt-3 pb-2 h-fit rounded-ss-xl text-base font-semibold text-white bg-gradient-to-br from-green-400 via-emerald-400 to-lime-400 border-none drop-shadow-2xl shadow-xl self-end justify-self-end">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTouristsSpotCard;

AllTouristsSpotCard.propTypes = {
    spot: PropTypes.object.isRequired,
    countryCheck: PropTypes.bool,
}