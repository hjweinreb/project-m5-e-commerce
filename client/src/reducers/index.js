import { combineReducers } from 'redux';
import items from './items-reducer';
// <<<<<<< searchBar-2-manny
// // import cart from './cart-reducer';
import dataItems from './dataItems-reducer';
import inventoryReducer from './inventory-reducer';

// export default combineReducers({ items, cart, dataItems })

import cartReducer from './cart-reducer';

export default combineReducers({
    dataItems,
    cartState: cartReducer,
    inventoryReducer,
    items,
});
// >>>>>>> master

