import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Redirect } from "react-router-dom";

import {getProfile} from "../../_actions/user_actions";

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

    return(
        <div>
            <h1>Profil</h1>
            {user?.profile?.id && (
                <div>
                    {user.profile.username}<br/>
                    {user.profile.name}<br/>
                    {user.profile.surname}<br/>
                    {user.profile.email}<br/>
                    {user.profile.phone}<br/>
                </div>
            )}
        </div>
    )
}


export default DisplayProfile;