import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Root from "../layout/Root";
import Login from "../components/Login";
import Register from "../components/Register";
import TouristDetails from "../components/TouristDetails";
import TouristAdd from "../components/TouristAdd";
import TouristUpdate from "../components/TouristUpdate";
import MyList from "../components/MyList";
import AllTouristsSpot from "../components/AllTouristsSpot";
import PrivateRoute from "./PrivateRoute";
import TouristContainer from "../components/TouristContainer";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: '/login',
          element: <Login/>,
        },
        {
          path: '/register',
          element: <Register/>,
        },
        {
          path: '/tourist_spot_details/:_id',
          element: <PrivateRoute><TouristDetails/></PrivateRoute>,
        },
        {
          path: '/add_tourist_spot',
          element: <PrivateRoute><TouristAdd/></PrivateRoute>,
        },
        {
          path: '/update_tourist_spot/:_id',
          element: <PrivateRoute><TouristUpdate/></PrivateRoute>,
          loader: ({ params }) => fetch(`https://quest-tourism-server.vercel.app/tourist_spots/spot/${params._id}`),
        },
        {
          path: '/my_list',
          element: <PrivateRoute><MyList/></PrivateRoute>,
        },
        {
          path: '/all_tourists_spot',
          element: <AllTouristsSpot/>,
        },
        {
          path: '/tourists_spot/:country',
          element: <TouristContainer countryCheck={true}/>,
          // loader: ({ params }) => fetch(`https://quest-tourism-server.vercel.app/tourist_spots/${params.country}`)
        },
      ],
    },
  ]);

export default router;