import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from 'react-router-dom';
import { change, login } from "../../store/actions/auth.action";

export default function Auth() {
  const dispatch = useDispatch();
  const { credentials, success } = useSelector((state) => state.authReducer);

  return (
    <div className="d-flex bg-white min-vh-100">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="form-group text-center">
              <img src="/logo.png" alt="Logo da car crm" height="48" />
              <Typography className="mt-3" component="h1" variant="h6">
                Plataforma para revenda de veículos
              </Typography>
            </div>
            <TextField
              label="Email"
              type="email"
              autoComplete="email"
              margin="normal"
              value={credentials.email}
              onChange={(text) =>
                dispatch(change({ email: text.target.value }))
              }
            />
            <TextField
              label="Senha"
              type="password"
              margin="normal"
              value={credentials.password}
              onChange={(text) =>
                dispatch(change({ password: text.target.value }))
              }
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              className="mt-4 mb-4"
              onClick={() => dispatch(login(credentials))}
            >
              Entrar
            </Button>
            {(success) && <Redirect to='/vehicles'/>}
          </div>
        </div>
      </div>
    </div>
  );
}
