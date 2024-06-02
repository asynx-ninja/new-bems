import { useReducer, createContext, useEffect } from "react";

export const EventContext = createContext();

export const EventReducer = (state, action) => {
    switch (action.type) {
        case "SET_EVENTS":
            return {
                events: action.payload.result,
                event: {},
                currentPage: action.payload.currentPage,
                pageCount: action.payload.pageCount,
            };
        default:
            return state;
    }
};

// Returns the provider we need to access the context inside of it
export const EventContextProvider = ({ children }) => {
    // useReducer
    // similar to useState but how we update the state object
    const [state, dispatch] = useReducer(EventReducer, {
        events: null,
        event: {},
        currentPage: 0,
        pageCount: 0,
    });

    return (
        <EventContext.Provider value={{ ...state, dispatch }}>
            {children}
        </EventContext.Provider>
    );
};
