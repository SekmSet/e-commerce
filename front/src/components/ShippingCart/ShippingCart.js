import React from "react";
import {subtractQuantity, removeFromCart} from "../../_actions/shipping_cart_action";
import {useDispatch, useSelector} from "react-redux";


function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.shippingCart);

    const handleSubtractQuantity = (e, article) => {
        e.preventDefault();
        dispatch(subtractQuantity({article}));
    };
    const handleEmpty = (e, article) => {

        dispatch(removeFromCart({article}));
    };

    return (
        <div>
            <h1> Panier </h1>
            <button onClick={e => handleEmpty()}>
                Vider panier
            </button>
            {cart.products.map(item => (

                <div key={item.id}>
                    |Article-name : {item.name} | Descri-name : {item.description}  | Quantité-name : {item.quantity}| <br/><br/>
                    <button onClick={e => handleSubtractQuantity(e, item)}>
                    Remove one item
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Cart;
