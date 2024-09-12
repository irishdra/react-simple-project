import { BehaviorSubject } from 'rxjs'
import { addOneDayToDate } from '../../../shared/helpers/addOneDayToDate'

export interface Session {
    fullName: string
    startDate: string
    endDate: string
}

const initSession: Session = {
    fullName: '',
    startDate: '',
    endDate: '',
}

export const SessionStore = (initStore: Session = initSession) => {
    const sessionSubject = new BehaviorSubject(initStore)

    return {
        session$: sessionSubject.asObservable(),
        get session() {
            return sessionSubject.getValue()
        },
        set: (fullName: string) => {
            const startDateISOString = new Date().toISOString()
            const endDateISOString = addOneDayToDate(new Date()).toISOString()

            sessionSubject.next({
                fullName,
                startDate: startDateISOString,
                endDate: endDateISOString,
            })
        },
    }
}

export const sessionStore = SessionStore()
