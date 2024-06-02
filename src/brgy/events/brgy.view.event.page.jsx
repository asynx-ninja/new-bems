import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import Breadcrumb from '../../components/breadcrumbs/Breadcrumb';
import MainTabs from './view_events/utils/MainTabs';
import { useEventContext } from '../../hooks/context/useEventContext';

const BrgyViewEvent = () => {
    const { event } = useEventContext();

    const breadcrumbs = [
        {
            path: "Events Management",
            link: "/brgy/events"
        },
        {
            path: "View Event",
            link: null,
        },
    ];

    const Layout = () => (
        <div>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <div className='mb-3 flex justify-between items-end'>
                <h2 className="flex flex-col items-start text-3xl font-medium lg:items-center md:flex-row text-slate-700">{event !== null ? event.event_name : ''}</h2>
                {/* <Link to="/archived_events" className='underline text-blue-500 font-medium' href="">Go to Archived Applications</Link> */}
            </div>
            {/* TABLE OR TABS */}
            <MainTabs />
            {/* <Tabs /> */}
        </div>
    );

    return (
        <DefaultLayout component={<Layout />} />
    );
};

export default BrgyViewEvent;
