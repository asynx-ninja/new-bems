import React, { useState, useEffect } from 'react';
import { useEventContext } from '../../hooks/context/useEventContext';
import { useThemeContext } from '../../hooks/context/useThemeContext';
import moment from 'moment';

const BrgyEventDetails = () => {
  const { event } = useEventContext();
  const [isEditMode, setIsEditMode] = useState(false);
  const { theme } = useThemeContext();
  const [eventDate, setEventDate] = useState(event ? moment(event.event_date).format('MMMM DD, YYYY') : '');

  useEffect(() => {
    if (event && event.event_date) {
      setEventDate(moment(event.event_date).format('MMMM DD, YYYY'));
    }
  }, [event]);

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
  };

  const handleCloseClick = () => {
    setIsEditMode(false);
  };

  const handleDateChange = (e) => {
    setEventDate(moment(e.target.value).format('MMMM DD, YYYY'));
  };

  const themeStyles = {
    "--link-color": theme !== null ? theme.text : "rgb(51 65 85)",
    "--link-bg-color": theme !== null ? theme.neutral : "rgb(236 253 245 / 1)",
    "--link-hover-color": theme !== null ? theme.text : "rgb(16 185 129 / 1)",
    "--active-el-color": theme !== null ? theme.text : "rgb(51 65 85)",
    "--active-el-bg-color": theme !== null ? theme.accent : "rgb(236 253 245 / 1)",
    "--active-el-hover-color": theme !== null ? theme.neutral : "rgb(16 185 129 / 1)",
    "--badge-bg-color": theme !== null ? theme.secondary : "rgb(252 231 243)",
    "--badge-color": theme !== null ? theme.bg_primary : "rgb(236 72 153)",
    borderColor: theme ? theme.accent : "rgb(16 185 129 / 1)",
    backgroundColor: theme ? theme.neutral : "rgb(236 253 245 / 1)",
    textColor: theme ? theme.text_primary : "text-black",
    accentColor: theme ? theme.accent : "rgb(51 65 85)",
  };

  return (
    <div className='h-[900px] p-4' style={themeStyles}>
      <div className='flex flex-col space-y-6'>
        <div className='flex flex-row space-x-8'>
          <div className='w-[100%] flex flex-col'>
            <label className={`block mb-1 font-bold ${themeStyles.textColor}`}>Event Banner</label>
            {event && event.collections && event.collections.banner && (
              <>
                <div className='border-2' style={{ borderColor: themeStyles.accentColor }}>
                  <img src={event.collections.banner.link} alt='Event Banner' className='h-[15rem] w-full object-cover object-center' />
                </div>
                {isEditMode && (
                  <input type='file' accept='image/*' className='mt-4' />
                )}
              </>
            )}
          </div>
          <div className='w-[30%] flex flex-col'>
            <label className={`block mb-1 font-bold ${themeStyles.textColor}`}>Event Logo</label>
            {event && event.collections && event.collections.logo && (
              <>
                <div className='border-2' style={{ borderColor: themeStyles.accentColor }}>
                  <img src={event.collections.logo.link} alt='Event Logo' className='h-[15rem] w-full object-cover object-center' />
                </div>
                {isEditMode && (
                  <input type='file' accept='image/*' className='mt-4' />
                )}
              </>
            )}
          </div>
        </div>
        <div className=''>
          <div className='mb-4'>
            <label className={`block mb-1 ${themeStyles.textColor}`} >ID:</label>
            <input
              type='text'
              value={event !== null ? event.event_id : ''}
              disabled
              className={`w-full p-2 border rounded-md focus:outline-none`}
              style={{ borderColor: themeStyles.borderColor, backgroundColor: themeStyles.backgroundColor }}
            />
          </div>
          <div className='mb-4'>
            <label className={`block mb-1 ${themeStyles.textColor}`}>Name:</label>
            <input
              type='text'
              value={event !== null ? event.event_name : ''}
              disabled={!isEditMode}
              className={`w-full p-2 border rounded-md focus:outline-none`}
              style={{ borderColor: themeStyles.borderColor, backgroundColor: themeStyles.backgroundColor }}
            />
          </div>
          <div className='mb-4'>
            <label className={`block mb-1 ${themeStyles.textColor}`}>Details:</label>
            <input
              type='text'
              value={event !== null ? event.details : ''}
              disabled={!isEditMode}
              className={`w-full p-2 border rounded-md focus:outline-none`}
              style={{ borderColor: themeStyles.borderColor, backgroundColor: themeStyles.backgroundColor }}
            />
          </div>
          <div className='mb-4'>
            <label className={`block mb-1 ${themeStyles.textColor}`}>Event Date:</label>
            {isEditMode ? (
              <input
                type='date'
                value={moment(eventDate, 'MMMM DD, YYYY').format('YYYY-MM-DD')}
                onChange={handleDateChange}
                className={`w-full p-2 border rounded-md focus:outline-none`}
                style={{ borderColor: themeStyles.borderColor, backgroundColor: themeStyles.backgroundColor }}
              />
            ) : (
              <input
                type='text'
                value={eventDate}
                disabled
                className={`w-full p-2 border rounded-md focus:outline-none`}
                style={{ borderColor: themeStyles.borderColor, backgroundColor: themeStyles.backgroundColor }}
              />
            )}
          </div>
          <div className='mb-4'>
            <label className={`block mb-1 ${themeStyles.textColor}`}>Event Status</label>
            <input
              type='text'
              value={event !== null ? (event.isOpen ? 'Open' : 'Not Open') : ''}
              disabled={!isEditMode}
              className={`w-full p-2 border rounded-md focus:outline-none`}
              style={{ borderColor: themeStyles.borderColor, backgroundColor: themeStyles.backgroundColor }}
            />
          </div>
        </div>
      </div>
      <div className='flex mt-4 justify-end '>
        {isEditMode && (
          <button
            onClick={handleCloseClick}
            className='p-2 bg-red-500 text-white rounded mr-4 px-10'
          >
            Close
          </button>
        )}
        <button
          onClick={handleEditClick}
          className='p-2 bg-green-500 text-white rounded px-10'
        >
          {isEditMode ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default BrgyEventDetails;
