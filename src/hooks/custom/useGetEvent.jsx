import { useState, useEffect } from "react";
import { useEventContext } from "../context/useEventContext";
import axios from 'axios';


const useGetEvent = () => {
    const [loading, setLoading] = useState(true);
    const { dispatch } = useEventContext();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API}/events/brgys_events/?brgy=BALITE&isArchived=false`);
                console.log(`${import.meta.env.VITE_API}/events/brgys_events/`)
                dispatch({ type: "SET_EVENTS", payload: response.data })
            } catch (error) {
                console.error('Error fetching events:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return loading;
}

export default useGetEvent;