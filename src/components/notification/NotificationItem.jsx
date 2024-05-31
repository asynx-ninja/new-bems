import React from 'react'

const NotificationItem = ({ notif }) => {
    return (
        <a
            href="#"
            className="flex px-4 py-3 hover:bg-gray-100 "
        >
            <div className="flex-shrink-0 relative">
                <img
                    className="rounded-full w-11 h-11 object-cover"
                    src={notif.image}
                    alt="Jese image"
                    referrerPolicy='no-referrer'
                />
                {notif.icon}
            </div>
            <div className="w-full ps-3">
                <div className="text-gray-500 text-sm mb-1.5 ">
                    New message from{" "}
                    <span className="font-semibold text-gray-900 ">
                        {notif.name}
                    </span>
                    : {notif.message}
                </div>
                <div className="text-xs text-blue-600 dark:text-blue-500">
                    {notif.date}
                </div>
            </div>
        </a>
    )
}

export default NotificationItem