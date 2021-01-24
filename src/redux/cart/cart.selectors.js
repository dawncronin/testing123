import { createSelector } from 'reselect'

//input selector = takes the whole state and returns just a part of it
const selectCart = state => state.cart

//memoized selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce((acc, cartItem) => acc + cartItem.quantity ,0)

)