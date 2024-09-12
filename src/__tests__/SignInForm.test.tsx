import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import SignInForm from '../features/signIn/components/SignInForm'

const mockOnLoginSubmit = (fullName: string) => {
    console.log('fullName', fullName)
}

describe('SignInForm', () => {
    test('Should be necessary texts on form', () => {
        render(<SignInForm onLoginSubmit={mockOnLoginSubmit} />)
        expect(screen.getByText('Full Name')).toBeDefined()
        expect(screen.getByText('Password')).toBeDefined()
        expect(screen.getByText('Sign In')).toBeDefined()
    })
})
