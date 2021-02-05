import React from "react";
import { changeAlert } from "../../store/actions/alert.action";
import { Modal, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { MdError, MdCheckCircle } from "react-icons/md";

export default function Alert() {
  const dispatch = useDispatch();
  const alert = useSelector(state => state.alertReducer);  

  if (alert.open) {
    setTimeout(() => dispatch( changeAlert({open: false })), alert.time);

  }

  return (
    <Modal
      open={alert.open}
      onClose={() => dispatch(changeAlert({ open: false }))}
      className="d-flex flex-column align-items-center justify-content-center h100"
    >
      <div className="bg-white rounded-lg d-flex align-items-center p-4">
        {alert.class === "success" && (
          <MdCheckCircle
            style={{ fontSize: "2.5rem" }}
            className="m-3 text-success"
          />
        )}
        {alert.class === "error" && (
          <MdError style={{ fontSize: "2.5rem" }} className="m-3 text-danger" />
        )}
        <Typography variant="subtitle2" className="font-weifht-bold">
          {alert.msg}
        </Typography>
      </div>
    </Modal>
  );
}
