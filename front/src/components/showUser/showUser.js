import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {link} from "react-router-dom";
import { getShowUser } from "../../_actions/show_user_actions";

function DisplayShowUser() {
        const dispatch = useDispatch();

        useEffect(() => {
            getShowUser().then((data) => dispatch(data));
        }, [dispatch]);



    
    return(
        <div>
                <h1> L'affichage d'user  </h1>


        </div>
    )
}


export default DisplayShowUser;