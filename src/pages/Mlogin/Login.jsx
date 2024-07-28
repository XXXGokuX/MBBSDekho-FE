import { HiOutlineEye, HiEyeOff } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { POSTAPI } from '../../API/api';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MLogin() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  const loginUser = async (values) => {
    try {
      const { data } = await POSTAPI('token', values);
      dispatch(setUser(data.access));
      toast.success('Login successful!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } catch (error) {
      toast.error('Login failed. Please check your credentials.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid Email').required('Email Required'),
      password: Yup.string().required('Password Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      loginUser(values);
      resetForm();
    },
  });

  return (
    <div className="my-[20vh]">
      <ToastContainer />
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
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                autoComplete="off"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Enter your Email"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-sm md:text-base text-red-500">{formik.errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  type={isPasswordVisible ? 'text' : 'password'}
                  name="password"
                  id="password"
                  autoComplete="off"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  placeholder="Enter Your Password"
                />
                <div className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 absolute inset-y-0 right-0 rounded-none">
                  {isPasswordVisible ? (
                    <HiEyeOff className="h-5 w-5" onClick={() => setIsPasswordVisible(false)} />
                  ) : (
                    <HiOutlineEye className="h-5 w-5" onClick={() => setIsPasswordVisible(true)} />
                  )}
                </div>
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="text-sm md:text-base text-red-500">{formik.errors.password}</p>
              )}
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
          Don't have an account?{' '}
          <Link className="font-medium underline underline-offset-4" to="/register">
            Sign up
          </Link>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          Are you a vendor?{' '}
          <Link className="underline" to="/login/vendor">
            Vendor
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MLogin;
