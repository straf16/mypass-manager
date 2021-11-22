import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

function PrivateRoute({ component: Component, ...rest }) {
    const loginStatus = useSelector(state => state.user.isLogin)

    return (
        <Route {...rest} render={props => (
            loginStatus
                ? <Component {...props} />
                : <Redirect to="/onboarding/login" />
        )} />
    )
}

export default PrivateRoute