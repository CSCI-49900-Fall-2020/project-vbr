import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import AlertMsg from "../layout/AlertMsg";
import Login from "../auth/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../routing/PrivateRoutes";
import Repository from "../pages/Repository";
import ThreadPage from "../pages/ThreadPage";
import ResourcePage from "../pages/ResourcePage";
import ResourceCreation from "../pages/ResourceCreation";
import ProfilePage from "../pages/ProfilePage";
import ThreadCreation from "../pages/ThreadCreation";

const repository = ["python", "c++", "java"];

const Routes = () => {
  return (
    <section className="container">
      <AlertMsg />
      <Switch>
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <PrivateRoute
          path="/repository/:discipline/:topic"
          exact
          component={Repository}
        />
        <PrivateRoute
          path="/repository/:discipline/:topic/thread/:listOfResources"
          exact
          component={ThreadPage}
        />
        <PrivateRoute
          path="/repository/:discipline/:topic/thread/:listOfResources/resource/:resourceId"
          exact
          component={ResourcePage}
        />
        <PrivateRoute
          path="/createResource"
          exact
          component={ResourceCreation}
        />
        <PrivateRoute
          path="/profile"
          exact
          component={ProfilePage}
        />
         <PrivateRoute
          path="/createThread"
          exact
          component={ThreadCreation}
        />
      </Switch>
      {/*just for testing */}
      {/* <Route component={NotFound} /> */}
    </section>
  );
};

export default Routes;
