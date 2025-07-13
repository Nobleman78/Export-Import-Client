import { useContext, useRef } from 'react';
import loginLottie from '../assets/Login_Register/Login Character Animation.json'
import Lottie from 'lottie-react'
import { FcGoogle } from 'react-icons/fc';
import UsePasswordToggle from '../Utility/Hooks/UsePasswordToggle';
import AuthContext from '../ContextApi/AuthContext';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const { icon, inputType, handlePasswordVisibility } = UsePasswordToggle()
    const { signInWithEmailandPassword, handleForgetPassword, loginWithGoogle } = useContext(AuthContext)
    const emailRef = useRef()
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailandPassword(email, password)
            .then(res => {
                console.log(res.user)
                alert('Login Successfull')
                navigate('/')
            })
            .catch(error => {
                alert('Invalid Email or Password', error)
            })
        form.reset()
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(res => {
                console.log(res.user)
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }
    const ForgetPassword = () => {
        const email = emailRef.current?.value
        handleForgetPassword(email)
            .then(() => {
                alert('Password reset link sent to the Gmail , Please Check!!!')
            })
    }
    return (
        <div>
            <main className='flex flex-col lg:flex-row gap-5'>
                {/* Left part */}
                <div className='w-full lg:w-1/2'>
                    <Lottie animationData={loginLottie}></Lottie>
                </div>
                {/* Right Part */}
                <div className='w-full lg:w-1/2 py-5 px-5 bg-teal-500 ' style={{ fontFamily: 'poppins' }}>
                    <div className='bg-white px-10 py-10 rounded-lg'>
                        <h2 className='text-xl mb-2 font-semibold'>Login</h2>
                        <div className='flex items-center gap-2 mb-5'>
                            <h2 className=''>New user</h2>
                            <button onClick={() => navigate('/registration')} className='text-blue-500 text-sm cursor-pointer hover:underline'>Register Now</button>
                        </div>
                        {/* Login With Google */}
                        <div onClick={handleGoogleLogin} className='flex items-center justify-center gap-3 bg-gray-100 py-2 rounded  mb-5 cursor-pointer'>
                            <FcGoogle className='text-xl' /><button >Login with Google</button>
                        </div>
                        <span className='flex justify-center'>Or</span>

                        <form onSubmit={handleLogin}>
                            {/* Login With User name/email and password */}
                            <div className='flex flex-col gap-2 mb-5'>
                                <label htmlFor=''>User Email</label>
                                <input ref={emailRef} type='email' name='email' required placeholder='Username' className='border-2 border-gray-400 py-2 px-5 rounded' />
                            </div>
                            <div className='flex flex-col gap-2 mb-5 relative'>
                                <label htmlFor=''>Password</label>
                                <input type={inputType} name='password' required placeholder='Password' className='border-2 border-gray-400 py-2 px-5 rounded' />
                                <span onClick={handlePasswordVisibility} className='absolute top-12 right-3 text-gray-500 cursor-pointer'>
                                    {icon}
                                </span>
                            </div>
                            <div className='flex justify-between mb-5'>
                                <div className='flex items-center gap-2'>
                                    <input type='checkbox' />
                                    <button>Remember Me</button>
                                </div>
                                <button type='button' onClick={ForgetPassword} className='text-blue-500 cursor-pointer text-sm hover:underline'>Forget Password</button>
                            </div>
                            <button className='bg-teal-700 w-full py-2 text-white cursor-pointer rounded mb-5'>Sign In</button>
                        </form>
                        <p className='text-xs text-center'>By creating this account, you agree to our <strong className='cursor-pointer'>Privacy Policy</strong> & <strong className='cursor-pointer'>Cookie Policy</strong>.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;