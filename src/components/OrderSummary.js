import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrderSummary() {
    const navigateBack = useNavigate()
    return (
        <>
            <div>Order Successful</div>
            <button onClick={() => navigateBack(-1)}>Go back</button>
        </>

    )
}

export default OrderSummary