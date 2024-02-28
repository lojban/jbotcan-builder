// ==================================================
// Root
// ----
// Entry component for hot reloading.
// ==================================================

import React from "react";
import { Router, browserHistory, applyRouterMiddleware } from "react-router";
import ReactDOM from "react-dom";
import {
  useHistoryRestoreScroll,
  useRouterRestoreScroll
} from "react-router-restore-scroll";

import routes from "../routes.js";
// first enhance a history
const createHistory = useHistoryRestoreScroll(() => browserHistory);

// next create some router middleware
const routerRender = applyRouterMiddleware(useRouterRestoreScroll());

const Root = () => (
  <Router
    history={createHistory()}
    render={routerRender}
    routes={routes}
  />
);

export default Root;
