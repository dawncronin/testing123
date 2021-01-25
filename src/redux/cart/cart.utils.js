export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => {
       return cartItem.id === cartItemToAdd.id
    })
    
    //return a mapped version of cart if cart item is a duplicate
    if (existingCartItem) {
        return cartItems.map(cartItem => {
             return cartItem.id === cartItemToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        })
    }
    //return old cart items with new one if the item is not a duplicate
    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    )
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
  
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
  }