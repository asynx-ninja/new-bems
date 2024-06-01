import React from 'react'
import { useThemeContext } from '../../../hooks/useThemeContext'

const Pagination = () => {
    const { theme } = useThemeContext();
    const style_maker = {
        "--link-color": theme !== null ? theme.text : "rgb(51 65 85)",
        "--link-bg-color": theme !== null ? theme.neutral : "rgb(236 253 245 / 1)",
        "--link-hover-color": theme !== null ? theme.text : "rgb(16 185 129 / 1)",
    };

    return (
        <div className='flex justify-between items-center mt-4 '>
            <span className="text-sm" style={{ color: theme !== null ? theme.text : "rgb(51 65 85)" }}>Showing 31 to 40 of 57 results</span>
            <nav role="navigation" aria-label="Pagination Navigation">
                <ul className="flex list-none items-center justify-center divide-x divide-slate-200 overflow-hidden rounded border border-slate-200 text-sm text-slate-700">
                    <li>
                        <a
                            href="javascript:void(0)"
                            aria-label="Goto Page 1"
                            className="inline-flex h-10 items-center justify-center gap-4 px-4 text-sm font-medium  transition duration-300 focus-visible:outline-none link"
                            style={style_maker}
                        >
                            <span className="order-2 md:sr-only">Prev</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="-mx-1 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                role="graphics-symbol"
                                aria-labelledby="title-35 desc-35"
                            >
                                <title id="title-35">Previous page</title>
                                <desc id="desc-35">link to previous page</desc>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </a>
                    </li>
                    {
                        ["", "", ""].map((_, idx) => (
                            <li key={idx}>
                                <a
                                    href="/"
                                    className="hidden h-10 items-center justify-center px-4 text-sm font-medium transition duration-300 focus-visible:outline-none md:inline-flex link"
                                    style={style_maker}
                                >
                                    {idx + 1}
                                </a>
                            </li>
                        ))
                    }
                    <li>
                        <a
                            href="javascript:void(0)"
                            aria-label="Goto Page 4"
                            className="inline-flex h-10 items-center justify-center gap-4 px-4 text-sm font-medium  transition duration-300 focus-visible:outline-none link"
                            style={style_maker}
                        >
                            <span className="md:sr-only">Next</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="-mx-1 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                role="graphics-symbol"
                                aria-labelledby="title-36 desc-36"
                            >
                                <title id="title-36">Next page</title>
                                <desc id="desc-36">link to next page</desc>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination