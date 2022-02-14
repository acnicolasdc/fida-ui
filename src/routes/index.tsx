import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Offer from '@pages/Offer'
import Default from '@pages/Default'
import SignIn from '@pages/SignIn'
import Dashboard from '@pages/Dashboard'
import NotificationDropdown from '@containers/User/UserNotificationDropdown'
import UserDropdownMenu from '@containers/User/UserDropdownMenu'
import UserNavigationMenu from '@containers/User/UserNavigationMenu'
import NavigationBar from '@components/Layout/NavigationBar'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import PrivateComponent from './components/PrivateComponent'

import paths from './paths.json'

export const EPaths = paths
export default function Routes() {
    return (
        <BrowserRouter>
            <PrivateComponent>
                <NavigationBar
                    extra={[
                        <UserNavigationMenu key="3" />,
                        <NotificationDropdown key="1" />,
                        <UserDropdownMenu key="2" />,
                    ]}
                />
            </PrivateComponent>
            <Switch>
                <Route
                    path={paths.dashboard}
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route
                    path={paths.offer}
                    element={
                        <PrivateRoute>
                            <Offer />
                        </PrivateRoute>
                    }
                />
                <Route
                    path={paths.signIn}
                    element={
                        <PublicRoute restricted>
                            <SignIn />
                        </PublicRoute>
                    }
                >
                    <Route path={paths.forgotPassword} element={<Default />} />
                    <Route path={paths.requestAccess} element={<Default />} />
                </Route>

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
