import React from 'react'
import Footer from '../../components/common/Footer';
import Logo from '../../components/common/Logo';
import Menu from '../../components/common/Menu';
import { menuItemsData } from '../../components/common/Menu/data';
import './style.css';

const Cart = () => {
  return (
    <>
      <div className="cart-header">
        <Logo/>
      </div>
      <div className="orders">
        <h1 className = 'orders-heading'>Your Orders</h1>
        <div className="order-menu">
          <Menu list={menuItemsData}/>
        </div>
        <h3 className="order-total">your Total $23</h3>
      </div>
    <Footer/>
    </>
  )
}

export default Cart