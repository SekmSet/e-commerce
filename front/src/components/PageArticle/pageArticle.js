import React, {useEffect} from "react";
import { pageArticle } from "../../_actions/pageArticle_actions";
import {useDispatch, useSelector} from "react-redux";

function PageArticleShow(props) {
    const dispatch = useDispatch();
    const PageArticle = useSelector((state) => state.article);
    //const idArticle = props.id;
    console.log('test');

    console.log(props.match.params.id);

    useEffect(() => {
        pageArticle().then((data) => dispatch(data));
    }, [dispatch]);

    return (
        <div>
            <h1> Id Article </h1>

        </div>
    )
}

export default PageArticleShow;