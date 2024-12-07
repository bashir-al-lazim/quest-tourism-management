import { Link } from "react-router-dom";

const ErrorPage = () => {

    document.getElementById('title').innerText = '404 PAGE NOT FOUND'

    return (
        <div className="text-center min-h-screen grid place-items-center">
            <div>
                <h className="text-5xl font-bold text-red-500">404</h>
                <p className="text-2xl font-medium text-red-500 my-5">PAGE NOT FOUND</p>
                <Link to='/' className="btn btn-error text-lg text-white">Go to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;