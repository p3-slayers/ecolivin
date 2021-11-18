import React, { useState }  from "react";
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { useGlobalUserContext } from '../../utils/GlobalState';

const PostForm = () => {
    const [text, setText] = useState('');
    const [state, dispatch] = useGlobalUserContext();
    const [addPost] = useMutation(ADD_POST);

    console.log("state", state)
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // save to db
        const mutationResponse = await addPost({
          variables: {
            post: text,
            userid: state._id
          },
        });

        console.log(mutationResponse);

        // addPost({ text });
        setText('');
        window.location.reload();
    }

    return (

        <div class="card mx-5 mb-5">
          <div className="card-header">
        <h3>Share your thoughts!</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={handleFormSubmit}
      >
        <div className="card-body">
        <div className="form-group">
        <textarea
          className="form-control" id="message" 
          rows='3'
          placeholder='Create a post'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        </div>
        </div>
        <input type='submit' className='btn btn-primary m-3' value='Submit' />
      </form>
    </div>
    );
}

    
export default PostForm;