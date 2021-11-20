import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { register } from '../../../../store/actions';

import { Card, Divider, Form, Input, Button } from 'antd';

function FormRegister() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const Toast = useSelector(state => state.feedback.Toast)
    const history = useHistory()

    const handleSubmit = (values) => {
        register({ name, email, password })
            .then(result => {
                setName('')
                setEmail('')
                setPassword('')
                Toast.fire({
                    icon: 'success',
                    title: 'Success Create Account'
                })
                history.push('/onboarding/login')
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
            <Divider>Register</Divider>
            <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} onFinish={handleSubmit}>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input value={name} onChange={e => setName(e.target.value)} />
                </Form.Item>
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
                        Have an account? <Link to="/onboarding/login">Log In</Link>
                    </p>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default FormRegister;
