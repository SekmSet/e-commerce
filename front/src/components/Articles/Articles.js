import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line
import { Link, useHistory } from "react-router-dom";
import { getArticles } from "../../_actions/articles_actions";
import { addToCart } from "../../_actions/shipping_cart_action";
import { TimelineMax, Power1, Bounce } from "gsap";
import { pageTransition } from "../../animations/Transitions";

const ArticleElement = ({ article }) => {
  const articleRef = useRef(null);
  const history = useHistory();

  const handleMouseEnter = ({ target }) => {
    const tl = new TimelineMax();
    tl.to(
      articleRef.current,
      0.25,
      {
        backgroundColor: "#010101",
        color: "#ffffff",
        filter: "sepia(.5)",
        yPercent: 10,
        ease: Power1.easeIn,
      },
      0,
    );
  };
  const handleMouseLeave = ({ target }) => {
    const tl = new TimelineMax();

    tl.to(articleRef.current, 0.75, {
      backgroundColor: "initial",
      color: "initial",
      filter: "grayscale(1)",
      yPercent: 0,
      ease: Bounce.easeOut,
    }).set(articleRef.current, { clearProps: "all" });
  };
  useEffect(() => {
    pageTransition("in");
  }, []);

  const handleClick = () => {
    const changePage = () => history.push(`/articles/${article.id}`);
    pageTransition("out", changePage);
  };
  return (
    <div
      className="article-selector"
      ref={articleRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <img
        className="article-image"
        src={article.images[0].url}
        alt={"image" + article.name}
      />
      <div className="details">
        <h5 className="article-name">{article.name}</h5>
        <span className="price"> &euro; {article.price} </span>
      </div>
      {/* <Link to={`/articles/${article.id}`}>Voir</Link> */}
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
      <h1 className="tk-ivymode"> - Tous les produits </h1>
      <div className="articles">
        {articles.list["hydra:member"]?.map((article) => (
          <ArticleElement key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default ArticlesShow;
