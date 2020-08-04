import React, {useEffect} from "react";
import { articles } from "../../_actions/pageArticle_actions";

import {useDispatch, useSelector} from "react-redux";

function pageArticles() {
    const dispatch = useDispatch();
    const Articles = useSelector((state) => state.articles);

    useEffect(() => {
        articles().then((data) => dispatch(data));
    }, [dispatch]);

    return (
        <div>
            <h1> pageArticles </h1>



        </div>
    )
}

export default pageArticles;