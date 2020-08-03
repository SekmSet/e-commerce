import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { articles } from "../../_actions/articles_actions";


function Articles_show() {
    const dispatch = useDispatch();
    /*const art = useSelector((state) => state.articles);*/

    useEffect(() => {
        articles().then((data) => dispatch(data));
    }, [dispatch]);

    /*console.log(getArticles)*/

    return (
        <div className="Articles_show">
            <h1>A R T I C L E S</h1>
           {/* {articles.list?.['hydra:member'].map(articles => ({}));*/}
        </div>
    );
}

export default Articles_show;
