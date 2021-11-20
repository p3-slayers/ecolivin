// This file is equivalent to app.js in the example
import React, { useEffect } from 'react';
import MsgDashboard from './components/MsgDashboard';
import { ContactsProvider } from './contexts/ContactsProvider';
import { ConversationsProvider } from './contexts/ConversationsProvider';
import { SocketProvider } from './contexts/SocketProvider';
import { useGlobalUserContext } from '../../utils/GlobalState';

import { Spring, animated } from "react-spring";

const Messenger = ({ transition }) => {
  const [user] = useGlobalUserContext();

  useEffect(() => {
    console.log(`Messenger.js MOUNTED`)
    return console.log(`Messenger.js UNMOUNTED`)
  }, [])

  return (
    <SocketProvider email={user.email}>
      <ContactsProvider>
        <ConversationsProvider email={user.email}>

          <Spring
            from={transition.from}
            to={transition.to}
            config={transition.config}
          >
            {(props) => (
              <animated.div style={props}>
                <MsgDashboard email={user.email} />
              </animated.div>)}
          </Spring>

        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );
};

export default Messenger;
