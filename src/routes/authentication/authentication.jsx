// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../Components/sign-up-form/sign-up-form.component';
import SignInForm from '../../Components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';
  
  const Authentication = () => {
    // useEffect(async () => {
    //   const response = await getRedirectResult(auth);
    //   console.log(response);

    //   if(response) {
    //     const userDocRef = await createUserDocumentFromAuth(response.user);
    //     console.log(userDocRef);
    //   }
    // }, []);
  
    return (
      <div className='authentication-container'>
        {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redicrect</button> */}
        <SignInForm />
        <SignUpForm />
      </div>
    );
  };
  
  export default Authentication;