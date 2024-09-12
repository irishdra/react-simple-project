import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import HomePage from '../pages/Home'

describe('HomePage', () => {
    test('Should be necessary texts on form', () => {
        render(<HomePage />)
        expect(screen.getByText('Hello world!')).toBeDefined()
    })
})
