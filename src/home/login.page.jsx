import React, { useState } from 'react'
import login from "/imgs/login.png"
import login_logo from "/imgs/logo_login.png"
import { Link } from 'react-router-dom'
import { useAuth } from "../hooks/custom/useAuth"

const LoginPage = () => {
    const { useLogin } = useAuth();

    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    const handleChange = e => {
        setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        await useLogin(user)
    }

    return (
        <>

            <div className='flex flex-row bg-white h-[100vh]'>
                <div className="flex justify-center items-center h-[100vh] w-[30%] relative overflow-hidden block z-10 bg-[url('/imgs/login.png')] bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-r before:from-[#aeffac] before:to-[#036648] before:opacity-75 before:z-[-5]">
                    <img className='w-full h-1/2 object-contain p-4' src={login_logo} alt="" />
                </div>
                <form className='flex flex-col justify-center items-center w-[50%] m-auto p-12'>
                    <div className='mb-10 text-center'>
                        <h1 className='text-4xl font-medium'>Welcome Back!</h1>
                        <p className='mt-2 text-xl'>Please enter your details!</p>
                    </div>
                    <div className='w-full'>
                        <div className="relative w-full">
                            <input
                                id="username"
                                type="text"
                                name="username"
                                placeholder="your name"
                                value={user["username"]}
                                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="username"
                                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Username
                            </label>
                        </div>
                        <div className="relative my-6 w-full">
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="your name"
                                value={user["password"]}
                                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="password"
                                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Password
                            </label>
                        </div>
                        <button onClick={handleSubmit} className="w-full h-10 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                            <span>Login</span>
                        </button>
                        <div className='mt-5 text-center text-sm text-slate-500'>
                            <Link to="/">Forgot your password?</Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginPage