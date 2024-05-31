import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import Table from '../components/table/Table'
import Tabs from '../components/table/Tabs'

const EventsPage = () => {
  const Layout = () => (
    <div>
      <div className='mb-3 flex justify-between items-end'>
        <h2 className="flex flex-col items-start text-3xl font-medium lg:items-center md:flex-row text-slate-700">Events Management</h2>
        <a className='underline text-blue-500 font-medium' href="">Go to Archived Events</a>
      </div>
      <Tabs />
      {/* <Table /> */}
    </div>
  )

  return (
    <DefaultLayout component={<Layout />} />
  )
}

export default EventsPage