import React from 'react';

import { Layout } from 'antd';
import Navbar from '../Main/components/Navbar'

import './onboarding.css'
import { useParams } from 'react-router';
import FormLogin from './components/form-login/form-login';
import FormRegister from './components/form-register/form-register';

function Onboarding(props) {
    const { Content } = Layout;
    const { state } = useParams();

    const onboardingCard = (() => {
        if (state === 'login') {
            return <FormLogin />;
        } else if (state === 'register') {
            return <FormRegister />;
        }
    })();

    return (
        <div data-testid="onboarding-container">
            <Layout>
                <Navbar />
                <Content className="onboarding-content">
                    {onboardingCard}
                </Content>
            </Layout>
        </div>
    )
}

export default Onboarding;
