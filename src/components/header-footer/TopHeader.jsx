import React from 'react'
import Notification from '../notification/Notification'
import { useThemeContext } from '../../hooks/context/useThemeContext'

const TopHeader = ({ isSideNavOpen, setIsSideNavOpen }) => {
    const { theme } = useThemeContext();

    return (
        <nav className="sticky top-0 z-10 left-0 right-0 link" style={{ backgroundColor: theme !== null ? theme.bg_primary : "white", borderBottom: `1px solid ${theme !== null ? theme.text : "#eeeeee"}` }} >
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <button
                            onClick={() => setIsSideNavOpen(!isSideNavOpen)}
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden "
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                />
                            </svg>
                        </button>
                        <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                            <img
                                src="https://flowbite.com/docs/images/logo.svg"
                                className="h-8 me-3"
                                alt="FlowBite Logo"
                            />
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap"
                                style={{ color: theme !== null ? theme.text : "rgb(51 65 85)" }}
                            >
                                Municipality of Rodriguez, Rizal
                            </span>
                        </a>
                    </div>
                    <Notification />
                </div>
            </div>
        </nav>
    )
}

export default TopHeader