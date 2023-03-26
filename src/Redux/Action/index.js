//Add product to the cart

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

//Add product to the cart

export const deleteProduct = (product) => {
    return {
        type: DELETE_PRODUCT,
        payload: product
    }
}