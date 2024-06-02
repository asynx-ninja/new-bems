import React, { useState } from 'react';
import { useEventContext } from '../../hooks/context/useEventContext';
import { useThemeContext } from '../../hooks/context/useThemeContext';
import moment from 'moment';

const EventDetails = () => {
  const { event } = useEventContext();
  const [isEditMode, setIsEditMode] = useState(false);
  const { theme } = useThemeContext();
  const [eventDate, setEventDate] = useState(event ? moment(event.event_date).format('MMMM DD, YYYY') : '');

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
    borderColor: theme ? theme.accent : 'border-gray-300',
    focusBorderColor: theme ? theme.accent : 'focus:border-blue-500',
    backgroundColor: theme ? theme.neutral : 'bg-gray-200',
    editBackgroundColor: theme ? theme.bg_primary : 'bg-white',
  };

  return (
    <div className='h-[800px] p-4'>
      <div className='flex flex-col space-y-6'>
        <div className='flex flex-row space-x-8'>
          <div className='w-[100%] flex flex-col'>
            {event && event.collections && event.collections.banner && (
              <>
                <div className=''>
                  <img src={event.collections.banner.link} alt='Event Banner' className='h-[15rem] w-full object-cover object-center' />
                </div>
                {isEditMode && (
                  <input type='file' accept='image/*' className='mt-4' />
                )}
              </>
            )}
          </div>
          <div className=' w-[30%] flex flex-col '>
            {event && event.collections && event.collections.logo && (
              <>
                <div className=''>
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
            <label className='block text-black mb-1'>ID:</label>
            <input
              type='text'
              value={event !== null ? event.event_id : ''}
              disabled
              className={`w-full p-2 border rounded-md focus:outline-none disabled:${themeStyles.backgroundColor}`}
              style={{ borderColor: themeStyles.borderColor, backgroundColor: themeStyles.backgroundColor }}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-black mb-1'>Name:</label>
            <input
              type='text'
              value={event !== null ? event.event_name : ''}
              disabled={!isEditMode}
              className={`w-full p-2 border rounded-md focus:outline-none ${isEditMode ? themeStyles.editBackgroundColor : themeStyles.backgroundColor}`}
              style={{ borderColor: isEditMode ? themeStyles.borderColor : 'border-gray-300', backgroundColor: isEditMode ? themeStyles.editBackgroundColor : themeStyles.backgroundColor }}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-black mb-1'>Details:</label>
            <input
              type='text'
              value={event !== null ? event.details : ''}
              disabled={!isEditMode}
              className={`w-full p-2 border rounded-md focus:outline-none ${isEditMode ? themeStyles.editBackgroundColor : themeStyles.backgroundColor}`}
              style={{ borderColor: isEditMode ? themeStyles.borderColor : 'border-gray-300', backgroundColor: isEditMode ? themeStyles.editBackgroundColor : themeStyles.backgroundColor }}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-black mb-1'>Event Date:</label>
            {isEditMode ? (
              <input
                type='date'
                value={moment(eventDate, 'MMMM DD, YYYY').format('YYYY-MM-DD')}
                onChange={handleDateChange}
                className={`w-full p-2 border rounded-md focus:outline-none ${themeStyles.editBackgroundColor}`}
                style={{ borderColor: themeStyles.borderColor, backgroundColor: themeStyles.editBackgroundColor }}
              />
            ) : (
              <input
                type='text'
                value={eventDate}
                disabled
                className={`w-full p-2 border rounded-md focus:outline-none ${themeStyles.backgroundColor}`}
                style={{ borderColor: 'border-gray-300', backgroundColor: themeStyles.backgroundColor }}
              />
            )}
          </div>
          <div className='mb-4'>
            <label className='block text-black mb-1'>Is Open:</label>
            <input
              type='text'
              value={event !== null ? (event.isOpen ? 'Yes' : 'No') : ''}
              disabled={!isEditMode}
              className={`w-full p-2 border rounded-md focus:outline-none ${isEditMode ? themeStyles.editBackgroundColor : themeStyles.backgroundColor}`}
              style={{ borderColor: isEditMode ? themeStyles.borderColor : 'border-gray-300', backgroundColor: isEditMode ? themeStyles.editBackgroundColor : themeStyles.backgroundColor }}
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

export default EventDetails;
