import React from 'react'
import { useThemeContext } from '../../hooks/context/useThemeContext'

const Footer = () => {
    const { theme } = useThemeContext();

    return (
        <footer className='border-t border-gray-200' style={{ backgroundColor: theme !== null ? theme.bg_primary : "rgb(241 245 249)", borderTop: `1px solid ${theme !== null ? theme.text : "#eeeeee"}` }}>
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm sm:text-center " style={{ color: theme !== null ? theme.text : "rgb(51 65 85)" }}>
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