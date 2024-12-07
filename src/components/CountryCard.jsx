import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Tooltip } from "react-tooltip";

const CountryCard = ({country}) => {
    return (
        <article className="flex flex-col relative rounded-t-2xl">
            <a data-tooltip-id="tooltip-anchor-hide"
                data-tooltip-content={country.country_name}
                data-tooltip-delay-hide={1000}
                data-tooltip-delay-show={1000}>
            <Link to={`/tourists_spot/${country.country_name}`}>
                <img alt="" className="object-cover mb-1 rounded-2xl w-full h-96 dark:bg-gray-500" src={country.image} />
                <h3 className="absolute text-2xl text-white drop-shadow-lg text-shadow font-bold top-2 left-4">{country.country_name}</h3>
                <div className="flex flex-col flex-1 absolute text-white bottom-1 h-24 bg-gradient-to-t from-[#000000a2] w-full rounded-b-2xl">
                    <div className="absolute bottom-3 left-3">
                        <h3 className="flex-1 text-base font-semibold leading-snug">{country.description}</h3>
                    </div>
                </div>
            </Link>
            </a>
            <Tooltip id="tooltip-anchor-hide"/>
        </article>
    );
};

export default CountryCard;

CountryCard.propTypes = {
    country: PropTypes.object.isRequired,
}