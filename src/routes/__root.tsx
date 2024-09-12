import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <div className="w-screen h-screen flex flex-col gap-5 items-center">
            <div className="p-2 flex gap-2">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>{' '}
                <Link to="/login" className="[&.active]:font-bold">
                    Login
                </Link>
            </div>
            <div className="h-screen flex items-center">
                <Outlet />
            </div>
            <TanStackRouterDevtools />
        </div>
    ),
})
