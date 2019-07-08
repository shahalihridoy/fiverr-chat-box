import React from "react";
import { IconButton, Icon, Dialog, DialogContent } from "@material-ui/core";

const AlertMessage = ({ open, onAlertMessageClose, children }) => {
  return (
    <Dialog
      open={open}
      maxWidth="xs"
      fullWidth={true}
      onClose={onAlertMessageClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <div>
          <div className="flex flex-end">
            <IconButton
              onClick={onAlertMessageClose}
              style={{ marginRight: "-14px" }}
            >
              <Icon>close</Icon>
            </IconButton>
          </div>
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AlertMessage;
