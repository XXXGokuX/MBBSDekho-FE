import { HiOutlineMail, HiOutlineEye, HiEyeOff } from 'react-icons/hi'
import Layout from '../../utils/Layout';
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Logo from '../../images/logo.png'
import LockIcon from "@mui/icons-material/Lock";
import { POSTAPI } from '../../API/api';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux';
import PersonIcon from "@mui/icons-material/Person";
import { Bounce, toast, ToastContainer } from 'react-toastify';


function MLogin() {


    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const dispatch = useDispatch()

    const loginUser = (values) => {

        POSTAPI('token', values).then(({ data }) => {
            dispatch(setUser(data.access))

        })
        
    };


    const formik = useFormik({

        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({

            email: Yup.string().email("Invalid Email").required("Email Required"),
            password: Yup.string().required("Password Required")

        }),
        onSubmit: async (values, { resetForm }) => {
            loginUser(values);
            resetForm();
        }


    })

    return (
        <div className='my-[20vh]'>
            <div className="mx-auto max-w-md space-y-6">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Welcome Back</h1>
                    <p className="text-muted-foreground">Enter your credentials to access your account</p>
                </div>
                <div className="space-y-4">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name='email'
                                id='email'
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                autoComplete='off'
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder='Enter your Email'
                            />
                            {
                                formik.touched.email
                                &&
                                formik.errors.email
                                &&
                                <p className='text-sm md:text-base text-red-500'>{formik.errors.email}</p>
                            }
                        </div>
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="password"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    type={`${isPasswordVisible ? 'text' : 'password'}`}
                                    name='password'
                                    id='password'
                                    autoComplete='off'
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    placeholder='Enter Your Password'
                                />
                                <div className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 absolute inset-y-0 right-0 rounded-none">
                                    {isPasswordVisible ?
                                        <HiEyeOff className="h-5 w-5" onClick={() => setIsPasswordVisible(false)} />
                                        :
                                        <HiOutlineEye className="h-5 w-5" onClick={() => setIsPasswordVisible(true)} />
                                    }
                                </div>


                            </div>
                            {
                                formik.touched.password
                                &&
                                formik.errors.password
                                &&
                                <p className='text-sm md:text-base text-red-500'>{formik.errors.password}</p>
                            }
                        </div>
                        <button
                            className="inline-flex my-4 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#2563ea] text-white hover:bg-primary/90 h-10 px-4 py-2 w-full"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </form>
                    <div className="flex items-center justify-between">
                        {/* <a className="text-sm font-medium underline underline-offset-4" href="#">
                            Forgot Password?
                        </a> */}

                    </div>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link className="font-medium underline underline-offset-4" to="/register">
                        Sign up
                    </Link>
                </div>
            </div>
            
            {/* <form onSubmit={formik.handleSubmit}>
                <div className="relative my-4">
                    <input
                        type="email"
                        name='email'
                        id='email'
                        className='border border-gray-300 outline-none peer  block min-h-[auto] w-full pl-8 bg-transparent py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:border-orange-600  focus:border rounded'
                        autoComplete='off'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder='Enter your Email'
                    />
                    <PersonIcon className="absolute top-2 border-r border-black peer-focus:text-violet-700" />

                </div>
                {
                    formik.touched.email
                    &&
                    formik.errors.email
                    &&
                    <p className='text-sm md:text-base text-red-500'>{formik.errors.email}</p>
                }
                <div className="relative my-4" data-te-input-wrapper-init>
                    <input
                        type={`${isPasswordVisible ? 'text' : 'password'}`}
                        name='password'
                        id='password'
                        className=' border border-gray-300 outline-none peer  block min-h-[auto] w-full pl-8 bg-transparent py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:border-orange-600  focus:border rounded'
                        autoComplete='off'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        placeholder='Enter Your Password'
                    />
                    <LockIcon className="absolute top-2 border-r border-black peer-focus:text-violet-700" />

                    {isPasswordVisible ?
                        <HiEyeOff className=' text-xl cursor-pointer absolute top-2 right-2' onClick={() => setIsPasswordVisible(false)} />
                        :
                        <HiOutlineEye className=' text-xl cursor-pointer absolute top-2 right-2' onClick={() => setIsPasswordVisible(true)} />}

                </div>
                {
                    formik.touched.password
                    &&
                    formik.errors.password
                    &&
                    <p className='text-sm md:text-base text-red-500'>{formik.errors.password}</p>
                }
                <div className='mt-2'>
                    <input type='checkbox' className='h-4 w-4 align-baseline' /> <span className=''>Remember Password</span>
                </div>

                <div className="mb-4 pb-1 pt-1 text-center">
                    <button
                        className={` inline-block w-full rounded px-6 pb-2 pt-2.5 font-semibold mt-5 uppercase leading-normal shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]`}
                        type="submit"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        style={{
                            background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                        }}

                    >
                        Login
                    </button>

                </div>
                <div className=''>
                    <p className=' text-center md:text-base text-sm'>Dont have account <Link to='/register'><span className=' cursor-pointer hover:font-semibold hover:underline text-blue-500 underline'>Register</span></Link></p>
                </div>
            </form> */}

        </div>
    );
}

export default MLogin;