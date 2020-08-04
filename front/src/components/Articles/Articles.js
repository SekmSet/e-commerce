import React, {useEffect} from "react";
import { articles } from "../../_actions/articles_actions";
import {useDispatch, useSelector} from "react-redux";

function ArticlesShow() {
    const dispatch = useDispatch();
    const Articles = useSelector((state) => state.articles);

    useEffect(() => {
        articles().then((data) => dispatch(data));
    }, [dispatch]);

    return (
        <div>
            <h1> Articles_show </h1>
            {Articles.list?.['hydra:member'].map(Article => (
                <div key={Article.id}>
                    {Article.name}<br/>
                    <hr/>
                </div>
            ))}
        </div>
    )
}

export default ArticlesShow;
