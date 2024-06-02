import React from "react";

function CreateServiceModal({}) {
  return (
    <div>
      <div
        id="hs-create-service-modal"
        className="hs-overlay hidden fixed top-0 left-0 z-[80] w-full h-full overflow-x-hidden overflow-y-auto flex items-center justify-center "
      >
        {/* Modal */}
        <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 px-3 py-5 md:px-5 opacity-0 transition-all w-full h-auto">
          <div className="flex flex-col bg-white shadow-sm rounded-t-3xl rounded-b-3xl w-full h-full   md:max-w-xl lg:max-w-2xl xxl:max-w-3xl mx-auto max-h-screen">
            {/* Header */}
            <div
              className="py-5 px-3 flex justify-between items-center overflow-hidden rounded-t-2xl"
              //   style={{
              //     background: `radial-gradient(ellipse at bottom, ${information?.theme?.gradient?.start}, ${information?.theme?.gradient?.end})`,
              //   }}
            >
              <h3
                className="font-bold text-white mx-auto md:text-xl text-center"
                style={{ letterSpacing: "0.3em" }}
              >
                CREATE SERVICE
              </h3>
            </div>

            <div className="scrollbarWidth scrollbarTrack scrollbarHover scrollbarThumb flex flex-col mx-auto w-full py-5 px-5 overflow-y-auto relative h-[470px]">
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
                        className=" w-[200px] md:w-[250px]  lg:w-full md:h-[140px] lg:h-[250px] object-cover"
                        id="add_logo"
                        alt="Current profile photo"
                      />
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
                      />{" "}
                      {/* <CiImageOn
                        size={250}
                        className={`${!logo ? "" : "hidden"} mx-auto`}
                      /> */}
                    </div>
                    <label className="w-full bg-white border ">
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
                  //   value={service.name}
                  //   onChange={handleChange}
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
                  //   onChange={handleChange}
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
                  //   value={service.details}
                  //   onChange={handleChange}
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
                  //   value={service.fee}
                  //   onChange={handleChange}
                  placeholder="Service Fee"
                />
              </div>
              {/* <Dropbox
                files={files}
                setFiles={setFiles}
                handleFileChange={handleFileChange}
                handleSubmit={handleSubmit}
              /> */}
            </div>

            {/* Buttons */}
            <div className="flex justify-center items-center gap-x-2 py-3 px-6 dark:border-gray-700">
              <div className="sm:space-x-0 md:space-x-2 sm:space-y-2 md:space-y-0 w-full flex sm:flex-col md:flex-row">
                <button
                  type="button"
                  className="h-[2.5rem] w-full py-1 px-6 gap-2 rounded-md borde text-sm font-base bg-teal-900 text-white shadow-sm"
                  //   onClick={handleSubmit}
                >
                  CREATE
                </button>
                <button
                  type="button"
                  className="h-[2.5rem] w-full py-1 px-6 gap-2 rounded-md borde text-sm font-base bg-pink-800 text-white shadow-sm"
                  data-hs-overlay="#hs-create-service-modal"
                  //   onClick={handleResetModal}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateServiceModal;
