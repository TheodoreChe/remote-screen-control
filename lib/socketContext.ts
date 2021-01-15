import * as React from 'react';

export const SocketContext = React.createContext<SocketIOClient.Socket>({} as SocketIOClient.Socket);
