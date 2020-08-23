import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { getProfile } from "../../_actions/user_actions";

function DisplayProfile() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        getProfile().then((data) => dispatch(data));
    }, [dispatch]);

    if (!user.loginSucces) {
        return <Redirect
            to={{
                pathname: "/registry",
            }}
        />
    }

    return (
        <div className="profile-view">
            <h1>Profil</h1>
            <div className="container">
                <div className="container-profile">
                    {user?.profile?.id && (
                        <div>
                            <h2>Hello  {user.profile.username} !</h2><br />
                            {user.profile.name}<br />
                            {user.profile.surname}<br />
                            {user.profile.email}<br />
                            {user.profile.phone}<br />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


export default DisplayProfile;