import { Http } from "../../config/Http";
import { changeLoading } from "./loading.action";
import { changeNotify } from "./notify.action"; 

export const actionTypes = {
  CHANGE: "AUTH_CHANGE",
  SUCCESS: "AUTH_SUCCESS",
};

export const change = (payLoad) => ({
  type: actionTypes.CHANGE,
  payLoad,
});

export const success = (payLoad) => ({
  type: actionTypes.SUCCESS,
  payLoad,
});

export const setUserToken = (token) => (dispatch) => {
  localStorage.setItem("access_token", token);
  dispatch(change({ email: "", password: "" }));

  dispatch(success(true));
};

export const login = (credentials) => (dispatch) => {
  dispatch(changeLoading({ open: true, msg: "Autenticando usuário" }));

  return Http.post("oauth/token", {
    grant_type: "password",
    client_id: 2,
    client_secret: "nkHHe4D8Wo5hQ0cwGVOSp9ec8qT20Kb9Lb8O2FNc",
    username: credentials.email,
    password: credentials.password,
  })
    .then((res) => {
      dispatch(changeLoading({ open: false }));
      if (typeof res !== "undefined") {
        if (res.data.access_token) {
          dispatch(setUserToken(res.data.access_token));
        }
      }
    })
    .catch((error) => {
      dispatch(changeLoading({ open: false }));
      if (typeof error.response !== "undefined") {
        if (error.response.status === 401 || error.response.status === 400) {
          console.log('tets')
          dispatch(
            changeNotify({
              open: true,
              class: 'error',
              msg: 'Email ou senha incorretos',
            })
          );
        } else {
          console.log('tessts')
          dispatch(
            changeNotify({
              open: true,
              class: 'error',
              msg: 'Erro ao se conectar com servidor',
            })
          );
        }
      }
    });
};
