import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { SupaBaseDB } from '../../utils/dbconnect';


export default function SignUpForm() {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [dob, setDob] = useState('');
    const [avatar, setAvatar] = useState('');

    const [errMsg, setErrmsg] = useState('');


    // function to upload profile image
    const handleUpload = async (e) => {

        e.preventDefault();
        let file;

        if (e.target.files) {
        file = e.target.files[0];
        }

        const res = await SupaBaseDB
            .storage.from("images").upload("public/" + file?.name, file);
        
        setAvatar("https://gwcwwvglnfdznumwgtfl.supabase.co/storage/v1/object/public/images/public/" + file.name,file)

        if (res.data) {
        console.log(res.data);
        } else if (error) {
        console.log(res.error);
        }
    };


    const createAccount = async (event) => {
        event.preventDefault();

        //error handling
        if (email == '') {
            setErrmsg('fields cannot be blank');
        }

        if (password == '') {
            setErrmsg('fields cannot be blank');
        }

        if (confirmPassword == '') {
            setErrmsg('fields cannot be blank');
        }

        if (dob == '') {
            setErrmsg('fields cannot be blank');
        }


        if (confirmPassword !== password) {
            setErrmsg('passwords dont match, try again');
            setPassword('');
            setConfirmPassword('');
        }
        else {
            const res = await SupaBaseDB
                .from("account")
                .insert([
                    {
                        email: email,
                        password: password,
                        username: username,
                        birth_date: dob,
                        avatar: avatar,
                    }
                ]);
            if (res.error) {
                setErrmsg(JSON.stringify(res.error));
            }
            else {
                setErrmsg('');
                router.push("/auth/signin");
            };
        };
    };
    
    return (
        <div>
          
        </div>
    );
};
