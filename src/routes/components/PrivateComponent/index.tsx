import { useAuth } from '@providers/Auth'

interface PrivateComponentProp {
    children: JSX.Element
}

export default function PrivateComponent({ children }: PrivateComponentProp) {
    const {
        state: { user },
    } = useAuth()
    if (!user) return null
    return children
}
