import React, {useEffect} from "react";
import { getShippingCosts } from "../../_actions/shipping_cost_actions";
import {useDispatch, useSelector} from "react-redux";

function ShippingCost() {
    const dispatch = useDispatch();
    const shippingCosts = useSelector((state) => state.shippingCosts);

    useEffect(() => {
        getShippingCosts().then((data) => dispatch(data));
    }, [dispatch]);

    return (
        <div>
            <h1> Shipping Cost </h1>
            {shippingCosts.list?.['hydra:member'].map(shippingCost => (
                <div key={shippingCost.id}>
                    {shippingCost.carrier}<br/>
                    {shippingCost.country}<br/>
                    {shippingCost.prices}<br/>
                    {shippingCost.free}<br/>
                    {shippingCost.weight}<br/>
                    <hr/>
                </div>
            ))}
        </div>
    )
}

export default ShippingCost;
