import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

// const PORT = process.env.PORT || 3001;

const SocketContext = React.createContext();

export function useSocketContext() {
  return useContext(SocketContext);
}

export function SocketProvider({ email, children }) {
  const [socket, setSocket] = useState();
  console.log(`SOCKET PROVIDER FIRED`)

  useEffect(() => {console.log(`SocketProvider.js MOUNTED`)
  return console.log(`SocketProvider.js UNMOUNTED`)
  }, [])

  useEffect(() => {
    try {
      console.log(`CONNECTING TO ${window.location.origin} with user email ${email}`)
      const newSocket = io(`${window.location.origin}`, { query: { email } });
      setSocket(newSocket);
  
      // must close the prev. socket if we start a new one, because otherwise we will get duplicated messages and slow down server.
      return () => newSocket.close();
    } catch (error) {
      console.log(error)
    }
  }, [email]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
