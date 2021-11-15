import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const PORT = process.env.PORT || 3001;

const SocketContext = React.createContext();

export function useSocketContext() {
  return useContext(SocketContext);
}

export function SocketProvider({ email, children }) {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io(`http://localhost:${PORT}`, { query: { email } });
    setSocket(newSocket);

    // must close the prev. socket if we start a new one, because otherwise we will get duplicated messages and slow down server.
    return () => newSocket.close();
  }, [email]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
