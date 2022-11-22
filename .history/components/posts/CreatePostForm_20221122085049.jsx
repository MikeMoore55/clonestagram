import React from 'react';
import { SupaBaseDB } from '../../utils/dbconnect';

export default function CreatePostForm() {


    return (
        <div>
            <form>
                <label>Whats on your mind?</label>
                <input type='text' placeholder='say something' />
                <p>or</p>
                <label>Post Something?</label>
                <input type='file' />
                <label>Caption</label>
                <input type='text' placeholder='How was your day?' />
                <button type='submit'>Post</button>
            </form>
        </div>
    );
};
