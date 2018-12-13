import goodsImage1 from "../images/good_item_1.png";
import goodsImage2 from "../images/good_item_2.png";
import goodsImage3 from "../images/good_item_3.png";
import goodsImage4 from "../images/good_item_4.png";

const initialStore = [
                        {
                            id: 8943091,
                            src: goodsImage1,
                            description: 'Платье-миди с расклешенной юбкой',
                            code: '82039-11',
                            size: 44,
                            color: 'синий',
                            counter: 1,
                            price: 2450
                        },
                        {
                            id: 8943092,
                            src: goodsImage2,
                            description: 'Туфли женские украшенные кружевными вставками',
                            code: '13524-01',
                            size: 38,
                            color: 'черный',
                            counter: 1,
                            price: 2450
                        },
                        {
                            id: 8943093,
                            src: goodsImage3,
                            description: 'Платье-миди',
                            code: '75039',
                            size: 44,
                            color: 'белый',
                            counter: 1,
                            price: 2450
                        },
                        {
                            id: 8943094,
                            src: goodsImage4,
                            description: 'Платье-миди',
                            code: '75039',
                            size: 46,
                            color: 'белый',
                            counter: 1,
                            price: 2450
                        }

];





export default (defaultStore = initialStore, action) => {
    const {type,payload} = action;

    switch (type) {
        case 'DELETE_ITEM': return defaultStore.filter(item => item.id !== payload.id);

        case 'INCREMENT_ITEM': return defaultStore.map( item => {

            if(item.id === payload.id) item.counter = item.counter + 1;

            return item

        } );

        case 'DECREMENT_ITEM': return defaultStore.map( item => {

            if(item.id === payload.id && item.counter !== 1) item.counter = item.counter - 1;

            return item
        } );

    }

    return defaultStore
}