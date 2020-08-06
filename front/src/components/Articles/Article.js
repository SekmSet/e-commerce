import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getArticle } from "../../_actions/articles_actions";
import { pageTransition } from "../../animations/Transitions";
import { TimelineMax } from "gsap";

function PageArticleShow() {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.articles.show);
  const { id } = useParams();
  const btnTextRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    getArticle({ id }).then((data) => dispatch(data));
    pageTransition("in");
  }, [id, dispatch]);

  const handleMouseMove = ({ screenY, screenX, clientX }) => {
    const tl = new TimelineMax();
    //We must calculate the button position onHover
    const x =
      screenX -
      buttonRef.current.offsetLeft -
      btnTextRef.current.offsetLeft -
      10;
    //Then apply these position to our GSAP
    tl.to(btnTextRef.current, 0.15, {
      backgroundColor: "#4f659f",
      x: x,
      ease: "Power5.easeOut",
    });
    console.log(screenY, btnTextRef.current.offsetTop);
  };

  const handleMouseLeave = () => {
    const tl = new TimelineMax();
    tl.to(btnTextRef.current, 0.2, { x: 0, ease: "Expo.easeOut" });
  };
  return (
    <div className="article-container">
      <div className="images">
        <img src={article.images} alt={article.name} />
      </div>
      <div className="details">
        <div className="titles">
          <h2 className="name tk-ivymode">{article.name}</h2>
          <span className="color"> {article.color} </span>
        </div>
        <p className="description">{article.description}</p>
        <p className="description">{article.description}</p>
        <br />
        {/* <div className="sizes">
          <h5>SIZES</h5>
          <button className="size">S</button>
          <button className="size">M</button>
          <button className="size">L</button>
          <button className="size">XL</button>
        </div> */}
        <button
          className="add-to-cart"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={buttonRef}
        >
          <div className="btn-text" ref={btnTextRef}>
            Buy
          </div>
        </button>
      </div>
    </div>
  );
}

export default PageArticleShow;
