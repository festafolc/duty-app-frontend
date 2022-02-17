import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startSignUp } from '../../actions/user/startSignUp';
import { useForm } from '../../hooks/useForm';

export const SignUpScreen = () => {
    const dispatch = useDispatch();
    const [formSignUpValues, handleSignUpChange] = useForm({
        rname: '',
        surname: '',
        surname2: '',
        birth: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        password2: ''
    });
    const {rname, surname, surname2,birth, email, phone, username, password, password2} = formSignUpValues;

    const handleSignUp = (e) => {
        e.preventDefault();
        if (password !== password2) {
            return alert('Passwords are not equal');
        }
        dispatch(startSignUp(rname, surname, surname2, birth, email, phone, username, password));
    }
    return (
        <div className='container d-flex justify-content-center'>
            <div className='row'>
                <div className='d-flex align-items-center min-vh-100'>
                    <div className='col-md'>
                        <h1 className='text-center'>Sign up now!</h1>
                        <div className='container'>
                            <form onSubmit={handleSignUp}>
                                <input type='text' name='rname' value={rname} onChange={handleSignUpChange} className='form-control mt-5' placeholder='Name'/>
                                <input type='text' name='surname' value={surname} onChange={handleSignUpChange} className='form-control mt-2' placeholder='First Surname'/>
                                <input type='text' name='surname2' value={surname2} onChange={handleSignUpChange} className='form-control mt-2' placeholder='Second Surname'/>
                                <input type='text' name='birth' value={birth} onChange={handleSignUpChange} className='form-control mt-2' placeholder='Date of birth'/>
                                <input type='email' name='email' value={email} onChange={handleSignUpChange} className='form-control mt-2' placeholder='Email'/>
                                <input type='text' name='phone' value={phone} onChange={handleSignUpChange} className='form-control mt-2' placeholder='Phone'/>                    
                                <input type='text' name='username' value={username} onChange={handleSignUpChange} className='form-control mt-2' placeholder='Username'/>                                           
                                <input type='password' name='password' value={password} onChange={handleSignUpChange} className='form-control mt-2' placeholder='Password'/>                     
                                <input type='password' name='password2' value={password2} onChange={handleSignUpChange} className='form-control mt-2' placeholder='Repeat password'/>                       
                                <div className='d-flex justify-content-center mt-5'>
                                    <button className='btn btn-primary'>Sign up</button>        
                                </div>
                                <div className='text-center mt-4'>
                                    <small><Link to='/login'>Already registered?</Link></small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
