import React, { useState, useRef, useEffect } from 'react'
import EventDetails from '../../event.details';
import EventForms from '../../event.forms';
import Applications from '../../applications';
import ArchivedApplications from '../../archived.applications';

const MainTabs = () => {
    const tabs = [
        { tabName: 'Event Details', badge: null },
        { tabName: 'Event Forms', badge: null },
        { tabName: 'Applications', badge: 4 },
        { tabName: 'Archived Applications', badge: 5 },
    ];
    const tabContent = [
        { content: <EventDetails /> },
        { content: <EventForms /> },
        { content: <Applications /> },
        { content: <ArchivedApplications /> },
    ]

    const [tabSelected, setTabSelected] = useState({
        currentTab: 1,
        noTabs: 4,
    })

    return (
        <>
            {/*<!-- Component: Basic lg sized tab --> */}
            <section className="max-w-full" aria-multiselectable="false">
                <ul
                    className="flex items-center border-b border-slate-200 overflow-x-auto overflow-y-hidden"
                    role="tablist"
                >
                    {
                        tabs.map((item, idx) => <li key={idx} className="" role="presentation">
                            <button
                                className={`-mb-px inline-flex h-12 w-full items-center justify-center whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === idx + 1
                                    ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                                    : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
                                    }`}
                                id="tab-label-1a"
                                role="tab"
                                aria-setsize="3"
                                aria-posinset="1"
                                tabIndex={`${tabSelected.currentTab === idx ? "0" : "-1"}`}
                                aria-controls="tab-panel-1a"
                                aria-selected={`${tabSelected.currentTab === idx + 1 ? "true" : "false"}`}
                                onClick={() => setTabSelected({ ...tabSelected, currentTab: idx + 1 })}
                            >
                                {item.badge && <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full border border-green-400">
                                    {item.badge}
                                </span>}
                                <span>{item.tabName}</span>
                            </button>
                        </li>)
                    }
                </ul>
                <div className=''>
                    {
                        tabContent.map((item, idx) => <div
                            key={idx}
                            className={`${tabSelected.currentTab === idx + 1 ? "" : "hidden"}`}
                            id="tab-panel-1a"
                            aria-hidden={`${tabSelected.currentTab === idx + 1 ? "true" : "false"}`}
                            role="tabpanel"
                            aria-labelledby="tab-label-1a"
                            tabIndex="-1"
                        >
                            {item.content}
                        </div>)
                    }

                </div>

            </section >
        </>
    )
}

export default MainTabs