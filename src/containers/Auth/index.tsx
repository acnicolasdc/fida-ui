import { Input, Button } from 'antd'
import { AuthForm } from './auth.style'

export default function Auth() {
    return (
        <AuthForm
            name="authentication"
            layout="vertical"
            autoComplete="off"
            size="large"
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
