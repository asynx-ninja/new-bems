import { useReducer, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeReducer = (state, action) => {
    switch (action.type) {
        case "SET_THEME":
            return {
                theme: action.payload,
            };
        default:
            return state;
    }
};

// Returns the provider we need to access the context inside of it
export const ThemeContextProvider = ({ children }) => {
    // useReducer
    // similar to useState but how we update the state object
    const [state, dispatch] = useReducer(ThemeReducer, {
        theme: null,
    });

    const setTheme = (item) => {
        dispatch({ type: "SET_THEME", payload: item })
    }

    return (
        <ThemeContext.Provider value={{ ...state, setTheme, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};
