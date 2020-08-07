import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import { getArticle, getComments, postArticleComment } from "../../_actions/articles_actions";

function PageArticleShow() {
    const dispatch = useDispatch();

    const [resum, setResum] = useState("");
    const [note, setNote] = useState("");

    const article = useSelector((state) => state.articles.show);
    const comment = useSelector((state) => state.articles.comment);
    const user = useSelector((state) => state.user);

    const { id } = useParams();

    useEffect(() => {
        getArticle({id}).then((data) => dispatch(data));
        getComments({id}).then((data) => dispatch(data));
    }, [id, dispatch]);

    const handleComment = (e) =>{
        e.preventDefault();
        postArticleComment({resum, note, id}).then((data) => dispatch(data));
    }

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
            {article.images?.map((image) => (
                <img key={image.id} src={image.url} alt={image.url} />
            ))}
            <hr/>
            {comment['hydra:member']?.map(comment => (
                <div key={comment.id}>
                    {comment.user.username} - {comment.comment} - {comment.note}<br />
                </div>
            ))}
            <br/>

            {user.loginSucces &&
                <form>
                    <label htmlFor="story">Résumé :</label>

                    <label htmlFor="note">Ma note (1-5):</label>
                    <input type="number"
                           name="note"
                           id="note"
                           min="1"
                           max="5"
                           onChange={(e) => setNote(e.target.value)}
                    />

                    <textarea id="comment"
                              name="comment"
                              rows="5"
                              cols="33"
                              onChange={(e) => setResum(e.target.value)}
                              placeholder={"Dite nous votre avis …"}
                    />

                    <button onClick={handleComment}>
                        Envoyer
                    </button>
                </form>
            }
        </div>
    )
}

export default PageArticleShow;
