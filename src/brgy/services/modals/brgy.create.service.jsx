import React from "react";
import Dropbox from "./brgy.dropbox";
import { useState } from "react";

function CreateServiceModal({ isOpen, onClose }) {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    e.preventDefault();

    setFiles([...files, ...e.target.files]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-slate-300/20 backdrop-blur-sm">
      <div
        className="flex max-h-[90vh] w-[900px] flex-col gap-4 overflow-hidden rounded-xl bg-white text-slate-500 shadow-xl shadow-slate-700/10"
        id="modal"
        role="document"
      >
        {/* Modal content */}
        <header className="flex items-center p-3  bg-teal-700 ">
          <div className="flex justify-between items-center overflow-hidden rounded-t-2xl">
            <h3 className="flex text-lg font-medium text-white ml-3">
              CREATE SERVICE
            </h3>
          </div>
        </header>

        <div>
          {/* form for adding servoice */}
          <div className="scrollbarWidth scrollbarTrack scrollbarHover scrollbarThumb flex flex-col mx-auto w-full px-5 overflow-y-auto relative h-[470px]">
            <form>
              {/* Logo and Banner */}
              <div className="flex mb-4 w-full flex-col md:flex-row sm:space-x-0 md:space-x-2 sm:space-y-2 md:space-y-0">
                <div className="w-full">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Logo
                  </label>
                  <div className="flex flex-col items-center space-y-2 relative">
                    <div
                      className={`w-full border "border-gray-300"
                      `}
                    >
                      <img
                        className="w-[200px] md:w-[250px]  lg:w-full md:h-[140px] lg:h-[250px] object-cover"
                        id="add_logo"
                        alt="Current profile photo"
                      />{" "}
                      {/* <CiImageOn
                      size={250}
                      className={`${!logo ? "" : "hidden"} mx-auto`}
                    /> */}
                    </div>
                    <label className="w-full bg-white border">
                      <span className="sr-only">Choose logo photo</span>
                      <input
                        type="file"
                        // onChange={handleLogoChange}
                        name="logo"
                        accept="image/*"
                        // value={!logo ? "" : logo.originalname}
                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4  file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                      />
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Banner
                  </label>
                  <div className="flex flex-col items-center space-y-2 relative">
                    <div className={`w-full border `}>
                      <img
                        className="w-[200px] md:w-[250px]  lg:w-full md:h-[140px] lg:h-[250px] object-cover"
                        id="add_banner"
                        alt="Current profile photo"
                      />
                      {/* <CiImageOn
                      size={250}
                      className={`${!logo ? "" : "hidden"} mx-auto`}
                    /> */}
                    </div>
                    <label className="w-full bg-white border">
                      <span className="sr-only">Choose banner photo</span>
                      <input
                        type="file"
                        // onChange={handleBannerChange}
                        name="banner"
                        accept="image/*"
                        // value={!banner ? "" : banner.originalname}
                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4  file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Service Name
                </label>
                <input
                  id="name"
                  className="shadow appearance-none border w-full py-2 px-3 text-sm text-black rounded-lg focus:border-green-500 focus:ring-green-500 focus:outline-none focus:shadow-outline"
                  name="name"
                  type="text"
                  // value={service.name}
                  // onChange={handleChange}
                  placeholder="Service Name"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="type"
                >
                  Service Type
                </label>
                <select
                  name="type"
                  // onChange={handleChange}
                  className="shadow  border w-full py-2 px-4 text-sm text-black rounded-lg focus:border-green-500 focus:ring-green-500 focus:outline-none focus:shadow-outline"
                >
                  <option value="Healthcare">Healthcare Services</option>
                  <option value="Education">Education Services</option>
                  <option value="Social Welfare">
                    Social Welfare Services
                  </option>
                  <option value="Security and Safety">
                    Security and Safety Services
                  </option>
                  <option value="Infrastructure">
                    Infrastructure Services
                  </option>
                  <option value="Community">Community Services</option>
                  <option value="Administrative">
                    Administrative Services
                  </option>
                  <option value="Environmental">Environmental Services</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-bold text-gray-700 "
                >
                  Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  name="details"
                  // value={service.details}
                  // onChange={handleChange}
                  className="shadow appearance-none border w-full p-2.5 text-sm text-black rounded-lg focus:border-green-500 focus:ring-green-500 focus:outline-none focus:shadow-outline"
                  placeholder="Enter service details..."
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="fee"
                >
                  Service Fee
                </label>
                <input
                  className="shadow appearance-none border w-full py-2 px-3 text-sm text-black rounded-lg focus:border-green-500 focus:ring-green-500 focus:outline-none focus:shadow-outline"
                  id="fee"
                  name="fee"
                  type="number"
                  // value={service.fee}
                  // onChange={handleChange}
                  placeholder="Service Fee"
                />
              </div>

              <Dropbox
                files={files}
                setFiles={setFiles}
                handleFileChange={handleFileChange}
                // handleSubmit={handleSubmit}
              />
            </form>
          </div>

          {/* Buttons */}
          <div className="flex justify-center items-center gap-x-1 px-2 py-2 bg-[#f7f7f7] dark:border-gray-700 ">
            <div className="sm:space-x-0 md:space-x-2 sm:space-y-2 md:space-y-0 w-full flex sm:flex-col md:flex-row justify-end">
              <button
                type="button"
                className="h-[2.5rem] py-1 px-10 gap-2 rounded-md text-sm font-base bg-pink-800 hover:bg-pink-700 text-white shadow-sm"
                data-hs-overlay="#hs-create-service-modal"
                onClick={onClose}
              >
                CLOSE
              </button>
              <button
                type="button"
                className="h-[2.5rem] py-1 px-10 gap-2 rounded-md text-sm font-base bg-teal-900 hover:bg-teal-800 text-white shadow-sm"
                // onClick={handleSubmit}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateServiceModal;
