export const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: {id}
    }
};

export const incrementItem = (id) => {
    return {
        type: 'INCREMENT_ITEM',
        payload: {id}
    }
};

export const decrementItem = (id) => {
    return {
        type: 'DECREMENT_ITEM',
        payload: {id}
    }
};

export const applyPromo = (value) => {
    return {
        type: 'APPLY_PROMO',
        payload: {value}
    }
};