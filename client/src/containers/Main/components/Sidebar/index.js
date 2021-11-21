import React, { useState, useEffect } from 'react'
import {
  Link,
  useLocation
} from 'react-router-dom'

import { Layout, Menu } from 'antd'
import { LockFilled, FormOutlined } from '@ant-design/icons';

function Sidebar(props) {
  const { Sider } = Layout
  const location = useLocation()

  const [side, setSide] = useState(null)

  useEffect(() => {
    // selected side not change after submit the new password site
    switch (location.pathname) {
      case '/main/form-add':
        setSide('form-add')
        break;
      case '/main/my-password':
        setSide('my-password')
        break;
      default:
        setSide('my-password')
        break;
    }
  }, [location])

  if (!side) {
    return (
      <p>load...</p>
    )
  }
  
  return (
    <React.Fragment>
      <Sider
        data-testid="sidebar"
        trigger={null}
        width={200}
        style={{
          overflowY: 'auto',
          overflowX: 'hidden',
          position: 'fixed',
          height: '100vh',
          left: 0
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[side]}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
            background: '#3C4A54'
          }}
        >
          <div className="logo" />
          <Menu.Item key="my-password">
            <Link data-testid="link-to-my-password" to="/main/my-password">
              <LockFilled />
              <span>Passwords</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="form-add">
            <Link data-testid="link-to-form-add" to="/main/form-add">
              <FormOutlined />
              <span>Add Password</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </React.Fragment>
  )
}

export default Sidebar