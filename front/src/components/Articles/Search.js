import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterArticles } from "../../_actions/articles_actions";

function Search() {
    const dispatch = useDispatch();
    const filteredList = useSelector((state) => state.articles.filteredList);

    // useEffect(() => {
    //     filterArticles().then((data) => dispatch(data));
    // }, [dispatch]);


    const searchArticle = (name) => {
        filterArticles(name).then(data => dispatch(data))
    }

    return (
        <div>
            <label>
                Filter Name
                {/*<select className="form-filter"*/}
                {/*        >*/}
                {/*        <option value={Articles.name}>ALL</option>*/}
                {/*</select>*/}
                <input type="text" onChange={(e) => searchArticle(e.target.value)} />
            </label>
            <h1> Articles_show </h1>
            {filteredList['hydra:member']?.map(Article => (
                <div key={Article.id}>
                    {Article.name}<br />
                    <a href={`/articles/${Article.id}`}>Voir</a>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default Search