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
        <div className="search-view">
            <h1> Search Article </h1>
            <div className="search col-sm-12 col-md-8 col-lg-6">
                <div className="container">
                    <div className="row justify-content-center container-input">

                        <label> Search by Name </label>
                        <input className="search-input" type="text" onChange={(e) => searchArticle(e.target.value)} />

                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center all-resultSearch">
                        <div>
                            {filteredList['hydra:member']?.map(Article => (
                                <div key={Article.id}>
                                    <h4 className="name-search">{Article.name} - {Article.price}€</h4><br />
                                    <a className="link-search" href={`/articles/${Article.id}`}>Voir</a>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="square"></div>

        </div>
    )
}

export default Search