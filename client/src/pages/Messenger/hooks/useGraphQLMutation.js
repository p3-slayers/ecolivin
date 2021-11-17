import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_NEW_CONTACT, ADD_NEW_CONVERSATION, ADD_MESSAGE_TO_CONVERSATION } from '../../../utils/mutations';
import { QUERY_USER_CONVERSATIONS, QUERY_SINGLE_USER} from '../../../utils/queries';

export default function useGraphQLMutation(type, args) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const [mutationSetter] = useMutation(type)

  useEffect(() => {
    setTimeout(() => {
      let updatedData = mutationSetter({
        variables: {
          ...args
        }
      })
      .then((data) => {
        setData(data)
        setIsPending(false)
        setError(null)
      })
      .catch(err => {
        setIsPending(false);
        setError(err)
      })
    }, 1000)
  })

  return { data, isPending, error }
}