import React, { useState } from "react";
import SidebarItem from "../components/sidebar/SidebarItem";
import { AdminDataSidebar } from "../data/AdminDataSidebar";
import { StaffDataSidebar } from "../data/StaffDataSidebar";
import SidebarHeader from "../components/sidebar/SidebarHeader";
import SidebarAlert from "../components/sidebar/SidebarAlert";
import SidebarFooter from "../components/sidebar/SidebarFooter";
import TopHeader from "../components/header-footer/TopHeader";
import Footer from "../components/header-footer/Footer";
import { useThemeContext } from "../hooks/useThemeContext";
import { Link, useLocation } from "react-router-dom";

export default function DefaultLayout({ component }) {
  const acc_type = "Admin"
  const url = useLocation().pathname.split("/")[1];
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)
  const { theme } = useThemeContext();
  const style_maker = {
    "--link-color": theme !== null ? theme.text : "rgb(51 65 85)",
    "--link-bg-color": theme !== null ? theme.neutral : "rgb(236 253 245 / 1)",
    "--link-hover-color": theme !== null ? theme.text : "rgb(16 185 129 / 1)",
    "--active-el-color": theme !== null ? theme.text : "rgb(51 65 85)",
    "--active-el-bg-color": theme !== null ? theme.accent : "rgb(236 253 245 / 1)",
    "--active-el-hover-color": theme !== null ? theme.neutral : "rgb(16 185 129 / 1)",
    "--badge-bg-color": theme !== null ? theme.secondary : "rgb(252 231 243)",
    "--badge-color": theme !== null ? theme.bg_primary : "rgb(236 72 153)",
  };

  return (  
    <>
      <div className="">
        <aside
          id="nav-menu-4"
          aria-label="Side navigation"
          className={`fixed top-0 bottom-0 left-0 z-40 flex w-64 flex-col transition-transform sm:translate-x-0 ${isSideNavOpen ? "translate-x-0" : " -translate-x-full"
            }`}
          style={{ backgroundColor: theme !== null ? theme.bg_primary : "white", borderRight: `1px solid ${theme !== null ? theme.text : "white"}` }}
        >
          <SidebarHeader />
          <nav
            aria-label="side navigation"
            className="flex-1 overflow-auto"
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
            <div style={{ borderTop: `1px solid ${theme !== null ? theme.text : "#eeeeee"}` }}>
              <ul className="flex flex-1 flex-col gap-1 py-3">
                <li className="px-3">
                  <Link
                    onClick={() => setIsSideNavOpen(false)}
                    to={"/themes"}
                    className={`${url === "themes" ? 'active-el' : ''} flex items-center gap-3 rounded p-3 transition-colors link`}
                    style={style_maker}
                  >
                    <div className="flex items-center self-center">
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
                        <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.58 9.71a6 6 0 0 0-7.16 3.58m7.16-3.58A6 6 0 1 1 12 19.972M17.58 9.71a6 6 0 1 0-11.16 0m4 3.58A6 6 0 0 0 10 15.5c0 1.777.773 3.374 2 4.472m-1.58-6.682a6.01 6.01 0 0 1-4-3.58m0 0A6 6 0 1 0 12 19.972" />
                      </svg>
                    </div>
                    <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                      Website Theme
                    </div>
                    <span className="badge inline-flex items-center justify-center rounded-full px-2 text-xs"
                      style={style_maker}
                    >
                      New<span className="sr-only"> new notifications</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          {/* ACCOUNT VERIFICATION */}
          {/* <SidebarAlert /> */}
          <SidebarFooter />
        </aside>
        <div className="sm:ml-[256px] w-100" style={{ backgroundColor: theme !== null ? theme.bg_primary : "white" }}>
          <TopHeader isSideNavOpen={isSideNavOpen} setIsSideNavOpen={setIsSideNavOpen} />
          <div className="p-4">
            {component}
          </div>
          <Footer />
        </div>
      </div >


      {/*  <!-- Backdrop --> */}
      < div
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${isSideNavOpen ? "block" : "hidden"
          }`
        }
        onClick={() => setIsSideNavOpen(false)}
      ></div >
    </>
  );
}
