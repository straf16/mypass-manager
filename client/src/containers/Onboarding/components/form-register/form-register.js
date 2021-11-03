import React, { useState } from 'react';

import { Card, Divider, Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

function FormRegister() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Card className="onboarding-card">
            <Divider>Register</Divider>
            <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
                <Form.Item label="Email">
                    <Input value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Item>
                <Form.Item label="Username">
                    <Input value={username} onChange={e => setUsername(e.target.value)} />
                </Form.Item>
                <Form.Item label="Password">
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
