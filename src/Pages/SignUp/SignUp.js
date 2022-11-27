import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {

    const[signUpError, setSignUpError]= useState('')
    const {createUser, updateUserProfile, providerLogin,loading } = useContext(AuthContext)
    const navigate = useNavigate()

    const googleProvider = new GoogleAuthProvider();
    

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email= form.email.value;
        const password = form.password.value;
        const role = form.role.value;

        const userDetails = {
            name,
            email,
            password,
            role
        }
        
        createUser(email, password)
        .then(result=>{
            const user= result.user;
            console.log(user);
            setSignUpError('')
            toast('User Created Successfully')
            const userInfo = {
                displayName: name
            }
            updateUserProfile(userInfo)
            .then(()=>{
                saveUser(userDetails.name, userDetails.email, userDetails.role)
            })
            .catch(e =>{
                console.log(e)
                setSignUpError(e.message)
            })
            navigate('/');
        })
        .catch(e=>{
            console.log(e)
            setSignUpError(e.message)
        })

    }
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                const role = 'buyer'
                saveUser(user.displayName,user.email, role)
                navigate('/');
            })
            .catch(error => console.error(error))
    }

    const saveUser = (name, email, role)=>{
        const user = {name, email , role}
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }

    if(loading){
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    return (
        <div className='w-full flex justify-center'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form onSubmit={handleSubmit}  action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-400">Account type</label>
                        <select name='role' className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required>
                           
                            <option value='buyer' selected disabled>Selecte Account Type</option>
                            <option value='buyer'>buyer</option>
                            <option value='seller'>seller</option>
                        </select>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block dark:text-gray-400">Name</label>
                        <input type="text" name="name" id="username" placeholder="Name" required className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-400">Email</label>
                        <input type="email" name="email" id="username" placeholder="Email" required className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" required className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />

                    </div>
                    <p className='text-danger'></p>
                    <button type='submit' className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Sign Up</button>
                    <p className='text-danger'>{signUpError}</p>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>

                </div>
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already a member?
                    <Link rel="noopener noreferrer" to='/login' className="underline dark:text-gray-100"> Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;