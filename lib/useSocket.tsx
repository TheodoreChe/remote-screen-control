import * as React from 'react';
import io from 'socket.io-client';

export const useSocket = (host: undefined | string) => {
    const [socket, setSocket] = React.useState<SocketIOClient.Socket>();

    React.useEffect(() => {
        if (host) {
            const socketOptions = {
                transports: ['websocket']
            };
            const socketIo = io(host, socketOptions);

            setSocket(socketIo);
            function cleanup() {
                socketIo.disconnect();
            }

            return cleanup;
        }
    }, []);

    console.log('connected: ', socket?.connected);
    console.log('connected: ',host);
    return socket;
};
