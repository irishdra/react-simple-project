import React, { useCallback, useState } from 'react'

type SignInFormProps = {
    onLoginSubmit: (fullName: string) => void
}

const SignInForm: React.FC<SignInFormProps> = ({ onLoginSubmit }) => {
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = useCallback(() => {
        onLoginSubmit(fullName)
    }, [fullName, onLoginSubmit])

    return (
        <form className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label
                        className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                        htmlFor="inline-full-name"
                    >
                        Full Name
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="text"
                        placeholder="John Wick"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label
                        className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                        htmlFor="inline-password"
                    >
                        Password
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <button
                        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button"
                        onClick={onSubmit}
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </form>
    )
}

export default SignInForm
