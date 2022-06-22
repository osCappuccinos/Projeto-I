import * as React from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Checkbox } from "@mui/material";
import { Fab, Grid } from "@mui/material";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import "../assets/css/base.css";

export default function PopUpBotaoDoPanico() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container className="BotaoDoPanico">
      <Fab color="warning" variant="contained" onClick={handleClickOpen}>
        <GppMaybeIcon />
      </Fab>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Precisa de Ajuda?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Você está prestes a ligar para polícia. Tem certeza que deseja
            continuar?
          </DialogContentText>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ fontSize: "11px", marginTop: "12px", marginLeft: "-12px" }}
          ></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus sx={{ marginRight: "110px" }}>
            Cancelar
          </Button>
          <Button href="tel:+55190" variant="contained" autoFocus color="warning">
            LIGAR
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
