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
            console.log("Form submitted");
            loginUser(values);
            resetForm();
        }


    })

    return (
        <>

            {/* <Layout>            */}
            <section className="gradient-form h-[100vh] bg-neutral-200  dark:bg-neutral-700">
                <div className="login-form ">
                    <div className="flex h-[95vh] justify-center items-center w-full">
                        <div className="block rounded-lg bg-white shadow-xl dark:bg-neutral-800 md:w-[60%] sm:w-[85%] w-[100%] mx-4 pb-5 sm:pb-0">
                            <div className="px-4 md:px-0">
                                <div className="md:mx-6 md:p-12">
                                    {/* Logo */}
                                    <div className="text-center">
                                        <h4 className="mb-12 mt-1 pb-1 text-xl font-bold underline">
                                            Welcome to <span className='font-bold'>MBBS DEKHO</span>
                                        </h4>
                                    </div>
                                    <form onSubmit={formik.handleSubmit}>
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
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MLogin;