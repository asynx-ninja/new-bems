import { useState, useEffect } from "react";
import { useEventContext } from "../context/useEventContext";

const useGetEvent = () => {
    const [loading, setLoading] = useState(true);
    const { dispatch } = useEventContext();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_ACCESS_KEY}/events/brgys_events/`);
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