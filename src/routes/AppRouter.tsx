import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import {getUser } from "../redux/actions/userActions"
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";


const AppRouter: React.FC = (props:any) => {

  const { user, getUser } = props;

    useEffect(() => {
        getUser()
    });

  return (
    <BrowserRouter>

        {user && user.authenticated ?
            <PrivateRoutes/>
            :
            <PublicRoutes/>
        }


    </BrowserRouter>
  );
};

const mapStateToProps = (state: any) => ({
    user: state.user
   });
const mapActionsToProps = {
    getUser
};
export default connect(mapStateToProps, mapActionsToProps)(AppRouter)