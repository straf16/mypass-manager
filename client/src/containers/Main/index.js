import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import './main.css'
import 'antd/dist/antd.css'

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import FormAdd from '../../components/FormAdd'
import PasswordList from '../../components/PasswordList'

import { Layout } from 'antd'

function Main(props) {
  const { Content } = Layout;

  return (
    <div data-testid="main-container">
      <Layout>
        <Sidebar />
        <Layout style={{ marginLeft: 200 }}>
          <Navbar />
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
