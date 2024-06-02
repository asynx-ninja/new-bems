import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Link } from "react-router-dom";
import Table from "./manage_services/Table";
import { useState } from "react";
import { DataTable } from "../../data/DataTable";
import useGetEvent from "../../hooks/custom/useGetEvent";
import CreateServiceModal from "./modals/brgy.create.service";

const BrgyServicesPage = () => {
  const isLoading = useGetEvent();
  const [data, setData] = useState(DataTable);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("Dashboard");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddModalOpen = () => {
    setIsAddModalOpen(true);
  };

  const handleAddModalClose = () => {
    setIsAddModalOpen(false);
  };

  const navigationItems = [
    { linkName: "Dashboard" },
    { linkName: "Metrics and analytics" },
    { linkName: "Multi-Channel Funnels overview" },
    { linkName: "User settings" },
    { linkName: "User Profile" },
  ];
  const navigationItems1 = [
    { linkName: "Export to PDF" },
    { linkName: "Export to Excel" },
  ];

  const Layout = () => (
    <div>
      <div className="mb-3 flex justify-between items-end">
        <h2 className="flex flex-col items-start text-3xl font-medium lg:items-center md:flex-row text-slate-700">
          Services Management
        </h2>
        <Link
          to="/brgy/archived_services"
          className="underline text-blue-500 font-medium"
          href=""
        >
          Go to Archived Services
        </Link>
      </div>
      {/* TABLE OR TABS */}
      <div className="flex lg:justify-between lg:items-center flex-col lg:flex-row w-full mt-2 lg:mt-0">
        {/* DROPDOWN */}
        <div className="flex justify-start items-start gap-1 w-full lg:w-1/2">
          <div className="relative inline-flex z-0" id="dropdown">
            <button
              className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen ? " true" : "false"}
            >
              <span>{selectedStatus}</span>
              <span className="relative only:-mx-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="t-01 d-01"
                  role="graphics-symbol"
                >
                  <title id="t-01">Button icon</title>
                  <desc id="d-01">An icon describing the buttons usage</desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`${
                isOpen ? "flex" : "hidden"
              } absolute top-full z-10 mt-1 flex w-72 list-none flex-col rounded bg-white py-2 shadow-md shadow-slate-500/10 `}
            >
              {navigationItems.map((item, index) => (
                <button key={index} onClick={() => handleChangeDropdown(item)}>
                  <div
                    className={` ${
                      index === currentItem
                        ? "bg-emerald-50 text-emerald-500"
                        : "bg-none text-slate-500"
                    } flex items-start justify-start gap-2 p-2 px-5 w-full transition-colors duration-300 hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-600 focus:outline-none focus-visible:outline-none`}
                    aria-current={index + 1 === currentItem ? "page" : "false"}
                  >
                    <span className="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
                      <span className="truncate leading-5">
                        {item.linkName}
                      </span>
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="relative inline-flex z-0" id="dropdown">
            <button
              className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-blue-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none"
              onClick={() => setIsOpen1(!isOpen1)}
              aria-expanded={isOpen1 ? " true" : "false"}
            >
              <span>Generate Report</span>
              <span className="relative only:-mx-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="t-01 d-01"
                  role="graphics-symbol"
                >
                  <title id="t-01">Button icon</title>
                  <desc id="d-01">An icon describing the buttons usage</desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`${
                isOpen1 ? "flex" : "hidden"
              } absolute top-full z-10 mt-1 flex w-72 list-none flex-col rounded bg-white py-2 shadow-md shadow-slate-500/10 `}
            >
              {navigationItems1.map((item, index) => (
                <button key={index} onClick={() => handleChangeDropdown(item)}>
                  <div
                    className={` ${
                      index === currentItem
                        ? "bg-blue-50 text-blue-500"
                        : "bg-none text-slate-500"
                    } flex items-start justify-start gap-2 p-2 px-5 w-full transition-colors duration-300 hover:bg-blue-50 hover:text-blue-500 focus:bg-blue-50 focus:text-blue-600 focus:outline-none focus-visible:outline-none`}
                    aria-current={index + 1 === currentItem ? "page" : "false"}
                  >
                    <span className="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
                      <span className="truncate leading-5">
                        {item.linkName}
                      </span>
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex lg:justify-end items-center gap-2 w-full lg:w-1/2">
          <div className="relative my-2 w-full z-0">
            <input
              id="id-s03"
              type="search"
              name="id-s03"
              placeholder="Search here"
              aria-label="Search content"
              className="relative w-full h-10 px-4 pr-12 text-sm transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              aria-label="Search icon"
              role="graphics-symbol"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>

          <button
            className="inline-flex items-center justify-center h-10 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
            onClick={handleAddModalOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
              aria-label="Dashboard icon"
              role="graphics-symbol"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11v5m0 0 2-2m-2 2-2-2M3 6v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Zm2 2v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8H5Z"
              />
            </svg>
            <span>Create Service</span>
          </button>

          <button className="inline-flex items-center justify-center h-10 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
              aria-label="Dashboard icon"
              role="graphics-symbol"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11v5m0 0 2-2m-2 2-2-2M3 6v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Zm2 2v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8H5Z"
              />
            </svg>
            <span>Archive Services</span>
          </button>
        </div>
      </div>
      <Table />
      <CreateServiceModal isOpen={isAddModalOpen} onClose={handleAddModalClose} />
    </div>
    
  );

  return <DefaultLayout component={<Layout />} />;
};

export default BrgyServicesPage;
