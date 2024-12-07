import { toast } from "react-toastify";

const Subscribe = () => {

    const handleSubscribe = e => {
        e.preventDefault()
        e.target.reset()
        toast.success('Subscribed Successfully!')
    }

    return (
        <section className="w-full bg-emerald-700 grid place-items-center text-white pt-10 pb-14 px-4">
            <h1 className="text-3xl text-center">Travel Hacks & Secret Destinations</h1>
            <p className="my-4 text-center">Skip the travel research rabbit hole. Get expert advice, hidden gems, and insider deals delivered straight to your inbox. Subscribe now!</p>
            <form className="flex gap-2 mt-3" onSubmit={handleSubscribe}>
                <label className="input input-bordered flex items-center gap-2 text-black sm:w-80">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-6 h-6 opacity-70 fill-emerald-600"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input id="subscribe" type="email" placeholder="Email" required/>
                </label>
                <button className="max-w-max px-5 py-2 rounded-lg text-lg text-white bg-gradient-to-br from-green-500 via-emerald-400 to-lime-300 border-none">Subscribe</button>
            </form>
        </section>
    );
};

export default Subscribe;