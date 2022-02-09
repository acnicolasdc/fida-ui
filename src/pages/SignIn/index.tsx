import { Link } from 'react-router-dom'
import { EPaths } from '@routes'
import Auth from '@containers/Auth'
import { SubTitle, Text } from '@components/Typography'
import { Container, ContentForm, Logo } from './signIn.style'

function SignIn() {
    return (
        <Container>
            <Logo />
            <ContentForm>
                <SubTitle>Welcome Back!</SubTitle>
                <Text>
                    New in Fidaboard?{' '}
                    <Link to={EPaths.requestAccess}>Request access</Link>
                </Text>
                <Auth />
                <Text>
                    <Link to={EPaths.forgotPassword}>Forgot Password?</Link>
                </Text>
            </ContentForm>
        </Container>
    )
}

export default SignIn
