import React from "react";
import { logoutUserTest } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const handleDisconnect = (e) => {
    e.preventDefault();
    dispatch(logoutUserTest());
  };
  return (
    <header>
      <button onClick={handleDisconnect}>Deco</button>
    </header>
  );
}

export default Header;
