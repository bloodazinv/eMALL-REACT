import {useState} from "react";
import {useDispatch} from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {emailSignInStart, googleSignInStart} from "../../store/user/user.action";

import {SignInContainer, ButtonsContainer} from "./sign-in.styles";

const defaultFormFields = {
    email:"",
    password:""
};

const SignIn = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    const dispatch = useDispatch();

    const logGoogleUser = async () => {
        dispatch(googleSignInStart());
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            dispatch(emailSignInStart(email, password));
            resetFormFields();
        } catch (e){
            switch (e.code){
                case 'auth/wrong-password':
                    alert('Incorrect password for email!');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email!');
                    break;
                default:
                    console.log(e);
            }
        }
    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value});
    }

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    lable="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                <FormInput
                    lable="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        onClick={logGoogleUser}
                        type="button"
                    >
                        Sign in with Google
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>

    );
}
export default SignIn;