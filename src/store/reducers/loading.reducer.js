import { actionTypes } from '../actions/loading.action'; 

const initialState = {
        open: false,
        msg: 'Carregando...'
}

export default (state= initialState, {type, payLoad}) =>{
    switch(type) {
                                        
        case actionTypes.CHANGE:
            return {...state, ...payLoad}

        default: 
            return state
    }

}