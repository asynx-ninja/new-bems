import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import Breadcrumb from '../../components/breadcrumbs/Breadcrumb'
import MainTabs from './view_staff_event/utils/MainTabs'

const ViewEvent = () => {
    const breadcrumbs = [
        {
            path: "Events Management",
            link: "/staff_eventspage"
        },
        {
            path: "View Event",
            link: null,
        },
    ]

    const Layout = () => (
        <div>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <div className='mb-3 flex justify-between items-end'>
                <h2 className="flex flex-col items-start text-3xl font-medium lg:items-center md:flex-row text-slate-700">Tree Planting</h2>
                {/* <Link to="/archived_events" className='underline text-blue-500 font-medium' href="">Go to Archived Applications</Link> */}
            </div>
            {/* TABLE OR TABS */}
            <MainTabs />
            {/* <Tabs /> */}
        </div>
    )

    return (
        <DefaultLayout component={<Layout />} />
    )
}

export default ViewEvent