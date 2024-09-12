import React, { useEffect, useState } from 'react'
import SignInForm from '../features/signIn/components/SignInForm'
import { sessionStore } from '../features/session/store/SessionStore'
import { useNavigate } from '@tanstack/react-router'

const SignInPage: React.FC = () => {
    const navigate = useNavigate()
    const [, setSession] = useState(sessionStore.session)

    useEffect(() => {
        const sub = sessionStore.session$.subscribe((session) =>
            setSession(session)
        )

        return () => {
            sub.unsubscribe()
        }
    }, [])

    const signInUser = (fullName: string) => {
        sessionStore.set(fullName)
        navigate({ to: '/' })
    }

    return <SignInForm onLoginSubmit={signInUser} />
}

export default SignInPage
