import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {getArticles} from "../../_actions/articles_actions";
function Articles_show() {
    const dispatch = useDispatch();

    const handleArticles = (e) => {
        const [articles, setArticles] = useState("");
        e.preventDefault();
        getArticles().then((data) => dispatch(data));
    };
    return (
        <div className="Articles_show">

                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
        </div>
    );
}

export default Articles_show;
