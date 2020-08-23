import React, { useEffect } from "react";
import { getShippingCosts } from "../../_actions/shipping_cost_actions";
import { useDispatch, useSelector } from "react-redux";

function ShippingCost() {
    const dispatch = useDispatch();
    const shippingCosts = useSelector((state) => state.shippingCosts);

    useEffect(() => {
        getShippingCosts().then((data) => dispatch(data));
    }, [dispatch]);

    return (
        <div className="shippingCost-view">
            <div className="container-shippingCost">
                <h1> Shipping Cost </h1>
                <div className="shipping-cost">
                    {shippingCosts.list?.['hydra:member'].map(shippingCost => (
                        <div key={shippingCost.id}>
                            <h4>{shippingCost.carrier}</h4><br />
                            <div className="country-cost">Country : {shippingCost.country}</div>
                            <div className="price-cost">Cost : {shippingCost.prices}</div>
                            <div className="free-cost">Free : {shippingCost.free}</div>
                            <div className="weight-cost">Size :{shippingCost.weight}</div>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
            <div className="square"></div>
        </div>
    )
}

export default ShippingCost;
