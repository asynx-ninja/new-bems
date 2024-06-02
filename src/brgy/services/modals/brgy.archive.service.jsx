import React from "react";
import Dropbox from "./brgy.dropbox";
import { useState } from "react";

function ArchiveServiceModal({ isOpen, onClose }) {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    e.preventDefault();

    setFiles([...files, ...e.target.files]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-slate-300/20 backdrop-blur-sm">
      <div
        className="flex max-h-[90vh] max-w-2xl flex-col gap-4 overflow-hidden rounded-xl bg-white text-slate-500 shadow-xl shadow-slate-700/10"
        id="modal"
        role="document"
      >
        {/* Modal content */}
        <div>
          {/* Buttons */}
          <div className="flex justify-center items-center gap-x-1 px-2 py-2 bg-[#f7f7f7] dark:border-gray-700 ">
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-400 bg-opacity-0 ">
              <div className="flex items-center justify-center min-h-screen pt-4 pb-20 ">
                <div className="w-10/12 lg:max-w-md p-6 bg-white rounded-lg shadow-xl ">
                  {/* <IoArchiveOutline size={40} className="mb-5 justify-start" /> */}
                  <h3 className="text-2xl font-bold mb-4 text-[#4d4d4d]">Are you sure?</h3>
                  <p className="text-md mb-8">
                    You are going to archive a specific/some of the information
                    that will not be able to view in public
                  </p>
                  <div className="sm:space-x-0 md:space-x-2 sm:space-y-2 md:space-y-0 w-full flex sm:flex-col md:flex-row justify-end">
                    <button
                      type="button"
                      className="h-[2.5rem] py-1 px-10 gap-2 rounded-md text-sm font-base bg-teal-900 hover:bg-teal-800 text-white shadow-sm"
                      // onClick={handleSubmit}
                    >
                      ARCHIVE
                    </button>
                    <button
                      type="button"
                      className="h-[2.5rem] py-1 px-10 gap-2 rounded-md text-sm font-base bg-pink-800 hover:bg-pink-700 text-white shadow-sm"
                      data-hs-overlay="#hs-create-service-modal"
                      onClick={onClose}
                    >
                      CLOSE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchiveServiceModal;
