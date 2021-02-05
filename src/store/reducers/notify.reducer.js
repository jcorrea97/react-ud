import { actionsType } from '../actions/notify.action';

const initialState = {
    open:false,
    class: 'success',
    msg: '',
    horizontal: 'center',
    vertical: 'top',
    time: 3000,
}

export default (state = initialState, { type, payload }) => {

    switch(type) { 

        case actionsType.CHANGE:
            return {...state, payload}

        default:
            return state
    }
}