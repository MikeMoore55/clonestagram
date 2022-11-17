import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

export default function SignInForm() {

     const allAccounts = accounts;

  const router = useRouter();  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errmsg, setErrmsg] = useState('');
 
  const [cookie, setCookie] = useCookies(["user"]);

  const handleSignIn = async (event) => {

    if (email === '' && password === '') {
      event.preventDefault();
      setErrmsg('Fields cannot be left blank');
    }

    else {
      event.preventDefault();


      // make sure that the input email matched any of those in the db
      var indexNr = -1;
      for(var i=0; i < allAccounts.length; i++) {
        if(allAccounts[i].email == email) {
          indexNr = i;
          break;
        }
      }


      //get account based if email account exists
      const account = allAccounts[indexNr] 

      if (password !== account.password) {
        setErrmsg('password is incorrect, try again');
      }
      else {
        //have the user id set as cookie to be used across the application
        setCookie("user", account.id, {
          path: "/",
          maxAge: 1800,
          sameSite: true,
        });
        setErrmsg('');
        router
          .push({
            pathname: '/home',
          }) 
      }
    };
    };
    
    return (
        <div>SignInForm</div>
    );
};
