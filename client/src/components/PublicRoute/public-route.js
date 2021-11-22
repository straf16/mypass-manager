import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

function PublicRoute({ component: Component, restricted, ...rest }) {
    const loginStatus = useSelector(state => state.user.isLogin)

    return (
        <Route {...rest} render={props => (
            loginStatus && restricted
                ? <Redirect to="/main" />
                : <Component {...props} />
        )} />
    )
}

export default PublicRoute