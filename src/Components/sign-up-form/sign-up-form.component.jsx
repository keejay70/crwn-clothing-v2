import { useState } from 'react';

const defaultValue = {
    displayName: '',
    email: '',
    password: '',
    cpass: ''
}

const SignUpForm = () => {
    const [ formValue, setFormValue ] = useState(defaultValue);
    const { displayName, email, password, cpass } = formValue;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue({ ...formValue, [name]: value })
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={() => {}}>
                <label htmlFor="displayName">Display Name</label>
                <input type="text" id="displayName" name='displayName' onChange={handleChange} value={displayName} required/>

                <label htmlFor="email">Email</label>
                <input type="text" id="email" name='email' onChange={handleChange} value={email} required/>

                <label htmlFor="pass">Password</label>
                <input type="text" id="pass" name='password' onChange={handleChange} value={password} required/>

                <label htmlFor="cpass">Confirm Password</label>
                <input type="text" id="cpass" name='cpass' onChange={handleChange} value={cpass} required/>
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
}

export default SignUpForm;