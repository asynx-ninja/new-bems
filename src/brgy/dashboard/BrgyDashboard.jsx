import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'

const BrgyDashboard = () => {
    const acc_type = "Admin"

    const Layout = () => (
        <div>asdadadada</div>
    )
    
    return (
        <DefaultLayout component={<Layout />} acc_type={acc_type} />
    )
}

export default BrgyDashboard