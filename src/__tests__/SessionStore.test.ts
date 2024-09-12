import { describe, expect, test } from 'vitest'
import { sessionStore } from '../features/session/store/SessionStore'

const MOCK_FULL_NAME_1 = 'John Snow'
const MOCK_FULL_NAME_2 = 'Bob Martin'

describe('SessionStore', () => {
    test('Default value must be empty', () => {
        expect(sessionStore.session.fullName).toBe('')
        expect(sessionStore.session.startDate).toBe('')
        expect(sessionStore.session.endDate).toBe('')
    })

    test('Must be initiated with the transmitted value', () => {
        sessionStore.set(MOCK_FULL_NAME_1)
        expect(sessionStore.session.fullName).toBe(MOCK_FULL_NAME_1)
    })

    test('Must update value', () => {
        sessionStore.set(MOCK_FULL_NAME_1)
        expect(sessionStore.session.fullName).toBe(MOCK_FULL_NAME_1)

        sessionStore.set(MOCK_FULL_NAME_2)
        expect(sessionStore.session.fullName).toBe(MOCK_FULL_NAME_2)
    })
})
