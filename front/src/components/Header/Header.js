import React from "react";
import { logoutUserTest } from "../../_actions/user_actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../images/logo-header.png";
function Header() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const handleDisconnect = (e) => {
        e.preventDefault();
        dispatch(logoutUserTest());
    };

    return (
        <header>

            <div className="logo-block">
                <img className="logo" src={Logo} alt="Logo Les Pains Durs" />
            </div>

            <ul>
                <li>
                    <Link to="/articles">Shop</Link>
                </li>
                <li>
                    <Link to="/articles/search">Rechercher</Link>
                </li>
                <li>
                    <Link to="/shippingCost">shipping Cost</Link>
                </li>
                <li>
                    <Link to="/cart">cart</Link>
                </li>
                {!user.loginSucces && (
                    <li>
                        <Link to="/registry">SignUp</Link>
                    </li>
                )}
                {user.loginSucces && (
                    <li>
                        <button onClick={handleDisconnect}>Deco</button>
                    </li>
                )}
            </ul>
        </header>
    );
}

export default Header;
