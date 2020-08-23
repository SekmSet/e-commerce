import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { pageTransition } from "../../animations/Transitions";
import { TimelineMax } from "gsap";
import { addToCart } from "../../_actions/shipping_cart_action";

import {
  getArticle,
  getComments,
  postArticleComment,
} from "../../_actions/articles_actions";

function PageArticleShow() {
  const [resum, setResum] = useState("");
  const [note, setNote] = useState("");
  // const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const article = useSelector((state) => state.articles.show);
  const comment = useSelector((state) => state.articles.comment);
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const btnTextRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    getArticle({ id }).then((data) => dispatch(data));
    getComments({ id }).then((data) => dispatch(data));
    pageTransition("in");
  }, [id, dispatch]);

  const handleComment = (e) => {
    e.preventDefault();
    postArticleComment({ resum, note, id }).then((data) => dispatch(data));
  };

  const handleMouseMove = ({ screenY, screenX, clientX }) => {
    // const tl = new TimelineMax();
    // //We must calculate the button position onHover
    // const x =
    //   screenX -
    //   buttonRef.current.offsetLeft -
    //   btnTextRef.current.offsetLeft -
    //   10;
    // //Then apply these position to our GSAP
    // tl.to(btnTextRef.current, 0.15, {
    //   backgroundColor: "#4f659f",
    //   x: x,
    //   ease: "Power5.easeOut",
    // });
    console.log(screenY, btnTextRef.current.offsetTop);
  };

  const handleMouseLeave = () => {
    const tl = new TimelineMax();
    tl.to(btnTextRef.current, 0.2, { x: 0, ease: "Expo.easeOut" });
  };

  const addBasket = (e) => {
    e.preventDefault();
    dispatch(addToCart({ article }));
  };
  return (
    <div className="article-container">
      <h2 className="product-sheet tk-ivymode">- FICHE PRODUIT</h2>
      <div className="images">
        {article.images?.map((image) => (
          <img src={image.url} alt={article.name} key={image.id} />
        ))}
      </div>

      <div className="details">
        <div className="titles">
          <h2 className="name tk-ivymode">{article.name}</h2>
          <span className="color"> {article.color} </span>
          <div><span>{article.price}€</span></div>
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
          onClick={addBasket}
        >
          <div className="btn-text" ref={btnTextRef}>
            Buy
          </div>
        </button>
        <div className="comments">
          <h5 className="tk-linotype-didot">Comments</h5>
          {comment["hydra:member"]?.map((comment) => (
            <div key={comment.id} className="comment">
              <span className="username">{comment.user.username}</span>
              <p>{comment.comment}</p>
              <span>Note : {comment.note}</span>

              <br />
            </div>
          ))}
        </div>
        {user.loginSucces && (
          <form>
            <label htmlFor="story">Résumé :</label>

            <label htmlFor="note">Ma note (1-5):</label>
            <input
              type="number"
              name="note"
              id="note"
              min="1"
              max="5"
              onChange={(e) => setNote(e.target.value)}
            />

            <textarea
              id="comment"
              name="comment"
              rows="5"
              cols="33"
              onChange={(e) => setResum(e.target.value)}
              placeholder={"Dite nous votre avis …"}
            />

            <button onClick={handleComment}>Envoyer</button>
          </form>
        )}
      </div>


    </div>
  );
}

export default PageArticleShow;
