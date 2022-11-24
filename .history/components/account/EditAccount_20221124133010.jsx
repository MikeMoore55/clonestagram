import React,{useState} from 'react';
import Link from 'next/link';
import Router,{useRouter} from 'next/router';
import { SupaBaseDB } from '../../utils/dbconnect';
import { AiOutlinePicture } from "react-icons/ai";
import Footer from '../Layout/Footer';
import styles from '../../styles/EditAccount.module.css';


export default function EditAccountForm({ account }) {
  console.log(account);
  const router = useRouter();

  const profile = account;

  // to get specific data
  function extractData(arr, prop) {
      const extractedValue = arr.map(item => item[prop]);
      return extractedValue;
  };

  // getting all the original data
  const profile_username = extractData(profile, 'username');
  const original_username = profile_username.toString();

  const profile_id = extractData(profile, 'account_id');
  const userId = profile_id.toString();

  const profile_bio = extractData(profile, 'bio');
  const original_bio = profile_bio.toString();
  
  const profile_dob = extractData(profile, 'birth_date');
  const original_dob = profile_dob.toString();
  
  const profile_pic = extractData(profile, 'profile_pic');
  const original_pic = profile_pic.toString();
  
  
  const [username, setUsername] = useState(original_username); // set originals as default
  const [bio, setBio] = useState(original_bio); // set originals as default
  const [dob, setDOB] = useState(original_dob); // set originals as default
  const [profileImg, setProfileImg] = useState(original_pic); // set originals as default
  const [errMsg, setErrMsg] = useState('');
  
  // image upload function
  const handleImageUpload = async (e) => {
        e.preventDefault();
        
        let file;
        if (e.target.files) {
            file = e.target.files[0];
        };

        const res = await SupaBaseDB
            .storage.from("profile-pics").upload("public/" + file?.name, file);
        
        setProfileImg("https://brhqhwzkkolxuilfhwkx.supabase.co/storage/v1/object/public/profile-pics/public/" + file.name, file)
        if (res.data) {
            console.log(res.data);
        } else if (res.error) {
            console.log(res.error['message']);
            setErrMsg(res.error['message']);
        };

    };

  // updating function
  const updateAccount = async (e) => {
    e.preventDefault();

    // to update account
    const updatedAcc = await SupaBaseDB
      .from('account')
      .update({
        username: username,
        bio: bio,
        profile_pic: profileImg,
        birth_date: dob
      })
      .eq('account_id', userId)
    
    // to update the posts "account info"
    const updatedPost = await SupaBaseDB
      .from('posts')
      .update({
        user_username: username,
        user_profilepic: profileImg
      })
    .eq('user_id', userId )
  
    if (updatedAcc.error) {
      setErrMsg(JSON.stringify(updatedAcc.error['message']));
      console.log(updatedAcc.error['message']);
    }
    else if (updatedPost.error) {
      setErrMsg(JSON.stringify(updatedPost.error['message']));
    }
    else {
      setErrMsg("account successfully updated!")
      router.push("/home");
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => {updateAccount(e)}} className={styles.editForm}>
                
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
             />
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
            />
          </div>

          <div>
            <label className={styles.label}>
              Birth Date:
            </label>
            <input 
            type='date' 
            className={styles.input}
            value={dob} 
            onChange={(e) => setDOB(e.target.value)} 
            />
          </div>
        </div>

        <div>
            <label className={styles.label}>
              Profile Image:
            </label>
            <br />
          <br />
          <br/>
            
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
            <br />
            <br/>
            
          </div>

        <div className={styles.btnContainer}>
          <button type='submit' className={styles.updateBtn}>
            Update
          </button>

          <button className={styles.cancelBtn}>
            <Link href={'/home'}>
              Cancel
            </Link>
          </button>
        </div>

        <p className={styles.errMsg}>
          {errMsg}
        </p>

      </form>

      {/* for a cool background effect */}
      <div className={styles.backgroundFeature}>
        1
      </div>

      <Footer/>
      
    </div>
  );
};