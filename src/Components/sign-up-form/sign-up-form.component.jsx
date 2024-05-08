import { useState } from 'react';
import './sign-up-form.styles.scss';
import FormInput from '../form-input-component/form-input.jsx';
import Button from '../button-component/button.jsx';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultValue = {
    displayName: '',
    email: '',
    password: '',
    cpass: ''
}

const SignUpForm = () => {
    const [ formValue, setFormValue ] = useState(defaultValue);
    const { displayName, email, password, cpass } = formValue;

    const resetFormFields = () => {
        setFormValue(defaultValue);
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (password !== cpass) {
          alert('passwords do not match');
          return;
        }
    
        try {
          const { user } = await createAuthUserWithEmailAndPassword(email,password);
    
          await createUserDocumentFromAuth(user, { displayName });
          resetFormFields();
        } catch (error) {
          if (error.code === 'auth/email-already-in-use') {
            alert('Cannot create user, email already in use');
          } else if (error.code === 'auth/weak-password'){
            alert('Password should be at least 6 characters');
          } else {
            console.log('user creation encountered an error', error);
          }
        }
      };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue({ ...formValue, [name]: value })
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" id="displayName" name ="displayName" onChange={handleChange} value={displayName} required />

                <FormInput label="Email" type="text" id="email" name ="email" onChange={handleChange} value={email} required/>

                <FormInput label="Password" id="password" type="password" name ="password" onChange={handleChange} value={password} required/>

                <FormInput label="Confirm Password" type="password" id="cpass" name ="cpass" onChange={handleChange} value={cpass} required/>
                
                <Button type="submit" btnType='inverted'>Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUpForm;