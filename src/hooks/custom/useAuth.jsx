import axios from 'axios';
import { useAuthContext } from '../context/useAuthContext';

export const useAuth = () => {
    const { dispatch } = useAuthContext();

    const useLogin = async (user) => {
        try {
            console.log(`${import.meta.env.VITE_API}/auth/login`)

            const response = await axios.post(`${import.meta.env.VITE_API}/auth/login`, { ...user }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            if (response.status === 200) {
                // save the user to local storage
                localStorage.setItem('credentials', JSON.stringify(response.data))

                // update the auth context
                dispatch({ type: 'LOGIN', payload: response.data })

                return response.data;
            }
        } catch (err) {
            console.log(err);
        }
    }

    const useLogout = () => {
        // remove user from storage
        localStorage.removeItem('credentials')

        // dispatch logout action
        dispatch({ type: 'LOGOUT' })
    }

    return { useLogin, useLogout }
};