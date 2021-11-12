import MsgDashboard from './components/MsgDashboard';
import { ContactsProvider } from './contexts/ContactsProvider';
import { ConversationsProvider } from './contexts/ConversationsProvider';
import { SocketProvider } from './contexts/SocketProvider';
import { useGlobalUserContext } from '../../utils/GlobalState';

const Messenger = () => {
  const [state] = useGlobalUserContext();

  const id = state._id;

  console.log(`STATE IS AS FOLLOWS`);
  console.log(state);
  return (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <MsgDashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );
};

export default Messenger;
