import React, { useState } from "react";
import { useEventContext } from "../../hooks/context/useEventContext";
import { useThemeContext } from "../../hooks/context/useThemeContext";
import moment from "moment";

const BrgyServiceDetails = () => {
  const { event } = useEventContext();
  const [isEditMode, setIsEditMode] = useState(false);
  const { theme } = useThemeContext();
  const [eventDate, setEventDate] = useState(
    event ? moment(event.event_date).format("MMMM DD, YYYY") : ""
  );

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
  };

  const handleCloseClick = () => {
    setIsEditMode(false);
  };
  const handleDateChange = (e) => {
    setEventDate(moment(e.target.value).format("MMMM DD, YYYY"));
  };

  const themeStyles = {
    borderColor: theme ? theme.accent : "border-gray-300",
    focusBorderColor: theme ? theme.accent : "focus:border-blue-500",
    backgroundColor: theme ? theme.neutral : "bg-gray-200",
    editBackgroundColor: theme ? theme.bg_primary : "bg-white",
  };

  return (
    <div className="h-[800px] p-4">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row space-x-8">
          <div className="w-[80%] flex flex-col">
            {event && event.collections && event.collections.banner && (
              <>
                <div
                  className=""
                  style={{ borderColor: themeStyles.accentColor }}
                >
                  <img
                    src={event.collections.banner.link}
                    alt="Event Banner"
                    className={`h-[15rem] w-full object-cover object-center shadow-xl ${
                      isEditMode ? "rounded-t-xl" : "rounded-xl"
                    }`}
                  />
                </div>

                {isEditMode && (
                  <label className="w-full bg-white border-gray-300 shadow-md rounded-b-xl">
                    <span className="sr-only">Choose profile photo</span>
                    <input
                      type="file"
                      // onChange={handleBannerChange}
                      name="banner"
                      accept="image/*"
                      // value={!banner ? "" : banner.originalname}
                      disabled={!isEditMode}
                      className="block w-full rounded-b-xl text-sm text-slate-500 file:mr-4 file:py-2 file:px-4  file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                    />
                  </label>
                )}
              </>
            )}
          </div>

          <div className="w-[20%] flex flex-col ">
            {event && event.collections && event.collections.logo && (
              <>
                <div className="">
                  <img
                    src={event.collections.logo.link}
                    alt="Event Logo"
                    className={`h-[15rem] w-full object-cover object-center shadow-xl ${
                      isEditMode ? "rounded-t-xl" : "rounded-xl"
                    }`}
                  />
                </div>

                {isEditMode && (
                  <label className="w-full bg-white border-gray-300 shadow-md rounded-b-xl">
                    <span className="sr-only">Choose profile photo</span>
                    <input
                      type="file"
                      // onChange={handleLogoChange}
                      name="logo"
                      accept="image/*"
                      // value={!logo ? "" : logo.originalname}
                      disabled={!isEditMode}
                      className="block w-full rounded-b-xl text-sm text-slate-500 file:mr-4 file:py-2 file:px-4  file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                    />
                  </label>
                )}
              </>
            )}
          </div>
        </div>

        <div className="">
          <div className="mb-4">
            <label className="block text-black mb-1">Service ID:</label>
            <input
              type="text"
              value={event !== null ? event.event_id : ""}
              disabled
              className={`w-full p-2 border rounded-md focus:outline-none disabled:${themeStyles.backgroundColor}`}
              style={{
                borderColor: themeStyles.borderColor,
                backgroundColor: themeStyles.backgroundColor,
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-black mb-1">Service Name:</label>
            <input
              type="text"
              value={event !== null ? event.event_name : ""}
              disabled={!isEditMode}
              className={`w-full p-2 border rounded-md focus:outline-none ${
                isEditMode
                  ? themeStyles.editBackgroundColor
                  : themeStyles.backgroundColor
              }`}
              style={{
                borderColor: themeStyles.borderColor,
                backgroundColor: themeStyles.backgroundColor,
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-black mb-1">Service Type:</label>
            <select
              name="type"
              // onChange={handleChange}
              className={`w-full p-2 border rounded-lg focus:outline-none ${
                isEditMode
                  ? themeStyles.editBackgroundColor
                  : themeStyles.backgroundColor
              }`}
              disabled={!isEditMode}
              // value={service.type}
              style={{
                borderColor: themeStyles.borderColor,
                backgroundColor: themeStyles.backgroundColor,
              }}
            >
              <option value="Healthcare">Healthcare Services</option>
              <option value="Education">Education Services</option>
              <option value="Social Welfare">Social Welfare Services</option>
              <option value="Security and Safety">
                Security and Safety Services
              </option>
              <option value="Infrastructure">Infrastructure Services</option>
              <option value="Community">Community Services</option>
              <option value="Administrative">Administrative Services</option>
              <option value="Environmental">Environmental Services</option>
            </select>
          </div>

          <div className="mb-4">
            <label className={`block mb-1 ${themeStyles.textColor}`}>Details:</label>
            <input
              type="text"
              value={event !== null ? event.details : ""}
              disabled={!isEditMode}
              className={`w-full p-2 border rounded-md focus:outline-none ${
                isEditMode
                  ? themeStyles.editBackgroundColor
                  : themeStyles.backgroundColor
              }`}
              style={{ borderColor: themeStyles.borderColor, backgroundColor: themeStyles.backgroundColor }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-black mb-1">Service Fee:</label>
            <input
              className={`w-full p-2 border rounded-lg focus:outline-none ${
                isEditMode
                  ? themeStyles.editBackgroundColor
                  : themeStyles.backgroundColor
              }`}
              id="fee"
              name="fee"
              type="number"
              // value={service && service.fee}
              // onChange={handleChange}
              disabled={!isEditMode}
              placeholder="Service Fee"
              style={{
                borderColor: themeStyles.borderColor,
                backgroundColor: themeStyles.backgroundColor,
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex mt-4 justify-end ">
        {isEditMode && (
          <button
            onClick={handleCloseClick}
            className="p-2 bg-pink-700 text-white rounded mr-4 px-10"
          >
            CLOSE
          </button>
        )}
        <button
          onClick={handleEditClick}
          className="p-2 bg-teal-800 text-white rounded px-10"
        >
          {isEditMode ? "SAVE" : "EDIT"}
        </button>
      </div>
    </div>
  );
};

export default BrgyServiceDetails;
