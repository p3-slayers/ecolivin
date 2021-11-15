// This file is equivalent to app.js in the example

import MsgDashboard from './components/MsgDashboard';
import { ContactsProvider } from './contexts/ContactsProvider';
import { ConversationsProvider } from './contexts/ConversationsProvider';
import { SocketProvider } from './contexts/SocketProvider';
import { useGlobalUserContext } from '../../utils/GlobalState';

const Messenger = () => {
  const [user] = useGlobalUserContext();

  const email = user.email;

  // console.log(`STATE FROM MESSENGER IS AS FOLLOWS`);
  // console.log(user);
  // console.log(user.conversations[0].messages);
  // console.log(user.conversations[0].recipients);
  // console.log(user.contacts);
  // console.log(email);
  return (
    <SocketProvider email={user.email}>
      <ContactsProvider>
        <ConversationsProvider email={user.email}>
          <MsgDashboard email={user.email} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );
};

export default Messenger;
