import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function VendorRegister() {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            phoneNumber: '',
            email: '',
            homeAddress: '',
            dateOfBirth: '',
            businessName: '',
            businessDescription: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required('Full Name is required'),
            phoneNumber: Yup.string().required('Phone Number is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            homeAddress: Yup.string().required('Home Address is required'),
            dateOfBirth: Yup.string().required('Date of Birth is required'),
            businessName: Yup.string().required('Business Name is required'),
            businessDescription: Yup.string().required('Business Description is required'),
        }),
        onSubmit: (values, { resetForm }) => {
            // You can handle the form submission here
            console.log(values);
            toast.success('Vendor registered successfully!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
            resetForm();
        },
    });

    return (
        <div className="rounded-lg mt-[3%] border bg-card text-card-foreground shadow-sm max-w-2xl mx-auto p-6 sm:p-8 md:p-10">
            <ToastContainer />
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap tracking-tight text-3xl font-bold">Become a Vendor</h3>
                <p className="text-sm text-muted-foreground">
                    Fill out the form below to sign up as a vendor on our platform.
                </p>
            </div>
            <div className="p-6">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={formik.handleSubmit}>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <label className="text-sm font-medium leading-none" htmlFor="fullName">
                                Full Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                id="fullName"
                                name="fullName"
                                placeholder="John Doe"
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required=""
                            />
                            {formik.touched.fullName && formik.errors.fullName && (
                                <p className="text-sm text-red-500">{formik.errors.fullName}</p>
                            )}
                        </div>
                        <div className="grid gap-2">
                            <label className="text-sm font-medium leading-none" htmlFor="phoneNumber">
                                Phone Number
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="(123) 456-7890"
                                type="tel"
                                value={formik.values.phoneNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required=""
                            />
                            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                                <p className="text-sm text-red-500">{formik.errors.phoneNumber}</p>
                            )}
                        </div>
                        <div className="grid gap-2">
                            <label className="text-sm font-medium leading-none" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                                type="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required=""
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-sm text-red-500">{formik.errors.email}</p>
                            )}
                        </div>
                        <div className="grid gap-2">
                            <label className="text-sm font-medium leading-none" htmlFor="homeAddress">
                                Home Address
                            </label>
                            <textarea
                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                id="homeAddress"
                                name="homeAddress"
                                rows="3"
                                placeholder="123 Main St, Anytown USA"
                                value={formik.values.homeAddress}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required=""
                            ></textarea>
                            {formik.touched.homeAddress && formik.errors.homeAddress && (
                                <p className="text-sm text-red-500">{formik.errors.homeAddress}</p>
                            )}
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <label className="text-sm font-medium leading-none" htmlFor="dateOfBirth">
                                Date of Birth
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                type="date"
                                value={formik.values.dateOfBirth}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required=""
                            />
                            {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                                <p className="text-sm text-red-500">{formik.errors.dateOfBirth}</p>
                            )}
                        </div>
                        <div className="grid gap-2">
                            <label className="text-sm font-medium leading-none" htmlFor="businessName">
                                Business Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                id="businessName"
                                name="businessName"
                                placeholder="Acme Inc"
                                value={formik.values.businessName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required=""
                            />
                            {formik.touched.businessName && formik.errors.businessName && (
                                <p className="text-sm text-red-500">{formik.errors.businessName}</p>
                            )}
                        </div>
                        <div className="grid gap-2">
                            <label className="text-sm font-medium leading-none" htmlFor="businessDescription">
                                Business Description
                            </label>
                            <textarea
                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                id="businessDescription"
                                name="businessDescription"
                                rows="3"
                                placeholder="Describe your business..."
                                value={formik.values.businessDescription}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required=""
                            ></textarea>
                            {formik.touched.businessDescription && formik.errors.businessDescription && (
                                <p className="text-sm text-red-500">{formik.errors.businessDescription}</p>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center p-6 md:col-span-2">
                        <div className="flex justify-end w-full">
                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-[#2563eb] text-white hover:bg-[#2563eb]/90 h-10 px-4 py-2"
                                type="submit"
                            >
                                Sign Up
                            </button>

                        </div>

                    </div>

                </form>
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

export default VendorRegister;
