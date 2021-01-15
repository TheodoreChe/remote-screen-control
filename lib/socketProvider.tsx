import * as React from 'react';
import io from 'socket.io-client';
import { SocketContext } from './socketContext';

export interface ISocketIOProviderProps {
    url: string;
}

export const SocketProvider: React.FC<ISocketIOProviderProps> = ({ url, children }) => {
    const socketRef = React.useRef<SocketIOClient.Socket>();

    if (typeof window === 'undefined') {
        return <>{children}</>;
    }

    if (!socketRef.current) {
        socketRef.current = io(url, {});
    }

    return <SocketContext.Provider value={socketRef.current}>{children}</SocketContext.Provider>;
};
