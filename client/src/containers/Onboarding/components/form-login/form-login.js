import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../../../store/actions';

import { Button, Card, Divider, Form, Input } from 'antd';

function FormLogin(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Toast = useSelector(state => state.feedback.Toast)
    const history = useHistory()
    const dispatch = useDispatch()

    const handleSubmit = (values) => {
        login({ email, password })
            .then(result => {
                localStorage.setItem('token', result.token)
                localStorage.setItem('name', result.name)
                localStorage.setItem('email', result.email)
                dispatch({
                    type: 'SET_LOGIN',
                    payload: true
                })
                setEmail('')
                setPassword('')
                Toast.fire({
                    icon: 'success',
                    title: 'Login Success'
                })
                history.push('/main')
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
        <Card className="onboarding-card">
            <Divider>Login</Divider>
            <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} onFinish={handleSubmit}>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { type: 'email', message: 'Your email is not a valid email!'},
                        { required: true, message: 'Please input your email' }
                    ]}
                >
                    <Input value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                <Divider />
                <Form.Item wrapperCol={{ span: 24 }}>
                    <p style={{ margin: 0 }}>
                        Don't have an account? <Link to="/onboarding/register">Create Account</Link>
                    </p>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default FormLogin;
