import {
    BrowserRouter,
    Routes as Switch,
    Route,
    Link,
    Outlet,
} from 'react-router-dom'
import Default from '@pages/Default'
import SignIn from '@pages/SignIn'

export default function Routes() {
    return (
        <BrowserRouter>
            <div>
                <h1>Bookkeeper</h1>
                <nav
                    style={{
                        borderBottom: 'solid 1px',
                        paddingBottom: '1rem',
                    }}
                >
                    <Link to="/hola">Invoices</Link> |{' '}
                    <Link to="/expenses">Expenses</Link>
                </nav>
                <Outlet />
            </div>
            <Switch>
                <Route path="/" element={<Default />} />
                <Route path="hola" element={<SignIn />} />
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
