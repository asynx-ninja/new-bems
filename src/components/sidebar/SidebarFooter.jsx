import React from 'react'

const SidebarFooter = () => {
    return (
        <footer className="border-t border-slate-200 p-3">
            <a
                href="#"
                className="flex items-center gap-3 rounded p-3 text-slate-900 transition-colors hover:text-emerald-500 "
            >
                <div className="flex items-center self-center ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                        aria-label="Dashboard icon"
                        role="graphics-symbol"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm font-medium">
                    Logout
                </div>
            </a>
        </footer>
    )
}

export default SidebarFooter