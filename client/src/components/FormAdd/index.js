import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { addPassword } from '../../store/actions'

import { Form, AutoComplete, Input, Button } from 'antd';

function FormAdd(props) {
  const [URL, setURL] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const Toast = useSelector(state => state.feedback.Toast)

  const popularSite = [
    'https://www.facebook.com/',
    'https://www.amazon.com/gp/sign-in.html'
  ]

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  }

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addPassword({
      URL,
      username,
      password
    })
      .then(result => {
        setURL('')
        setUsername('')
        setPassword('')
        Toast.fire({
          icon: 'success',
          title: 'Successfully add password'
        })
        history.replace('/main/my-password')
      })
      .catch(({ message }) => {
        message.forEach(error => {
          Toast.fire({
            icon: 'error',
            title: error
          })
        })
      })
  }

  return (
    <div data-testid="form-add-section">
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <Form.Item label="URL Site">
          <AutoComplete
            dataSource={popularSite}
            filterOption={(inputValue, option) =>
              option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
          >
            <Input style={{ width: '60%' }} value={URL} onKeyDown={e => setURL(e.target.value)} />
          </AutoComplete>
        </Form.Item>
        <Form.Item label="Username">
          <Input style={{ width: '60%' }} value={username} onChange={e => setUsername(e.target.value)} />
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          <Input.Password style={{ width: '60%' }} value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default FormAdd