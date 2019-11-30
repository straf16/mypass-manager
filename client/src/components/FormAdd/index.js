import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { addPassword, updatePassword } from '../../store/actions'

import { Form, AutoComplete, Input, Button, Progress } from 'antd';

function FormAdd({payload, submit}) {
  const [URL, setURL] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const Toast = useSelector(state => state.feedback.Toast)

  const popularSite = [
    'https://www.facebook.com/',
    'https://www.amazon.com/gp/sign-in.html',
    'https://twitter.com/login',
    'https://www.linkedin.com/login'
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
    if (!payload) {
      addPassword({
        URL,
        name,
        username,
        password
      })
        .then(result => {
          setURL('')
          setName('')
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
    } else {
      updatePassword(payload._id, {
        URL,
        name,
        username,
        password
      })
        .then(result => {
          setURL('')
          setName('')
          setUsername('')
          setPassword('')
          Toast.fire({
            icon: 'success',
            title: 'Successfully update password'
          })
          submit()
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
  }

  const passwordStrength = (pass = '') => {
    let percent = 0
    let color = 'grey'
    if (pass.match(/[A-Z]/g)) {
      percent += 20
    }
    if (pass.match(/[a-z]/g)) {
      percent += 20
    }
    if (pass.match(/[!@#$%^&*(),.?":{}|<>]/g)) {
      percent += 20
    }
    if (pass.match(/[0-9]/g)) {
      percent += 20
    }
    if (pass.length > 5) {
      percent += 20
    }

    if (percent === 0) {
      color = 'grey'
    } else if (percent <= 40) {
      color = 'red'
    } else if (percent <= 80) {
      color = 'yellow'
    } else if (percent <= 100) {
      color = 'green'
    }

    return (
      <Progress
        percent={percent}
        strokeColor={color}
        format={percent => {
          if (percent === 0) {
            return 'No Password'
          } else if (percent <= 40) {
            return 'Weak'
          } else if (percent <= 80) {
            return 'Medium'
          } else if (percent <= 100) {
            return 'Strong'
          }
        }}
        style={{ width: '60%' }}
      />
    )
  }

  useEffect(() => {
    if (payload) {
      setURL(payload.URL)
      setName(payload.name)
      setUsername(payload.username)
      setPassword(payload.password)
    }
  }, [payload])

  return (
    <div data-testid="form-add-section">
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <Form.Item label="URL Site">
          <AutoComplete
            value={URL}
            onChange={value => setURL(value)}
            dataSource={popularSite}
            filterOption={(inputValue, option) =>
              option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
            style={{ width: '60%' }}
          />
        </Form.Item>
        <Form.Item label="Name">
          <Input style={{ width: '60%' }} value={name} onChange={e => setName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Username">
          <Input style={{ width: '60%' }} value={username} onChange={e => setUsername(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Password"
          hasFeedback
          extra={passwordStrength(password)}>
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