import { useReducer } from 'react'
import { createContext, createContextHook } from '@utils/contextHook'
import { Dispatch, State, initialState, reducer } from './features/reducer'

interface IAuthContext {
    dispatch: Dispatch
    state: State
}

interface IAuthProviderProp {
    children: React.ReactNode
}

export const AuthContext = createContext<IAuthContext>('authentication manager')

export const useAuth = createContextHook<IAuthContext>(AuthContext)

export default function AuthProvider({
    children,
}: IAuthProviderProp): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AuthContext.Provider value={{ dispatch, state }}>
            {children}
        </AuthContext.Provider>
    )
}
