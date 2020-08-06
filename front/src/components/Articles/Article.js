import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import { getArticle, getComments } from "../../_actions/articles_actions";

function PageArticleShow() {
    const dispatch = useDispatch();
    const article = useSelector((state) => state.articles.show);
    const { id } = useParams();
    const comment = useSelector((state) => state.articles.comment);

    useEffect(() => {
        getArticle({id}).then((data) => dispatch(data));
        getComments({id}).then((data) => dispatch(data));
    }, [id, dispatch]);

    return (
        <div>
            <h1> Id Article </h1>

            {article.name}
            <br/>
            {article.description}
            <br/>
            {article.color}
            <br/>
            {article.price}
            <br/>
            <img src={article.images} alt={article.name} />
            <hr/>
            {comment['hydra:member']?.map(comment => (
                <div key={comment.id}>
                    {comment.user.username} - {comment.comment} - {comment.note}<br />
                </div>
            ))}
        </div>
    )
}

export default PageArticleShow;
