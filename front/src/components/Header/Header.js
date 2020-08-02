import React from "react";
import { logoutUserTest } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const handleDisconnect = (e) => {
    e.preventDefault();
    dispatch(logoutUserTest());
  };
  return (
    <header>
      <Link to="/shippingCost">shippingCost</Link>
      <button onClick={handleDisconnect}>Deco</button>
    </header>
  );
}

export default Header;
