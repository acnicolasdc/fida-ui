import { Input, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { EPaths } from '@routes'
import { AuthForm } from './auth.style'

export default function Auth() {
    const navigate = useNavigate()
    return (
        <AuthForm
            name="authentication"
            layout="vertical"
            autoComplete="off"
            size="large"
            onFinish={() => navigate(EPaths.dashboard)}
        >
            <AuthForm.Item
                name="username"
                rules={[
                    { required: true, message: 'Please input your username!' },
                ]}
            >
                <Input placeholder="Company Email" />
            </AuthForm.Item>

            <AuthForm.Item
                name="password"
                rules={[
                    { required: true, message: 'Please input your password!' },
                ]}
            >
                <Input.Password placeholder="Password" />
            </AuthForm.Item>
            <AuthForm.Item>
                <Button type="primary" htmlType="submit" block>
                    Sign In
                </Button>
            </AuthForm.Item>
        </AuthForm>
    )
}
