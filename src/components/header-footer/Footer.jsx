import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-100 ">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500  sm:text-center ">
                    © 2024{" "}
                    <a href="https://flowbite.com/" className="hover:underline">
                        Barangay E-Services Management™
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>

    )
}

export default Footer