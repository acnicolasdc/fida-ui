import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Default from '@pages/Default'
import SignIn from '@pages/SignIn'

export enum EPaths {
    signIn = '/',
    forgotPassword = 'forgot-password',
    requestAccess = 'request-access',
}

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={EPaths.signIn} element={<SignIn />} />
                <Route path={EPaths.forgotPassword} element={<Default />} />
                <Route path={EPaths.requestAccess} element={<Default />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Switch>
        </BrowserRouter>
    )
}
