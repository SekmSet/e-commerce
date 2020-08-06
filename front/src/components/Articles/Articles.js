import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { getArticles } from "../../_actions/articles_actions";
import {addToCart} from "../../_actions/shipping_cart_action";

function ArticlesShow() {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.articles);

    useEffect(() => {
        getArticles().then((data) => dispatch(data));
    }, [dispatch]);

    const handleAddCart = (e, article) => {
        e.preventDefault();
        dispatch(addToCart({article}));
    };

    return (
        <div>
            <h1> Articles_show </h1>
            {articles.list['hydra:member']?.map(article => (
                <div key={article.id}>
                    {article.name}<br/>
                    <Link to={`/articles/${article.id}`}>Voir</Link>
                    <button onClick={e => handleAddCart(e, article)}>
                        Add to cart
                    </button>

                    <hr/>
                </div>
            ))}
        </div>
    )
}

export default ArticlesShow;
