import React, { useEffect, useState } from 'react'
import { sessionStore } from '../features/session/store/SessionStore'

const HomePage: React.FC = () => {
    const [session, setSession] = useState(sessionStore.session)

    useEffect(() => {
        const sub = sessionStore.session$.subscribe((session) =>
            setSession(session)
        )

        return () => {
            sub.unsubscribe()
        }
    }, [])

    return (
        <div>Hello {session.fullName ? `, ${session.fullName}` : 'world'}!</div>
    )
}

export default HomePage
