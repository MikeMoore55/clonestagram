import React,{useState} from 'react';
import Link from 'next/link';
import { SupaBaseDB } from '../../utils/dbconnect';
import { AiOutlinePicture } from "react-icons/ai";
import styles from '../../styles/EditAccount.module.css';


export default function EditAccountForm({ account }) {
  console.log(account);

  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [dob, setDOB] = useState('');
  const [profileImg, setProfileImg] = useState('');
  const [errMsg, setErrMsg] = useState('');



  const handleImageUpload = async (e) => {
        e.preventDefault();
        
        let file;
        if (e.target.files) {
            file = e.target.files[0];
        };

        const res = await SupaBaseDB
            .storage.from("profile-pics").upload("public/" + file?.name, file);
        
        setProfileImg("https://brhqhwzkkolxuilfhwkx.supabase.co/storage/v1/object/public/profile-pics/" + file.name, file)
        if (res.data) {
            console.log(res.data);
        } else if (res.error) {
            console.log(res.error['message']);
            setErrMsg(res.error['message']);
        };

    };

  const updateAccount = async () => {

  }

  return (
    <div className={styles.container}>
      <form onSubmit={updateAccount} className={styles.signUpForm}>
                
        <h2 className={styles.heading}>
          Edit Your Account
        </h2>

        <div className={styles.inputAreas}>
          <div>
            <label className={styles.label}>
              Username:
            </label>
            <input
              type='text'
              className={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='username' />
          </div>
          <div>
            <label className={styles.label}>
              Bio:
            </label>
            <input
              type='text'
              className={styles.input}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder='******' />
          </div>
          <div>
            <label for='fileInput' className={styles.ImageLabel}>
                    
              <span className={styles.imageIcon}>
                <AiOutlinePicture />
              </span>
              <input
                id='fileInput'
                className={styles.fileInput}
                type='file'
                accept="image/*"
                onChange={(e) => { handleImageUpload(e); }}
              />
            </label>
          </div>
          <div>
            <label className={styles.label}>
              Birth Date:
            </label>
            <input 
            type='text' 
            className={styles.input}
            value={dob} 
            onChange={(e) => setDOB(e.target.value)} 
            placeholder='******'/>
          </div>
        </div>

        <button type='submit' className={styles.btn}>
          Update
        </button>

        <p className={styles.errMsg}>
          {errMsg}
        </p>

      </form>

      {/* for a cool background effect */}
            <div className={styles.backgroundFeature}>
                1
      </div>
      
    </div>
  );
};