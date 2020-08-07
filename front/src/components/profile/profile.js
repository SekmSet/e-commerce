import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {getProfile} from "../../_actions/user_actions";
import articles_reducer from "../../_reducers/articles_reducer";

function DisplayProfile() {
        const dispatch = useDispatch();
        //hook
        const user = useSelector((state) => state.user);

        useEffect(() => {
            getProfile().then((data) => dispatch(data));
        }, [dispatch]);



    
    return(
        <div>
                <h1> Show the profile  </h1>
                <div key={user.profile.id}>
                        {  user.profile.name}<br/>
                        {user.profile.surname}<br/>
                        {user.profile.email}<br/>
                        <Link to={`/profile/${user.profile.id}`}>après mes identifiant</Link>
                    <hr/>
                </div>



        </div>
    )
}


export default DisplayProfile;