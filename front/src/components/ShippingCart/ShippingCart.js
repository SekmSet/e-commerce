import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";


function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.shippingCart);

    return (
        <div>
            <h1> Articles_show </h1>
            {cart.products.map(item => (
                <div key={item.id}>
                    {item.name}<br/>
                </div>
            ))}
        </div>
    )
}

export default Cart;
