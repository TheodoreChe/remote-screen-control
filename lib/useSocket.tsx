import * as React from 'react';
import { SocketContext } from "./socketContext";

export const useSocket = (
    eventKey?: string,
    callback?: Function
) => {
    const socket = React.useContext(SocketContext);
    const callbackRef = React.useRef(callback);

    callbackRef.current = callback;

    const socketHandlerRef = React.useRef(function() {
        if (callbackRef.current) {
            callbackRef.current.apply(this, arguments);
        }
    });

    const subscribe = () => {
        if (eventKey) {
            socket.on(eventKey, socketHandlerRef.current);
        }
    };

    const unsubscribe = () => {
        if (eventKey) {
            socket.removeListener(eventKey, socketHandlerRef.current);
        }
    };

    React.useEffect(() => {
        subscribe();

        return unsubscribe;
    }, [eventKey]);

    return { socket, unsubscribe, subscribe };
};