import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Auth = ({ component: Component, path, signedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props => 
            signedIn ? <Redirect to="/"/> : <Component {...props}/>
        }
    />
);

const Protected = ({ component: Component, path, signedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            signedIn ? <Component {...props}/> : <Redirect to="/signin"/>
        }
    />
);

const mSTP = state => ({
    signedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));