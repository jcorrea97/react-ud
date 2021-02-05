import { actionsType } from "../actions/alert.action";

const initialState = {
    open: false,
    class: 'error',
    time:3000,
    msg: 'Dados Atualizados'
};

export default (state = initialState, { type, payLoad }) => {
  switch (type) {
    case actionsType.CHANGE:
      return { ...state, ...payLoad };

    default:
      return state;
  }
};
