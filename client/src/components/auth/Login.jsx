import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Login = () => {
    const { axios, setToken, setUser } = useAppContext();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        
        try {
            const { data } = await axios.post('/api/user/login', { email, password })

            if (data.success) {
                setToken(data.token)
                setUser(data.user)
                localStorage.setItem('token', data.token)
                localStorage.setItem('user', JSON.stringify(data.user))
                axios.defaults.headers.common['Authorization'] = data.token;
                toast.success('Login successful!')
                // Redirect to dashboard after successful login
                window.location.href = '/dashboard'
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Login failed')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-md w-full space-y-6 sm:space-y-8 p-6 sm:p-8 bg-white rounded-lg shadow-md'>
                <div>
                    <h2 className='mt-4 sm:mt-6 text-center text-2xl sm:text-3xl font-extrabold text-gray-900'>
                        Sign in to your account
                    </h2>
                    <p className='mt-2 text-center text-sm text-gray-600'>
                        Or{' '}
                        <Link to="/signup" className='font-medium text-indigo-600 hover:text-indigo-500'>
                            create a new account
                        </Link>
                    </p>
                </div>
                <form className='mt-6 sm:mt-8 space-y-4 sm:space-y-6' onSubmit={handleSubmit}>
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                                Email address
                            </label>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='mt-1 appearance-none relative block w-full px-3 py-2 sm:py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm sm:text-base'
                                placeholder='Enter your email'
                            />
                        </div>
                        <div>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                                Password
                            </label>
                            <input
                                id='password'
                                name='password'
                                type='password'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='mt-1 appearance-none relative block w-full px-3 py-2 sm:py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm sm:text-base'
                                placeholder='Enter your password'
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            disabled={loading}
                            className='group relative w-full flex justify-center py-2 sm:py-3 px-4 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-colors'
                        >
                            {loading ? 'Signing in...' : 'Sign in'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
