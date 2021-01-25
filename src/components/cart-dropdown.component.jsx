import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CustomButton from './custom-button.component'
import CartItem from './cart-item.component'
import { selectCartItems } from '../redux/cart/cart.selectors'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, history }) => (
    <div className='cart-dropdown'>
        {
            cartItems.length ? 
            <div className='cart-items'>
                {cartItems.map( cartItem => <CartItem item={cartItem}/>)}
            </div>
            :
            <span className='empty-message'>Nothing in cart</span>

        }

        <CustomButton onClick = {() => history.push('./checkout')}> GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown))