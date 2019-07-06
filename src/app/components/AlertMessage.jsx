import React from "react";
import {
  IconButton,
  Icon,
  Dialog,
  DialogContent,
  Fab
} from "@material-ui/core";

const AlertMessage = ({ phone, city }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      maxWidth="xs"
      fullWidth={true}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <div>
          <div className="flex flex-end">
            <IconButton onClick={handleClose} style={{ marginRight: "-14px" }}>
              <Icon>close</Icon>
            </IconButton>
          </div>
          <div className="px-8">
            <div className="py-4">
              <b>Phone no: </b>
              <span>{phone}</span>
            </div>
            <div className="py-4">
              <b>City: </b>
              <span className="capitalize">{city}</span>
            </div>
            <div className="py-4">
              <b>Resume: </b>
              <span>Resume</span>
            </div>
          </div>

          <div className="pt-24 pb-24 flex flex-center">
            <Fab
              color="primary"
              variant="extended"
              size="medium"
              className="mx-8 px-48 capitalize"
              onClick={handleClose}
            >
              yes
            </Fab>
            <Fab
              color="primary"
              variant="extended"
              size="medium"
              className="mx-8 px-48 capitalize"
              onClick={handleClose}
            >
              no
            </Fab>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AlertMessage;
