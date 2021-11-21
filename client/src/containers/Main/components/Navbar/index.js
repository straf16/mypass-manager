import React from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Layout, Menu } from 'antd'

function Navbar(props) {
  const { Header} = Layout
  const dispatch = useDispatch()
  const history = useHistory()
  const Toast = useSelector(state => state.feedback.Toast)
  const loginStatus = useSelector(state => state.user.isLogin)

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    dispatch({
      type: 'SET_LOGIN',
      payload: false
    })
    history.push('/onboarding/login')
    Toast.fire({
      icon: 'success',
      title: 'Logout Success'
    })
  }

  return (
    <Header
      data-testid="navbar"
      style={{ padding: 0 }}>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px', paddingLeft: 30, background: '#D12F2E' }}
      >
        <Menu.Item key="title" disabled style={{ cursor: 'default' }}>
          <strong data-testid="title" style={{ fontSize: 20, color: 'white' }}>Password Manager</strong>
        </Menu.Item>
        {loginStatus && (
          <Menu.Item key="logout" disabled style={{ marginLeft: 'auto', cursor: 'default' }}>
            <Button shape="round" danger onClick={handleLogout}>Logout</Button>
          </Menu.Item>
        )}
      </Menu>
    </Header>
  )
}

export default Navbar