import { createFileRoute } from '@tanstack/react-router'
import SignInPage from '../pages/SignIn'

export const Route = createFileRoute('/login')({
    component: () => <SignInPage />,
})
