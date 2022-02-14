import { useAuth } from '@providers/Auth'
import { useLocation, Navigate } from 'react-router-dom'
import paths from '@routes/paths.json'

interface PrivateRouteProp {
    children: JSX.Element
}

export default function PrivateRoute({ children }: PrivateRouteProp) {
    const {
        state: { user },
    } = useAuth()
    const location = useLocation()
    if (!user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to={paths.signIn} state={{ from: location }} replace />
    }

    return children
}
