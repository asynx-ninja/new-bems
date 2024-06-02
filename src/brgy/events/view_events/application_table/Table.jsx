import React from 'react'
import { useState } from 'react';
import TableRow from './TableRow';
import Pagination from './Pagination';

const Table = ({ filtered }) => {
    const [data, setData] = useState(filtered);
    const [checked, setChecked] = useState(false)
    const [sortByName, setSortByName] = useState(true);
    const [sortByTitle, setSortByTitle] = useState(true);
    const [sortByCompany, setSortByCompany] = useState(true);
    const [sortByDate, setSortByDate] = useState(true);

    const handleSort = (attr) => {
        switch (attr) {
            case 'name':
                setSortByName(!sortByName);
                !sortByName ? setData((prev) => prev.sort((a, b) => a.name.localeCompare(b.name))) : setData((prev) => prev.sort((a, b) => b.name.localeCompare(a.name)))
                break;
            case 'title':
                setSortByTitle(!sortByTitle);
                !sortByTitle ? setData((prev) => prev.sort((a, b) => a.title.localeCompare(b.title))) : setData((prev) => prev.sort((a, b) => b.title.localeCompare(a.title)))
                break;
            case 'company':
                setSortByCompany(!sortByCompany);
                !sortByCompany ? setData((prev) => prev.sort((a, b) => a.company.localeCompare(b.company))) : setData((prev) => prev.sort((a, b) => b.company.localeCompare(a.company)))
                break;
            case 'date':
                setSortByDate(!sortByDate);
                !sortByDate ? setData((prev) => prev.sort((a, b) => new Date(a.event_date) - new Date(b.event_date))) : setData((prev) => prev.sort((a, b) => new Date(b.event_date) - new Date(a.event_date)))
                break;
            default:
                break;
        }
    }

    return (
        <>
            {/*<!-- Component: Underline Table --> */}
            <div className="w-full overflow-auto h-[37em]">
                <table className="w-full text-left border-collapse rounded w-overflow-x-auto " cellSpacing="0">
                    <tbody>
                        <tr className="border-b border-slate-300 bg-slate-100">
                            <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">
                                <input
                                    className="peer mt-1 h-4 w-4 cursor-pointer appearance-none rounded border-2 border-slate-400 bg-white transition-colors checked:border-emerald-500 checked:bg-emerald-500 checked:hover:border-emerald-600 checked:hover:bg-emerald-600 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() => setChecked(!checked)}
                                    id="id-c01"
                                />
                            </th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">
                                <button onClick={() => handleSort('name')} className='flex gap-1 justify-center items-center'>
                                    <span>Name</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 256 256"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                        aria-label="Dashboard icon"
                                        role="graphics-symbol"
                                    >
                                        {
                                            sortByName ? <path
                                                fill='black'
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M204.24 116.24a6 6 0 0 1-8.48 0L134 54.49V216a6 6 0 0 1-12 0V54.49l-61.76 61.75a6 6 0 0 1-8.48-8.48l72-72a6 6 0 0 1 8.48 0l72 72a6 6 0 0 1 0 8.48"
                                            /> :
                                                <path
                                                    fill="black"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m204.24 148.24l-72 72a6 6 0 0 1-8.48 0l-72-72a6 6 0 0 1 8.48-8.48L122 201.51V40a6 6 0 0 1 12 0v161.51l61.76-61.75a6 6 0 0 1 8.48 8.48"
                                                />
                                        }
                                    </svg>
                                </button>
                            </th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">
                                <button onClick={() => handleSort('title')} className='flex gap-1 justify-center items-center'>
                                    <span>Title</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 256 256"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                        aria-label="Dashboard icon"
                                        role="graphics-symbol"
                                    >
                                        {
                                            sortByTitle ? <path
                                                fill='black'
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M204.24 116.24a6 6 0 0 1-8.48 0L134 54.49V216a6 6 0 0 1-12 0V54.49l-61.76 61.75a6 6 0 0 1-8.48-8.48l72-72a6 6 0 0 1 8.48 0l72 72a6 6 0 0 1 0 8.48"
                                            /> :
                                                <path
                                                    fill="black"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m204.24 148.24l-72 72a6 6 0 0 1-8.48 0l-72-72a6 6 0 0 1 8.48-8.48L122 201.51V40a6 6 0 0 1 12 0v161.51l61.76-61.75a6 6 0 0 1 8.48 8.48"
                                                />
                                        }
                                    </svg>
                                </button>
                            </th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">
                                <button onClick={() => handleSort('company')} className='flex gap-1 justify-center items-center'>
                                    <span>Company</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 256 256"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                        aria-label="Dashboard icon"
                                        role="graphics-symbol"
                                    >
                                        {
                                            sortByCompany ? <path
                                                fill='black'
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M204.24 116.24a6 6 0 0 1-8.48 0L134 54.49V216a6 6 0 0 1-12 0V54.49l-61.76 61.75a6 6 0 0 1-8.48-8.48l72-72a6 6 0 0 1 8.48 0l72 72a6 6 0 0 1 0 8.48"
                                            /> :
                                                <path
                                                    fill="black"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m204.24 148.24l-72 72a6 6 0 0 1-8.48 0l-72-72a6 6 0 0 1 8.48-8.48L122 201.51V40a6 6 0 0 1 12 0v161.51l61.76-61.75a6 6 0 0 1 8.48 8.48"
                                                />
                                        }
                                    </svg>
                                </button>
                            </th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Status</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">
                                <button onClick={() => handleSort('date')} className='flex gap-1 justify-center items-center'>
                                    <span>Date</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 256 256"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                        aria-label="Dashboard icon"
                                        role="graphics-symbol"
                                    >
                                        {
                                            sortByDate ? <path
                                                fill='black'
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M204.24 116.24a6 6 0 0 1-8.48 0L134 54.49V216a6 6 0 0 1-12 0V54.49l-61.76 61.75a6 6 0 0 1-8.48-8.48l72-72a6 6 0 0 1 8.48 0l72 72a6 6 0 0 1 0 8.48"
                                            /> :
                                                <path
                                                    fill="black"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m204.24 148.24l-72 72a6 6 0 0 1-8.48 0l-72-72a6 6 0 0 1 8.48-8.48L122 201.51V40a6 6 0 0 1 12 0v161.51l61.76-61.75a6 6 0 0 1 8.48 8.48"
                                                />
                                        }
                                    </svg>
                                </button>
                            </th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Actions</th>
                        </tr>
                        {data.map((item, idx) => <TableRow key={idx} item={item} checked={checked} setChecked={setChecked} />)}
                    </tbody>
                </table>
            </div>
            <Pagination />
        </>
    )
}

export default Table