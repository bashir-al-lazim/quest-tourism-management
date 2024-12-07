import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const TouristUpdate = () => {

    const navigate = useNavigate()
    const spotData = useLoaderData()

    console.log(spotData)

    { spotData ? toast.success('Tourist spot data fetched successfully') : toast.error('Could not fetch tourist spot data : try RELOAD') }

    const handleFormData = e => {
        e.preventDefault()
        const form = e.target

        const tourist_spot_name = form.spotName.value
        const image = form.imageUrl.value
        const country_name = form.country.value
        const location = form.location.value
        const description = form.description.value
        const cost = parseInt(form.cost.value)
        const seasonality = form.season.value
        const travel_time = form.duration.value
        const visitors_per_year = form.visitorCount.value

        const touristUpdate = { tourist_spot_name, image, country_name, location, description, cost, seasonality, travel_time, visitors_per_year }

        fetch(`https://quest-tourism-server.vercel.app/tourist_spots/spot/${spotData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(touristUpdate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success('Tourist spot successfully updated')
                    setTimeout(() => navigate(`/my_list`), 2000)
                }
                else {
                    toast.error('Error! Could not update tourist spot : try AGAIN')
                }
            })
            .catch(() => toast.error('Error! Could not update tourist spot : try AGAIN'))
    }


    return (
        <section className="p-6 min-h-[calc(100vh-24.001rem)] mb-8 grid place-items-center">
            <form onSubmit={handleFormData} className="container card-body flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-9 rounded-2xl shadow-2xl shadow-emerald-300">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium text-4xl text-emerald-400">Update Tourist Spot</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="form-control col-span-full sm:col-span-3">
                            <label className="label">
                                <span className="label-text">Tourist Spot Name</span>
                            </label>
                            <input type="text" name="spotName" placeholder="spot name" defaultValue={spotData.tourist_spot_name} className="input input-bordered focus-within:border-none focus:outline-emerald-500" required />
                        </div>
                        <div className="form-control col-span-full sm:col-span-3">
                            <label className="label">
                                <span className="label-text">Spot Image URL</span>
                            </label>
                            <input type="url" name="imageUrl" placeholder="image url" defaultValue={spotData.image} className="input input-bordered focus-within:border-none focus:outline-emerald-500" required />
                        </div>
                        <div className="form-control col-span-full sm:col-span-3">
                            <label className="label">
                                <span className="label-text">Country</span>
                            </label>
                            <select name="country" placeholder="country" className="select select-bordered focus-within:border-none focus:outline-emerald-500" required>
                                <option disabled>select country</option>
                                <option id='Bangladesh' value='Bangladesh'>Bangladesh</option>
                                <option id='Thailand' value='Thailand'>Thailand</option>
                                <option id='Indonesia' value='Indonesia'>Indonesia</option>
                                <option id='Malaysia' value='Malaysia'>Malaysia</option>
                                <option id='Vietnam' value='Vietnam'>Vietnam</option>
                                <option id='Cambodia' value='Cambodia'>Cambodia</option>
                            </select>
                        </div>
                        <div className="form-control col-span-full sm:col-span-3">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" name="location" placeholder="location" defaultValue={spotData.location} className="input input-bordered focus-within:border-none focus:outline-emerald-500" required />
                        </div>
                        <div className="form-control col-span-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name="description" cols="30" rows="5" placeholder="describe the spot here..." defaultValue={spotData.description} className="focus:outline-emerald-500 border-[0.0625rem] rounded-lg border-gray-200 p-4 bg-transparent" required></textarea>
                        </div>
                        <div className="form-control col-span-full sm:col-span-3">
                            <label className="label">
                                <span className="label-text">Season</span>
                            </label>
                            <input type="text" name="season" placeholder="season" defaultValue={spotData.seasonality} className="input input-bordered focus-within:border-none focus:outline-emerald-500" required />
                        </div>
                        <div className="form-control col-span-full sm:col-span-3">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>
                            <input type="text" name="duration" placeholder="travel time" defaultValue={spotData.travel_time} className="input input-bordered focus-within:border-none focus:outline-emerald-500" required />
                        </div>
                        <div className="form-control col-span-full sm:col-span-3">
                            <label className="label">
                                <span className="label-text">Average Cost</span>
                            </label>
                            <input type="number" name="cost" placeholder="cost" defaultValue={spotData.cost} className="input input-bordered focus-within:border-none focus:outline-emerald-500" required />
                        </div>
                        <div className="form-control col-span-full sm:col-span-3">
                            <label className="label">
                                <span className="label-text">Visitors Per Year</span>
                            </label>
                            <input type="text" name="visitorCount" placeholder="visitors per year" defaultValue={spotData.visitors_per_year} className="input input-bordered focus-within:border-none focus:outline-emerald-500" required />
                        </div>
                        <div className="form-control mt-3 col-span-full">
                            {console.log(document.getElementById(`${spotData.country_name}`))}

                            <button className="btn text-white text-lg bg-gradient-to-br from-green-400 via-emerald-400 to-lime-300">Update</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default TouristUpdate;