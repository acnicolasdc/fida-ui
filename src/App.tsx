import Routes from '@routes'
import AuthProvider from '@providers/Auth'
import './App.less'

export default function App() {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    )
}
