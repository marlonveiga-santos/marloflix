import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import CadastroVideo from './pages/cadastro/Video'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import CadastroCategoria from "./pages/cadastro/Categoria";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cadastro/video" component={CadastroVideo} />
      <Route exact path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={PageNotFound}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
