import React from 'react'

const SidebarItem = ({ item, setIsSideNavOpen }) => {
    return (
        <li className="px-3">
            {
                item.type === 'menu' ?
                    <a
                        onClick={() => setIsSideNavOpen(false)}
                        href="#"
                        className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                    >
                        <div className="flex items-center self-center">
                            {item.icon}
                        </div>
                        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                            {item.name}
                        </div>
                        {item.badge &&
                            <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2 text-xs text-pink-500 ">
                                {item.badge}<span className="sr-only"> new notifications</span>
                            </span>}
                    </a> :
                    <details className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 group">
                        <summary className="[&::-webkit-details-marker]:hidden relative list-none cursor-pointer text-slate-700 focus-visible:outline-none transition-colors duration-300 group-hover:text-slate-900 ">
                            <div className="flex items-center gap-3  hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 ">
                                <div className="flex items-center self-center ">
                                    {item.icon}
                                </div>
                                <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm hover:text-emerald-500">
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
                                <a
                                    onClick={() => setIsSideNavOpen(false)}
                                    href="#"
                                    className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                                >
                                    <div className="flex items-center self-center ">
                                        {menu.icon}
                                    </div>
                                    <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                        {menu.name}
                                    </div>
                                    {menu.badge &&
                                        <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2 text-xs text-pink-500 ">
                                            {menu.badge}<span className="sr-only"> new notifications</span>
                                        </span>}
                                </a>
                            </li>)}
                        </ul>
                    </details>
            }
        </li>
    )
}

export default SidebarItem