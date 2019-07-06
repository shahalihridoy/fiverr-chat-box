import { createMuiTheme } from "@material-ui/core/styles";

const materialTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff8f9d",
      contrastText: "#fff"
    },
    secondary: {
      main: "#f6c9cf"
    }
  },
  overrides: {
    MuiDialog: {
      paperWidthXs: {
        minWidth: "320px",
        borderRadius: "8px"
      }
    }
  }
});

export default materialTheme;
