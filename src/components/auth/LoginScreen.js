import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth/startLogin';

export const LoginScreen = () => {
    const dispatch = useDispatch();

    const [formLoginValues, handleLoginChange] = useForm({
        lemail: '',
        lpassword: '',
    });

    const {lemail, lpassword} = formLoginValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(lemail, lpassword));
    }
    
    return (
        <div className='container d-flex align-items-center justify-content-center'>
            <div className='row'>
                <div className='d-flex align-items-center min-vh-100'>
                    <div className='col-md'>
                        <h1 className='text-center'>Welcome to DutyApp</h1>
                        <div className='container text-center'>
                            <form onSubmit={handleLogin}>
                                <input type="email" name='lemail' value={lemail} onChange={handleLoginChange} className="form-control mt-5" placeholder="name@example.com" />
                                <input type="password" name='lpassword' value={lpassword} onChange={handleLoginChange} className="form-control mt-2" placeholder="Password" />
                                <div className='d-flex justify-content-center mt-5'>
                                    <button type='submit' className='btn btn-primary'>Login</button>
                                </div>
                            </form>
                        </div>
                        <div className='text-center mt-4'>
                            <small>Not register? <Link to='/signup'>Sign up!</Link></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
