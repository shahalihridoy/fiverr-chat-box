import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import materialTheme from "./app/theme/MaterialTheme";
import ChatBox from "./app/views/ChatBox";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./styles/app.scss";
import DocumentList from "./app/views/DocumentList";

const App = () => {
  return (
    <ThemeProvider theme={materialTheme}>
      <Router>
        <Switch>
          <Route path="/documents" component={DocumentList} />
          <Route path="/chat" component={ChatBox} />
          <Route path="/" render={props => <Redirect to="/chat" />} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
