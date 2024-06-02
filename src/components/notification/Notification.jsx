import React, { useState } from 'react'
import NotificationItem from './NotificationItem'
import NotificationHeader from './NotificationHeader'
import NotificationFooter from './NotificationFooter'
import { DataNotif } from '../../data/DataNotif'
import { useThemeContext } from '../../hooks/context/useThemeContext'

const Notification = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState(DataNotif)
    const [isClick, setIsClick] = useState(false)
    const { theme } = useThemeContext();


    return (
        <div className='relative inline-flex'>
            <button
                className="relative inline-flex items-center text-sm font-medium text-center   focus:outline-none "
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen ? " true" : "false"}
                style={{ color: theme !== null ? theme.text : "gray" }}
            >
                <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 20"
                >
                    <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
                </svg>
                <div className="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 start-2.5 " />
            </button>
            {/* Dropdown menu */}
            <div
                className={`${isOpen ? "flex" : "hidden"
                    } absolute top-full right-0 z-10 mt-1 w-72 list-none flex-col bg-white rounded-lg  shadow-md shadow-slate-500/10 `}
            >
                <NotificationHeader />
                <div className="divide-y divide-gray-100 overflow-y-auto h-72">
                    {data.map((item, idx) => <NotificationItem key={idx} notif={item} />)}
                </div>
                {!isClick && <NotificationFooter data={data} setData={setData} setIsClick={setIsClick} />}
            </div>
        </div>
    )
}

export default Notification