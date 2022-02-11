import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

import Alert from "./../Alert/index";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        style={{ backgroundColor: "rgba(245,0,87,0.5)" }}
      >
        Xác nhận mua <CheckBoxIcon style={{ marginLeft: "5px" }} />
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Thông tin cá nhân</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
          />
          <TextField

            margin="dense"
            id="name"
            label="Họ tên"
            type="text"
            fullWidth
          />
          <TextField

            margin="dense"
            id="address"
            label="Địa chỉ"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={callAlert} color="primary">
            Gủi
          </Button> */}
          <Alert />
          <Button onClick={handleClose} color="primary">
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
