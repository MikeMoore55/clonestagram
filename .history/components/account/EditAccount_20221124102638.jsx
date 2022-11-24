import React from 'react';
import Link from 'next/link';
import { SupaBaseDB } from '../../utils/dbconnect';
import styles from '../../styles/EditAccount.module.css';

export default function EditAccountForm({ account }) {
  console.log(account)
  return (
    <div>
        <form onSubmit={createAccount} className={styles.signUpForm}>
                
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
                            Password:
                        </label>
                        <input 
                        type='password' 
                        className={styles.input}
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder='******'/>
                    </div>
                    <div>
                        <label className={styles.label}>
                            Confirm Password:
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