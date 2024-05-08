import { useState } from 'react';
import './sign-in-form.styles.scss';
import FormInput from '../form-input-component/form-input.jsx';
import Button from '../button-component/button.jsx';

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithEmailAndPasswordAuth
  } from '../../utils/firebase/firebase.utils'; 

const defaultValue = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [ formValue, setFormValue ] = useState(defaultValue);
    const { email, password } = formValue;

    const resetFormFields = () => {
        setFormValue(defaultValue);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
      };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInWithEmailAndPasswordAuth(email, password);
            resetFormFields();
        } catch (error)  {
            switch (error.code) {
                case 'auth/invalid-email':
                    alert('Invalid Email');
                    break;
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default:
                  console.log(error);
              }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue({ ...formValue, [name]: value })
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="text" id="sign-in-email" name ="email" onChange={handleChange} value={email} required/>

                <FormInput label="Password" id="sign-in-password" type="password" name ="password" onChange={handleChange} value={password} required/>
                
                <div className='buttons-container'>
                    <Button type="submit" btnType='invertedBtn'>Sign In</Button>
                    <Button type="button" btnType='googleBtn' onClick={signInWithGoogle}>Sign in with Google</Button>
                </div>
                
            </form>
        </div>
    );
}

export default SignInForm;