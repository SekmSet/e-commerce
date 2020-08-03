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
        <ul>
            <li>
                <Link to="/shippingCost">shippingCost</Link>
            </li>
            <li>
                <Link to="/registry">SignUp</Link>
            </li>
            <li>
                <button onClick={handleDisconnect}>Deco</button>
            </li>
        </ul>
    </header>
  );
}

export default Header;
