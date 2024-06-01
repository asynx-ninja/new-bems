import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import { themes } from "../../data/DataTheme"
import { useState, useEffect } from 'react'
import { useThemeContext } from '../../hooks/useThemeContext'
import { memo } from 'react'

const ThemesPage = () => {
    const { theme, setTheme, dispatch } = useThemeContext();

    // useEffect(() => {
    //     localStorage.setItem("theme", JSON.stringify(neutral))
    // }, [neutral])

    const handleTheme = (item) => {
        setTheme(item)
    }

    const handleDefault = () => {
        setTheme(null)
    }

    const Layout = () => (
        <div>
            <div className='mb-3 flex justify-between items-end'>
                <h2 className="flex flex-col items-start text-3xl font-medium lg:items-center md:flex-row " style={{ color: theme !== null ? theme.text : "rgb(51 65 85)" }}>Website Themes</h2>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                {
                    themes.map((item, idx) => (
                        item !== null ?
                            <button key={idx} onClick={() => handleTheme(item.scheme)}>
                                <div className='flex flex-col justify-start items-start shadow-md bg-white border border-white'>
                                    <ul className='flex justify-center items-center w-full'>
                                        <li className='h-36 w-full' style={{ backgroundColor: item.scheme.bg_primary }}></li>
                                        <li className='h-36 w-full' style={{ backgroundColor: item.scheme.primary }}></li>
                                        <li className='h-36 w-full' style={{ backgroundColor: item.scheme.secondary }}></li>
                                        <li className='h-36 w-full' style={{ backgroundColor: item.scheme.accent }}></li>
                                        <li className='h-36 w-full' style={{ backgroundColor: item.scheme.neutral }}></li>
                                        <li className='h-36 w-full' style={{ backgroundColor: item.scheme.text }}></li>
                                    </ul>
                                    <span className='p-4 font-medium'>{item.name}</span>
                                </div>
                            </button> :
                            <button key={idx} onClick={handleDefault}>
                                <div className='flex flex-col justify-start items-start shadow-md bg-white border border-white'>
                                    <ul className='flex justify-center items-center w-full'>
                                        <li className='h-36 w-full bg-[#ec4899]'></li>
                                        <li className='h-36 w-full bg-white'></li>
                                        <li className='h-36 w-full bg-[#fce7f3]'></li>
                                        <li className='h-36 w-full bg-[#10b981]'></li>
                                        <li className='h-36 w-full bg-[#334155]'></li>
                                    </ul>
                                    <span className='p-4 font-medium'>Default</span>
                                </div>
                            </button>
                    ))
                }
            </div>
        </div>
    )

    return (
        <DefaultLayout component={<Layout />} />
    )
}

export default memo(ThemesPage)