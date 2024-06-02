
import React from 'react';

function AddModalEvents({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-slate-300/20 backdrop-blur-sm">
      <div className="flex max-h-[90vh] max-w-sm flex-col gap-4 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10" id="modal" role="document">
        {/* Modal content */}
        <header className="flex items-center">
          <h3 className="flex-1 text-lg font-medium text-slate-700">Add Event</h3>
          <button onClick={onClose} className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded-full focus-visible:outline-none justify-self-center whitespace-nowrap text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent" aria-label="close dialog">
            <span className="relative only:-mx-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" role="graphics-symbol" aria-labelledby="title-79 desc-79">
                <title id="title-79">Close icon</title>
                <desc id="desc-79">Close the modal</desc>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </button>
        </header>
        <div>
          {/* form for adding events */}
          <form>
            {/* Form fields */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddModalEvents;
