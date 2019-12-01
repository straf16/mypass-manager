import React from 'react'

import { Layout, Menu } from 'antd'

function Navbar(props) {
  const { Header} = Layout

  return (
    <Header
      data-testid="navbar"
      style={{ padding: 0 }}>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px', paddingLeft: 30, background: '#D12F2E' }}
      >
        <Menu.Item disabled>
          <strong data-testid="title" style={{ fontSize: 20, color: 'white' }}>Password Manager</strong>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default Navbar