import CountryCard from "./CountryCard";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const CountryContainer = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://quest-tourism-server.vercel.app/countries')
        .then(res => res.json())
        .then(data => {
            setCountries(data)
            toast.success('Countries data successfully fetched')
        })
        .catch(() => toast.error('Could not fetch countries data : try RELOAD'))
    },[])

    return (
        <section className="py-6 sm:py-12">
            <div className="space-y-2 text-center">
                <h2 className="text-4xl font-bold text-emerald-400 mb-12">Trending Countries in Southeast Asia</h2>
            </div>
            <div className="container p-6 mx-auto space-y-8 border-x-[0.5rem] border-x-emerald-700 ">
                {
                    countries.length === 0 ? <div className="hero h-72"><span className="loading loading-bars loading-lg bg-emerald-400"></span></div> :
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                    {
                        countries.map(country => <CountryCard key={country._id} country={country}></CountryCard>)
                    }
                </div>
                }
            </div>
        </section>
    );
};

export default CountryContainer;