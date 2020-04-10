export const addItem = (item) => ({
    type: 'ADD_ITEM',
    item,
});

// NOT YET WIRED
export const removeItem = (itemId) => ({
    type: 'REMOVE_ITEM',
    itemId,
});

//NOT YET WIRED
export const updateQuantity = (itemId, newQuantity) => ({
    type: 'UPDATE_QUANTITY',
    itemId,
    newQuantity,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});