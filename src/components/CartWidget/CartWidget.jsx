import React, { useContext } from 'react';
import cartLogo from '../../assets/images/carrito.png';
const CartWidget = () => {

    return (
        <>
            <img src={cartLogo} alt="cart" width={32} height={32} />
            <span>7</span>
        </>
    );
};

export default CartWidget;