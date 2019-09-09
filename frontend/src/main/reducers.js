import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todo: () => ({
        description : 'Ler livro',
        list: [{
            _id: 1,
            description : 'bla bla bla',
            done: true
        }, {
            _id: 2,
            description : 'bla bla bla 2',
            done: false
        }, {
            _id: 3,
            description : 'bla bla bla 3',
            done: false
        }]
    })
});

export default rootReducer;