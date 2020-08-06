import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getArticles } from "../../_actions/articles_actions";

const ArticleElement = ({ article }) => {
  return (
    <div className="article-selector">
      <img
        className="article-image"
        src={article.images}
        alt={"image" + article.name}
      />
      <div className="details">
        <h5 className="article-name">{article.name}</h5>
        <span className="price"> &euro; {article.price} </span>
      </div>
      <Link to={`/articles/${article.id}`}>Voir</Link>
    </div>
  );
};

function ArticlesShow() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);

  useEffect(() => {
    getArticles().then((data) => dispatch(data));
  }, [dispatch]);

  return (
    <div className="articles-container">
      <h1> Articles_show </h1>
      {articles.list["hydra:member"]?.map((article) => (
        <ArticleElement key={article.id} article={article} />
      ))}
    </div>
  );
}

export default ArticlesShow;
