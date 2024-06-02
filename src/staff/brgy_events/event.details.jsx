import React, { useState } from 'react';
import { useEventContext } from '../../hooks/context/useEventContext';
import { useThemeContext } from '../../hooks/context/useThemeContext';

const EventDetails = () => {
  const { event } = useEventContext();
  const [isEditMode, setIsEditMode] = useState(false);
  const { theme } = useThemeContext;

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
  };

  const handleCloseClick = () => {
    setIsEditMode(false);
  };

  return (
    <div className='h-[700px]  p-4'>
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
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 disabled:bg-gray-200'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-black mb-1'>Name:</label>
            <input
              type='text'
              value={event !== null ? event.event_name : ''}
              disabled={!isEditMode}
              className={`w-full p-2 border ${isEditMode ? 'border-blue-500' : 'border-gray-300'} rounded-md focus:outline-none ${isEditMode ? 'bg-white' : 'bg-gray-200'}`}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-black mb-1'>Details:</label>
            <input
              type='text'
              value={event !== null ? event.details : ''}
              disabled={!isEditMode}
              className={`w-full p-2 border ${isEditMode ? 'border-blue-500' : 'border-gray-300'} rounded-md focus:outline-none ${isEditMode ? 'bg-white' : 'bg-gray-200'}`}
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
