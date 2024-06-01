import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useThemeContext } from '../../hooks/useThemeContext'
import "../../index.css"

const SidebarItem = ({ item, setIsSideNavOpen }) => {
    const url = useLocation().pathname.split("/")[1];
    const { theme } = useThemeContext();
    const style_maker = {
        "--link-color": theme !== null ? theme.text : "rgb(51 65 85)",
        "--link-bg-color": theme !== null ? theme.neutral : "rgb(236 253 245 / 1)",
        "--link-hover-color": theme !== null ? theme.text : "rgb(16 185 129 / 1)",
        "--active-el-color": theme !== null ? theme.text : "rgb(51 65 85)",
        "--active-el-bg-color": theme !== null ? theme.accent : "rgb(236 253 245 / 1)",
        "--active-el-hover-color": theme !== null ? theme.neutral : "rgb(16 185 129 / 1)",
        "--badge-bg-color": theme !== null ? theme.secondary : "rgb(252 231 243)",
        "--badge-color": theme !== null ? theme.bg_primary : "rgb(236 72 153)",
    };

    return (
        <li className="px-3">
            {
                item.type === 'menu' ?
                    <Link
                        onClick={() => setIsSideNavOpen(false)}
                        to={item.link}
                        className={`${url.includes(item.link) ? 'active-el' : ''} flex items-center gap-3 rounded p-3 transition-colors link`}
                        style={style_maker}
                    >
                        <div className="flex items-center self-center">
                            {item.icon}
                        </div>
                        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                            {item.name}
                        </div>
                        {item.badge &&
                            <span className="badge inline-flex items-center justify-center rounded-full px-2 text-xs"
                                style={style_maker}
                            >
                                {item.badge}<span className="sr-only"> new notifications</span>
                            </span>}
                    </Link> :
                    <details className="flex items-center gap-3 rounded p-3  transition-colors group link" style={style_maker}>
                        <summary className="[&::-webkit-details-marker]:hidden relative list-none cursor-pointer focus-visible:outline-none transition-colors duration-300">
                            <div className="flex items-center gap-3 link" style={style_maker}>
                                <div className="flex items-center self-center ">
                                    {item.icon}
                                </div>
                                <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                    {item.name}
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 w-4 h-4 transition duration-300 top-1 strokeSlate-700 shrink-0 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-labelledby="title-ac01 desc-ac01">
                                <title id="title-ac01">Open icon</title>
                                <desc id="desc-ac01">icon that represents the state of the summary</desc>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                            </svg>
                        </summary>
                        {/* BUTTONS */}
                        <ul className="mt-2">
                            {item.children.map((menu, idx) => <li key={idx}>
                                <Link
                                    to={menu.link}
                                    onClick={() => setIsSideNavOpen(false)}
                                    className={`${url.includes(menu.link) ? 'active-el' : ''} flex items-center gap-3 rounded p-3 transition-colors link`}
                                    style={style_maker}
                                >
                                    <div className="flex items-center self-center ">
                                        {menu.icon}
                                    </div>
                                    <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                        {menu.name}
                                    </div>
                                    {menu.badge &&
                                        <span className="inline-flex items-center justify-center rounded-full px-2 text-xs badge" style={style_maker}>
                                            {menu.badge}<span className="sr-only"> new notifications</span>
                                        </span>}
                                </Link>
                            </li>)}
                        </ul>
                    </details>
            }
        </li>
    )
}

export default SidebarItem