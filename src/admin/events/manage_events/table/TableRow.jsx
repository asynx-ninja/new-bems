import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const TableRow = ({ item, checked, setChecked }) => {
    const getBadge = (status) => {
        switch (status.toLowerCase()) {
            case 'for review':
                return <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-yellow-300">
                    {item.status}
                </span>
            case 'cancelled':
                return <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-gray-500">
                    {item.status}
                </span>
            case 'rejected':
                return <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-red-400">
                    {item.status}
                </span>
            case 'approved':
                return <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-green-400">
                    {item.status}
                </span>
        }
    }

    return (
        <tr className="border-b border-slate-200 hover:bg-slate-50">
            <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                <input
                    className="peer mt-1 h-4 w-4 cursor-pointer appearance-none rounded border-2 border-slate-400 bg-white transition-colors checked:border-emerald-500 checked:bg-emerald-500 checked:hover:border-emerald-600 checked:hover:bg-emerald-600 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    id="id-c01"
                />
            </td>
            <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">{item.name}</td>
            <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">{item.title}</td>
            <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">{item.company}</td>
            <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                {getBadge(item.status)}
            </td>
            <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">{moment(item.event_date).format('MMMM DD, YYYY')}</td>
            <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                <div className="inline-flex shadow-sm" role="group">
                    <Link
                        to="/view_event"
                        type="button"
                        className="flex justify-center items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-emerald-600 bg-transparent border border-emerald-600 rounded-lg hover:text-white hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                    >
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
                                d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                        </svg>
                        <span>View</span>
                    </Link>
                    {/* <button
                        type="button"
                        className="px-4 py-1.5 text-sm font-medium text-emerald-600 bg-transparent border-t border-b border-emerald-600 hover:text-white hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                    >
                        Settings
                    </button>
                    <button
                        type="button"
                        className="px-4 py-1.5 text-sm font-medium text-emerald-600 bg-transparent border border-emerald-600 rounded-e-lg hover:text-white hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                    >
                        Downloads
                    </button> */}
                </div>
            </td>
        </tr>
    )
}

export default TableRow