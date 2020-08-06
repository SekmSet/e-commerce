// import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { TimelineMax } from "gsap";

import {
  getArticle,
  getComments,
  postArticleComment,
} from "../../_actions/articles_actions";

function PageArticleShow() {
  const [resum, setResum] = useState("");
  const [note, setNote] = useState("");
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
  }, [id, dispatch]);

  const handleComment = (e) => {
    e.preventDefault();
    postArticleComment({ resum, note, id }).then((data) => dispatch(data));
  };

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
        {article.images?.map((image) => (
          <img src={image.url} alt={article.name} key={image.id} />
        ))}
      </div>

      {comment["hydra:member"]?.map((comment) => (
        <div key={comment.id}>
          {comment.user.username} - {comment.comment} - {comment.note}
          <br />
        </div>
      ))}

      <div className="details">
        <div className="titles">
          <h2 className="name">{article.name}</h2>
          <span className="color"> {article.color} </span>
        </div>
        <p className="description">{article.description}</p>
        <p className="description">{article.description}</p>
        <br />
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
  );
}

export default PageArticleShow;
