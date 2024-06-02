import { useReducer, createContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                credentials: action.payload,
                user: null,
            };
        case "LOGOUT":
            return {
                credentials: null,
                user: null,
            }
        default:
            return state;
    }
};

// Returns the provider we need to access the context inside of it
export const AuthContextProvider = ({ children }) => {
    // useReducer
    // similar to useState but how we update the state object
    const [state, dispatch] = useReducer(AuthReducer, {
        credentials: null,
        user: null,
    });

    useEffect(() => {
        const credentials = JSON.parse(localStorage.getItem("credentials"));

        if (credentials) {
            dispatch({ type: "LOGIN", payload: credentials })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
