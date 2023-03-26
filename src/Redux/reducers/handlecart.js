const cart = [];

export const handleCart = (state = cart, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            const exist = state.find((product) => product.id === action.payload.id);
           
            if (exist) {
                return state.map((product) =>
                    product.id === action.payload.id ? { ...exist, qty: exist.qty + 1 } : product
                );
            }else{
                return [...state, { ...action.payload, qty: 1 }];
            }
        case 'DELETE_PRODUCT':
            const exist1 = state.find((product) => product.id === action.payload.id);
            if (exist1.qty === 1) {
                return state.filter((product) => product.id !== action.payload.id);
            } else {
                return state.map((product) =>
                    product.id === action.payload.id ? { ...exist1, qty: exist1.qty - 1 } : product
                );
            }
        default:
        return state;
    }
    }
