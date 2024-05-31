import React from 'react'

const NotificationFooter = ({ data, setData, setIsClick }) => {

    const handleViewAll = () => {
        setData([...data, ...data, ...data])
        setIsClick(true)
    }

    return (
        <button
            onClick={handleViewAll}
            className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100"
        >
            <div className="inline-flex items-center ">
                <svg
                    className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 14"
                >
                    <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                </svg>
                View all
            </div>
        </button>
    )
}

export default NotificationFooter