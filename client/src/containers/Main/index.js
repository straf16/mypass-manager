import React, { useState, useEffect } from 'react'
import {
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from "react-router-dom"

import './main.css'
import 'antd/dist/antd.css'

import FormAdd from '../../components/FormAdd'
import PasswordList from '../../components/PasswordList'

import { Layout, Menu, Icon } from 'antd'

function Main(props) {
  const location = useLocation()
  const { Header, Content, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false)
  const [side, setSide] = useState(null)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  useEffect(() => {
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
  }, [ location.pathname ])

  if (!side) {
    return (
      <p>load...</p>
    )
  }

  return (
    <div data-testid="main-container">
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={200}
          style={{
            overflowY: 'auto',
            overflowX: 'hidden',
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
                <Icon type="lock" />
                <span>Passwords</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="form-add">
              <Link data-testid="link-to-form-add" to="/main/form-add">
                <Icon type="form" />
                <span>Add Password</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>    
        <Layout>
          <Header style={{ padding: 0 }}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px', paddingLeft: 30, background: '#D12F2E' }}
            >
              <Icon
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={toggle}
                style={{ margin: 20 }}
              />
              <Menu.Item disabled>
                <strong style={{ fontSize: 20, color: 'white' }}>Password Manager</strong>
              </Menu.Item>
            </Menu>
          </Header>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route exact path="/main">
                <Redirect to="/main/my-password" />
              </Route>
              <Route path="/main/form-add">
                <FormAdd />
              </Route>
              <Route path="/main/my-password">
                <PasswordList />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default Main
