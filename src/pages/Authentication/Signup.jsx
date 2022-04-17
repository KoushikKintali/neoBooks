import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { useToastHandler } from '../../context/toast-context';
import { captureInput, isRequestBodyValid } from '../../utils/util';
import './Signin.css';

const Signup = () => {

    const [signupBody, setSignupBody] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        isTermsAndConditionsAccepted: false
    });

    const navigate = useNavigate();

    const { setToastHandler } = useToastHandler();

    const createNewAccount = async (body, event) => {
        if (isRequestBodyValid(body)) {
            try {
                event.preventDefault();
                console.log('Request body validated')
                const response = await axios.post('/api/auth/signup', body);
                localStorage.setItem("token", response.data.encodedToken);
                setToastHandler({ type: 'success', message: 'Account created successfully' });
                navigate('/login');
            } catch (error) {
                console.error(error);
                setToastHandler({ type: 'danger', message: 'Something went wrong' });
            }
        } else {
            setToastHandler({ type: 'danger', message: 'Please fill all the details' });
        }
    }

    const goToLoginPage = (event) => {
        event.preventDefault();
        navigate('/login');
    }

    return (
        <>
            {/* Todo: password custom message */}
            <Navbar />
            <div className="content-body signup">
                <form className="signin-body">
                    <div className="title">
                        <p>Signup</p>
                    </div>
                    <div className="input-group input-with-text">
                        <label htmlFor='first-N'>First Name</label>
                        <input
                            onChange={(e) => captureInput('firstName', e.target.value, setSignupBody)}
                            className="input" id='first-name'
                            type="text"
                            placeholder="Enter your First Name"
                            onInvalid={(e) => e.target.setCustomValidity('Please enter first name')}
                            onInput={(e) => e.target.setCustomValidity('')}
                            required
                        />
                    </div>
                    <div className="input-group input-with-text">
                        <label htmlFor='last-name'>Last Name</label>
                        <input
                            onChange={(e) => captureInput('lastName', e.target.value, setSignupBody)}
                            className="input"
                            id='last-name'
                            type="text"
                            placeholder="Enter your Last Name"
                            onInvalid={(e) => e.target.setCustomValidity('Please enter last name')}
                            onInput={(e) => e.target.setCustomValidity('')}
                            required
                        />
                    </div>
                    <div className="input-group input-with-text">
                        <label htmlFor='email'>Email Address</label>
                        <input
                            onChange={(e) => captureInput('email', e.target.value, setSignupBody)}
                            className="input"
                            id='email'
                            type="email"
                            placeholder="Enter your emailId"
                            required
                        />
                    </div>
                    <div className="input-group input-with-text">
                        <label htmlFor='password'>Password</label>
                        <input
                            onChange={(e) => captureInput('password', e.target.value, setSignupBody)}
                            className="input"
                            id='password'
                            type="password"
                            placeholder="Enter your password"
                            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                            onInvalid={(e) => e.target.setCustomValidity('Password must contain: Minimum 8 characters atleast 1 Alphabet, 1 Number and 1 Special character')}
                            onInput={(e) => e.target.setCustomValidity('')}
                            required
                        />
                    </div>

                    <div className="footer">
                        <div className="checkbox">
                            <input
                                type="checkbox"
                                id='terms-checkbox'
                                onChange={(e) => captureInput('isTermsAndConditionsAccepted', e.target.checked, setSignupBody)}
                                onInvalid={(e) => e.target.setCustomValidity('Please accept Terms & Conditions')}
                                onInput={(e) => e.target.setCustomValidity('')}
                                required
                            />
                            <label htmlFor='terms-checkbox'>I accept all Terms & Conditions</label>
                        </div>
                    </div>
                    <div className="login-btn-group">
                        <button type='submit' className="btn btn-fill" id="btn-login" onClick={(e) => createNewAccount(signupBody, e)}>Create New Account</button>
                        <div className="card-btn-group">
                            <button className="btn btn-categories" id="btn-create-new-account" onClick={(e) => goToLoginPage(e)}>Already have an account</button>
                            <span className="material-icons-outlined"> arrow_right_alt </span>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Signup;