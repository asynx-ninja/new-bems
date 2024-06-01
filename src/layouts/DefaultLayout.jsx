import React, { useState } from "react";
import SidebarItem from "../components/sidebar/SidebarItem";
import { AdminDataSidebar } from "../data/AdminDataSidebar";
import { StaffDataSidebar } from "../data/StaffDataSidebar";
import SidebarHeader from "../components/sidebar/SidebarHeader";
import SidebarAlert from "../components/sidebar/SidebarAlert";
import SidebarFooter from "../components/sidebar/SidebarFooter";
import TopHeader from "../components/header-footer/TopHeader";
import Footer from "../components/header-footer/Footer";

export default function DefaultLayout({ component, acc_type }) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (  
    <>
      <div className="">
        <aside
          id="nav-menu-4"
          aria-label="Side navigation"
          className={`fixed top-0 bottom-0 left-0 z-40 flex w-64 flex-col border-r border-r-slate-200 bg-white transition-transform sm:translate-x-0 ${
            isSideNavOpen ? "translate-x-0" : " -translate-x-full"
          }`}
        >
          <SidebarHeader />
          <nav
            aria-label="side navigation"
            className="flex-1 divide-y divide-slate-100 overflow-auto"
          >
            <div>
              <ul className="flex flex-1 flex-col gap-1 py-3">
                {acc_type === "Admin" || acc_type === "Head Admin"
                  ? AdminDataSidebar.map((item, idx) => (
                      <SidebarItem
                        key={idx}
                        item={item}
                        setIsSideNavOpen={setIsSideNavOpen}
                        acc_type={acc_type}
                      />
                    ))
                  : StaffDataSidebar.map((item, idx) => (
                      <SidebarItem
                        key={idx}
                        item={item}
                        setIsSideNavOpen={setIsSideNavOpen}
                        acc_type={acc_type}
                      />
                    ))}
              </ul>
            </div>
          </nav>
          {/* ACCOUNT VERIFICATION */}
          {/* <SidebarAlert /> */}
          <SidebarFooter />
        </aside>
        <div className="sm:ml-[256px] w-100">
          <TopHeader
            isSideNavOpen={isSideNavOpen}
            setIsSideNavOpen={setIsSideNavOpen}
          />
          <div className="p-4">{component}</div>
          <Footer />
        </div>
      </div>

      {/*  <!-- Backdrop --> */}
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
          isSideNavOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSideNavOpen(false)}
      ></div>
    </>
  );
}
