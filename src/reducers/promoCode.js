const initialStore = [
    {
        isActive: false,
        value: '123456',
        discount: -1800
    }
];


export default (defaultStore = initialStore, action) => {
    const {type,payload} = action;

    switch (type) {
        case 'APPLY_PROMO': return defaultStore.map(item => {
            if (item.value === payload.value) item.isActive = true;
            else item.isActive = false;
            return item
        })  ;



    }

    return defaultStore
}