import React from 'react'

const SidebarAlert = () => {
    return (
        <div className="p-3">
            <div
                className="w-full rounded border border-cyan-100 bg-cyan-50 px-4 py-3 text-sm text-cyan-500"
                role="alert"
            >
                <h3 className="mb-2 font-semibold">Backup completed.</h3>
                <p>
                    You successfully read this important alert message. Blue often
                    indicates a neutral informative change or action.{" "}
                </p>
            </div>
        </div>
    )
}

export default SidebarAlert