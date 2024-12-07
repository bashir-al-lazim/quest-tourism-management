import Banner from "./Banner";
import Blog from "./Blog";
import CountryContainer from "./CountryContainer";
import Subscribe from "./Subscribe";
import TouristContainer from "./TouristContainer";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner/>
            <TouristContainer/>
            <CountryContainer/>
            <Blog/>
            <Subscribe/>
        </div>
    );
};

export default Home;