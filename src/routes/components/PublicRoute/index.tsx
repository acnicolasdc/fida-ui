import { useAuth } from '@providers/Auth'
import { useLocation, Navigate } from 'react-router-dom'
import paths from '@routes/paths.json'

interface PublicRouteProp {
    children: JSX.Element
    restricted?: boolean
}

export default function PublicRoute({ children, restricted }: PublicRouteProp) {
    const {
        state: { user },
    } = useAuth()
    const location = useLocation()

    if (user && restricted) {
        return (
            <Navigate to={paths.dashboard} state={{ from: location }} replace />
        )
    }

    return children
}
