import React from 'react'

const SidebarHeader = () => {
  return (
      <div className="flex flex-col items-center gap-4 border-b border-slate-200 p-6 bg-[url('/imgs/Header.png')] bg-center">
          <div className="shrink-0">
              <a
                  href="#"
                  className="relative flex h-12 w-12 items-center justify-center rounded-full text-white"
              >
                  <img
                      src="https://i.pravatar.cc/40?img=7"
                      alt="user name"
                      title="user name"
                      width="48"
                      height="48"
                      className="max-w-full rounded-full"
                  />
                  <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-emerald-500 p-1 text-sm text-white">
                      <span className="sr-only"> online </span>
                  </span>
              </a>
          </div>
          <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0 text-center">
              <h4 className="w-full truncate text-base text-white font-medium">
                  Luke Skywalker
              </h4>
              <p className="w-full truncate text-sm text-slate-100">
                  Municipality Administrator
              </p>
          </div>
      </div>
  )
}

export default SidebarHeader