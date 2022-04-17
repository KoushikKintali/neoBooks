import Navbar from '../../components/navbar/Navbar';
import './Signin.css';
import { captureInput, isRequestBodyValid } from '../../utils/util';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToastHandler } from '../../context/toast-context';
import axios from 'axios';
import { StatusCodes } from 'http-status-codes';

const Signin = () => {

    const [loginBody, setLoginBody] = useState({ email: '', password: '' });

    const navigate = useNavigate();

    const { setToastHandler } = useToastHandler();

    const goToSignupPage = (event) => {
        event.preventDefault();
        navigate('/signup');
    }

    const login = async (body, event) => {
        if (isRequestBodyValid(body, setToastHandler)) {
            try {
                event.preventDefault();
                console.log('Request body validated')
                const response = await axios.post('/api/auth/login', body);
                localStorage.setItem("token", response.data.encodedToken);
                setToastHandler({ type: 'success', message: 'Loggedin successfully' })
                navigate('/products');
            } catch (error) {
                console.error(error);
                if (error.response.status === StatusCodes.NOT_FOUND) {
                    setToastHandler({ type: 'warning', message: 'User not found' })
                    return;
                }
                setToastHandler({ type: 'danger', message: 'Something went wrong' })
            }
        } else {
            setToastHandler({ type: 'danger', message: 'Please fill all the details' });
        }
    }

    return (
        <>
            <Navbar />
            <div className="content-body signin">
                <form className="signin-body">
                    <div className="title">
                        <p>Login</p>
                    </div>
                    <div className="input-with-text">
                        <label htmlFor='email'>Email Address</label>
                        <input
                            className="input"
                            id='email'
                            type="email"
                            placeholder="Enter your emailId"
                            required
                            onChange={(e) => captureInput('email', e.target.value, setLoginBody)}
                        />
                    </div>
                    <div className="input-with-text">
                        <label htmlFor='password'>Password</label>
                        <input
                            className="input"
                            id='password'
                            type="password"
                            placeholder="Enter your password"
                            onChange={(e) => captureInput('password', e.target.value, setLoginBody)}
                            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                            onInvalid={(e) => e.target.setCustomValidity('Password must contain: Minimum 8 characters atleast 1 Alphabet, 1 Number and 1 Special character')}
                            onInput={(e) => e.target.setCustomValidity('')}
                            required
                        />
                    </div>
                    <div className="footer">
                        <div className="checkbox">
                            <input type="checkbox" id='remember-checkbox' />
                            <label htmlFor='remember-checkbox'>Remember me</label>
                        </div>
                    </div>
                    <div className="login-btn-group">
                        <button className="btn btn-fill" id="btn-login" onClick={(e) => login(loginBody, e)}>Login</button>
                        <div className="card-btn-group">
                            <button className="btn btn-categories" id="btn-create-new-account" onClick={(e) => goToSignupPage(e)}>Create New Account </button>
                            <span className="material-icons-outlined"> arrow_right_alt </span>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Signin;