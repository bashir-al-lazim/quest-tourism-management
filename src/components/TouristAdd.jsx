import { toast } from "react-toastify";

const TouristAdd = () => {

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
        const user_name = form.name.value
        const user_email = form.email.value

        const touristAdd = { tourist_spot_name, image, country_name, location, description, cost, seasonality, travel_time, visitors_per_year, user_name, user_email }

        fetch('https://quest-tourism-server.vercel.app/tourist_spots', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(touristAdd)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Tourist spot successfully added!')
                    form.reset()
                }
                else {
                    toast.error('Error! Could not add tourist spot : try AGAIN')
                }
            })
            .catch(() => toast.error('Error! Could not add tourist spot : try AGAIN'))
    }

    return (
        <section className="p-6 min-h-[calc(100vh-24.001rem)] mb-8 grid place-items-center">
            <form onSubmit={handleFormData} className="container card-body flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-9 rounded-2xl shadow-2xl shadow-emerald-300">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium text-4xl text-emerald-400">Add Tourist Spot</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="form-control col-span-full sm:col-span-3">
                            <label className="label">
                                <span className="label-text">Tourist Spot Name</span>
                            </label>
                            <input type="text" name="spotName" placeholder="spot name" className="input input-bordered focus-within:border-none focus:outline-emerald-500" required />
                        </div>
                        <div className="form-control col-span-full sm:col-span-3">
                            <label className="label">
                                <span className="label-text">Spot Image URL</span>
                            </label>
                            <input type="url" name="imageUrl" placeholder="image url" className="input input-bordered focus-within:border-none focus:outline-emerald-500" required />
                        </div>
                        <div className="form-control col-span-full sm:col-span-3">
                            <label className="label">
                                <span className="label-text">Country</span>
                            </label>
                            <select name="country" placeholder="country" className="select select-bordered focus-within:border-none focus:outline-emerald-500" required>
                                <option disabled selected>select country</option>
                                <option value='Bangladesh'>Bangladesh</option>
                                <option value='Thailand'>Thailand</option>
                                <option value='Indonesia'>Indonesia</option>
                                <option value='Malaysia'>Malaysia</option>
                                <option value='Vietnam'>Vietnam</option>
                                <option value='Cambodia'>Cambodia</option>
                            </select>
                        </div>
                        <div className="form-control col-span-full sm:col-span-3">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" name="location" placeholder="location" className="input input-bordered focus-within:border-none focus:outline-emerald-500" required />
                        </div>
                        <div className="form-control col-span-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name="description" cols="30" rows="5" placeholder="describe the spot here..." className="focus:outline-emerald-500 border-[0.0625rem] rounded-lg border-gray-200 p-4 bg-transparent" required></textarea>
                        </div>
                        <div className="form-control col-span-full sm:col-span-3">
                            <label className="label">
                                <span className="label-text">Season</span>
                            </label>
                            <input type="text" name="season" placeholder="season" className="input input-bordered focus-within:border-none focus:outline-emerald-500" required />
                        </div>
                        <div className="form-control col-span-full sm:col-span-3">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>
                            <input type="text" name="duration" placeholder="travel time" className="input input-bordered focus-within:border-none focus:outline-emerald-500" required />
                        </div>
                        <div className="form-control col-span-full sm:col-span-3">
                            <label className="label">
                                <span className="label-text">Average Cost</span>
                            </label>
                            <input type="number" name="cost" placeholder="cost" className="input input-bordered focus-within:border-none focus:outline-emerald-500" required />
                        </div>
                        <div className="form-control col-span-full sm:col-span-3">
                            <label className="label">
                                <span className="label-text">Visitors Per Year</span>
                            </label>
                            <input type="text" name="visitorCount" placeholder="visitors per year" className="input input-bordered focus-within:border-none focus:outline-emerald-500" required />
                        </div>
                        <div className="form-control col-span-full sm:col-span-3">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email" name="email" placeholder="user email" className="input input-bordered focus-within:border-none focus:outline-emerald-500" required />
                        </div>
                        <div className="form-control col-span-full sm:col-span-3">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name="name" placeholder="user name" className="input input-bordered focus-within:border-none focus:outline-emerald-500" required />
                        </div>
                        <div className="form-control mt-3 col-span-full">
                            <button className="btn text-white text-lg bg-gradient-to-br from-green-400 via-emerald-400 to-lime-300">Add</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default TouristAdd;