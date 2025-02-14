import React from "react";
import { subtractQuantity, removeFromCart } from "../../_actions/shipping_cart_action";
import { useDispatch, useSelector } from "react-redux";
import {toast} from "react-toastify";


function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.shippingCart);

    let shippingCoast = 0;
    if(cart.products.length > 0){
        shippingCoast = Math.floor(Math.random() * Math.floor(10))+1;
    }

    const handleSubtractQuantity = (e, article) => {
        e.preventDefault();
        toast(`🦄 1 ${article.name} is delete` , {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        dispatch(subtractQuantity({ article }));
    };
    const handleEmpty = (e, article) => {
        toast("🦄 Your cart is now empty" , {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        dispatch(removeFromCart({ article }));
    };

    let results = 0;
    cart.products.forEach(e => {
        results += e.quantity * e.price
    })
    return (
        <div className="basket-view">
            <div className="square"></div>
            <div className="basket">
                <h1> PANIER </h1>
                <div className="total-price">Total TTC : <b>{results + shippingCoast}€</b></div>
                <div className="">Total price : <b>{results}€</b></div>
                <div className="">Delivery price : <b>{shippingCoast}€</b></div>

                <hr/>
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
                                <div className="quantity-basket">  Prix de l'article : {item.price*item.quantity} </div><br /><br />
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </div>
    )
}

export default Cart;
