import React from 'react'
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../hooks/context/useThemeContext';

const SidebarFooter = () => {
    const { theme } = useThemeContext();
    const style_maker = {
        "--link-color": theme !== null ? theme.text : "rgb(51 65 85)",
        "--link-bg-color": theme !== null ? theme.neutral : "rgb(236 253 245 / 1)",
        "--link-hover-color": theme !== null ? theme.text : "rgb(16 185 129 / 1)",
        "--active-el-color": theme !== null ? theme.text : "rgb(16 185 129 / 1)",
        "--active-el-bg-color": theme !== null ? theme.accent : "rgb(236 253 245 / 1)",
        "--active-el-hover-color": theme !== null ? theme.neutral : "rgb(16 185 129 / 1)",
    };

    return (
        <footer className="p-3" style={{ borderTop: `1px solid ${theme !== null ? theme.text : "#eeeeee"}` }}>
            <Link
                to="/"
                className="flex items-center gap-3 rounded p-3 link"
                style={style_maker}
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
            </Link>
        </footer>
    )
}

export default SidebarFooter