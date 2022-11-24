import React from 'react';
import Link from 'next/link';
import { SupaBaseDB } from '../../utils/dbconnect';
import styles from '../../styles/EditAccount.module.css';

export default function EditAccountForm({ account }) {
  console.log(account);

  const handleImageUpload = async (e) => {
        e.preventDefault();
        
        let file;
        if (e.target.files) {
            file = e.target.files[0];
        };

        const res = await SupaBaseDB
            .storage.from("profile-pics").upload("public/" + file?.name, file);
        
        setPostImg("https://brhqhwzkkolxuilfhwkx.supabase.co/storage/v1/object/public/profile-pics/" + file.name, file)
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
    <div>
        <form onSubmit={updateAccount} className={styles.signUpForm}>
                
                <h2 className={styles.heading}>
                  Sign Up
                </h2>

                <div className={styles.inputAreas}>
                    <div>
                        <label className={styles.label}>
                            Email:
                        </label>
                        <input 
                        type='text' 
                        className={styles.input}
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder='example@email.com'/>
                    </div>
                    <div>
                        <label className={styles.label}>
                        Username:
                        </label>
                        <input 
                        type='text' 
                        className={styles.input}
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder='username'/>
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
                        placeholder='******'/>
                    </div>
                    <div>
                        <label className={styles.label}>
                            Profile Image:
                        </label>
                        <input 
                        type='password' 
                        className={styles.input}
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        placeholder='******'/>
                    </div>
                </div>

                <button type='submit' className={styles.btn}>
                    Create
                </button>

                <p className={styles.errMsg}>
                    {errMsg}
                </p>

            </form>
    </div>
  )
}