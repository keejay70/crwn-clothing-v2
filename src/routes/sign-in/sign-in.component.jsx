import {
  signInWithGooglePopup,
  createUserDocument
} from '../../utils/firebase/firebase.utils';
// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../Components/sign-up-form/sign-up-form.component';
  
  const SignIn = () => {
    // useEffect(async () => {
    //   const response = await getRedirectResult(auth);
    //   console.log(response);

    //   if(response) {
    //     const userDocRef = await createUserDocument(response.user);
    //     console.log(userDocRef);
    //   }
    // }, []);

    const loginGooglePopupUser = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocument(user);
      console.log(userDocRef);
    };
  
    return (
      <div>
        <h1>Sign In Page</h1>
        <button onClick={loginGooglePopupUser}>Sign in with Google Popup</button>
        {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redicrect</button> */}
        <SignUpForm />
      </div>
    );
  };
  
  export default SignIn;