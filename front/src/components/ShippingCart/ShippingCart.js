import React from "react";
import { subtractQuantity, removeFromCart } from "../../_actions/shipping_cart_action";
import { useDispatch, useSelector } from "react-redux";


function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.shippingCart);

    const handleSubtractQuantity = (e, article) => {
        e.preventDefault();
        dispatch(subtractQuantity({ article }));
    };
    const handleEmpty = (e, article) => {
        dispatch(removeFromCart({ article }));
    };

    let result = 0;
    let results = 0;
    cart.products.forEach(e => {
        results += e.quantity * e.price
    })
    return (
        <div className="basket-view">
            <div className="square"></div>
            <div className="basket">
                <h1> PANIER </h1>
                <button onClick={e => handleEmpty()} className="btn btn-warning">
                    Vider panier
                </button>
                <div className="basket-description">
                    {cart.products.map(item => (
                        <div className="container" key={item.id}>
                            <div className="one-basket">
                                <button onClick={e => handleSubtractQuantity(e, item)} className="btn btn-danger">X</button>
                                <h4 className="name-basket"> {item.name} </h4>
                                <div className="descrip-basket"> {item.description}  </div>
                                <div className="quantity-basket"> Quantité : {item.quantity} </div><br /><br />
                                <div className="quantity-basket">  Prix de l'article : {result = [item.price*item.quantity]} </div><br /><br />
                            </div>
                        </div>
                    ))}
                </div>

                <div>Total price : {results}</div>

            </div>
        </div>
    )
}

export default Cart;
