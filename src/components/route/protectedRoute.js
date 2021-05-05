import React, {useContext} from 'react';
import {
    Redirect,
    Route
} from "react-router-dom";
import {AuthContext} from "../../App";
import {Slide, toast} from "react-toastify";

function ProtectedRoute({children, ...rest}) {
    const context = useContext(AuthContext);
    console.log(context.isConnected)
    const notify = () => toast.error("Page inconnue ! Essayer de vous connecter pour y accéder", {transition: Slide})
    const f = (location) => {
        notify()
        return  <Redirect
            to={{
                pathname: "/unauthorized",
                state: { from: location }
            }}
        />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                context.isConnected ? (
                    children
                ) : (
                    f(location)
                )
            }
        />
    );
}

export default ProtectedRoute;