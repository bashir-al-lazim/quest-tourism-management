import { Outlet } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer autoClose={3000} theme="colored"/>
        </div>
    );
};

export default Root;



//-----proptypes
// import PropTypes from 'prop-types';
// MyComponent.propTypes = {
//     optionalArray: PropTypes.array,
// }

// toast.error('🦄 Wow so easy!')