import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getArticles } from "../../_actions/articles_actions";
import {addToCart} from "../../_actions/shipping_cart_action";
import { TimelineMax, Power1, Bounce } from "gsap";

const ArticleElement = ({ article }) => {
  const articleRef = useRef(null);
  const history = useHistory();

  const handleMouseEnter = ({ target }) => {
    const tl = new TimelineMax();
    tl.to(
      articleRef.current,
      0.25,
      {
        backgroundColor: "#F8C027",
        filter: "sepia(.5)",
        yPercent: 10,
        ease: Power1.easeOut,
      },
      0,
    );
  };
  const handleMouseLeave = ({ target }) => {
    const tl = new TimelineMax();

    tl.to(articleRef.current, 0.75, {
      backgroundColor: "initial",
      filter: "grayscale(1)",
      yPercent: 0,
      ease: Bounce.easeOut,
    });
  };

  const handleClick = () => {
    history.push(`/articles/${article.id}`);
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
        src={article.images}
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

<<<<<<< HEAD
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
=======
  return (
    <div className="articles-container">
      <h1> Tous les produits </h1>
      <div className="articles">
        {articles.list["hydra:member"]?.map((article) => (
          <ArticleElement key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
>>>>>>> A little view of the articles show page, with some gsap animation
}

export default ArticlesShow;
