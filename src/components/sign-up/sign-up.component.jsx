import {useState} from "react";
import {useDispatch} from "react-redux";

import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";


import {SignUpContainer} from "./sign-up.styles";

const defaultFormFields = {
    displayName: '',
    email:'',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
    const [formFields, setFormFileds] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const handleSubmit = async (event) => {
      event.preventDefault();
      if (password !== confirmPassword){
          alert("passwords do not match");
          return;
      }
      try {
          await createAuthUserWithEmailAndPassword(email, password);
          resetFormFields();

      } catch (e) {
          if (e.code === 'auth/email-already-in-use'){
              alert('Cannot create user, email already in use');
          }
          console.log('user creation encountered an error' + e);
      }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFileds({...formFields, [name]: value});
    }

    const resetFormFields = () => {
        setFormFileds(defaultFormFields);
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    lable='Display Name'
                    type="text"
                    required
                    onChange={handleChange}
                    name='displayName'
                    value={displayName}
                />

                <FormInput
                    lable='Email'
                    type="email"
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInput
                    lable='Password'
                    type="password"
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />

                <FormInput
                    lable='Confirm Password'
                    type="password"
                    required
                    onChange={handleChange}
                    name='confirmPassword'
                    value={confirmPassword}
                />

                <Button type="submit" >Sign Up</Button>
            </form>
        </SignUpContainer>
    );
}

export default SignUp;