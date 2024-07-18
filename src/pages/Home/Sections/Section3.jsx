import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import img from "../../../images/college-1.jpeg"
import img1 from "../../../images/blog1.jpeg"
import img2 from "../../../images/blog2.jpeg"
import img3 from "../../../images/blog3.jpeg"

function Section3() {
    return (
        <>

            <div className="flex flex-col min-h-[100dvh]">
                <header className="bg-gradient-to-r from-[#0077b6] to-[#00b4d8] py-12 md:py-20 lg:py-24 ">
                    <div className="container px-4 md:px-6 lg:px-8 max-w-screen-xl mx-auto sm:px-10 md:p-5" >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div className="space-y-4 md:space-y-6 lg:space-y-8">
                                <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                                    Empowering Your Medical Journey Worldwide
                                </h1>
                                <p className="text-lg text-white md:text-xl lg:text-2xl">
                                    Unlock Your Potential: Your Trusted Partner for Pursuing MBBS Abroad. Discover Comprehensive Resources, Personalized Assistance, and a Network of Success Stories to Guide Your Path to Excellence.
                                </p>
                                <div>
                                    <Link
                                        className="inline-flex items-center justify-center rounded-md bg-[#00b4d8] px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-[#0077b6] focus:outline-none focus:ring-2 focus:ring-[#00b4d8] focus:ring-offset-2"
                                        to="/contact"
                                    >
                                        Contact Us Now
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <img
                                    src={img}
                                    width="600"
                                    height="400"
                                    alt="Crypto Hero"
                                    className="w-full h-auto"
                                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                </header>
                <section className="bg-[#f0f0f0] py-12 md:py-20 lg:py-24">
                    <div className="container px-4 md:px-6 lg:px-8 max-w-screen-xl mx-auto sm:px-10 md:p-5">
                        <div className="space-y-4 md:space-y-6 lg:space-y-8">
                            <h2 className="text-2xl font-bold text-[#0077b6] md:text-3xl lg:text-4xl">Achieve Your MBBS Goals Abroad with MBBS Dekho</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                                <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-[#00b4d8] rounded-full p-4 flex items-center justify-center text-white text-2xl font-bold">
                                            01
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#0077b6]">Expert Guidance</h3>
                                            <p className="text-gray-500">Navigating Your Path to Success.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-[#00b4d8] rounded-full p-4 flex items-center justify-center text-white text-2xl font-bold">
                                            02
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#0077b6]">Personalized Support</h3>
                                            <p className="text-gray-500">Tailored Assistance for Your Journey.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-[#00b4d8] rounded-full p-4 flex items-center justify-center text-white text-2xl font-bold">
                                            03
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#0077b6]">Global Network</h3>
                                            <p className="text-gray-500">Connecting You to Opportunities Worldwide.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white py-12 md:py-20 lg:py-24 max-w-screen-xl mx-auto px-2 sm:px-10 md:p-5">
                    <div className="container px-4 md:px-6 lg:px-8">
                        <div className="space-y-4 md:space-y-6 lg:space-y-8">
                            <h2 className="text-2xl font-bold text-[#0077b6] md:text-3xl lg:text-4xl">Explore Our Services</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                                <div className="bg-[#f0f0f0] rounded-lg p-4 md:p-6 lg:p-8">
                                    <img
                                        src={img1}
                                        width="400"
                                        height="300"
                                        alt="Project 1"
                                        className="w-full h-auto rounded-lg mb-4"
                                        style={{ aspectRatio: "400/300", objectFit: "cover" }}
                                    />
                                    <h3 className="text-lg font-bold text-[#0077b6] mb-2">Personalized Consultations</h3>
                                    <p className="text-gray-500">
                                    Tailored advice from experienced advisors to shape your international medical education journey.
                                    </p>
                                </div>
                                <div className="bg-[#f0f0f0] rounded-lg p-4 md:p-6 lg:p-8">
                                    <img
                                        src={img2}
                                        width="400"
                                        height="300"
                                        alt="Project 2"
                                        className="w-full h-auto rounded-lg mb-4"
                                        style={{ aspectRatio: "400/300", objectFit: "cover" }}
                                    />
                                    <h3 className="text-lg font-bold text-[#0077b6] mb-2">Streamlined Admission Process</h3>
                                    <p className="text-gray-500">
                                    Assistance with application procedures, ensuring you meet all requirements for your chosen medical program abroad.
                                    </p>
                                </div>
                                <div className="bg-[#f0f0f0] rounded-lg p-4 md:p-6 lg:p-8">
                                    <img
                                        src={img3}
                                        width="400"
                                        height="300"
                                        alt="Project 3"
                                        className="w-full h-auto rounded-lg mb-4"
                                        style={{ aspectRatio: "400/300", objectFit: "cover" }}
                                    />
                                    <h3 className="text-lg font-bold text-[#0077b6] mb-2">Career Advancement Opportunities</h3>
                                    <p className="text-gray-500">
                                    Access to a network of successful alumni for mentorship and career insights in the medical field.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-[#f0f0f0] py-12 md:py-20 lg:py-24">
                    <div className="container px-4 md:px-6 lg:px-8 max-w-screen-xl mx-auto sm:px-10 md:p-5">
                        <div className="space-y-4 md:space-y-6 lg:space-y-8">
                            <h2 className="text-2xl font-bold text-[#0077b6] md:text-3xl lg:text-4xl">Upcoming Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                                <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-[#00b4d8] rounded-full w-12 h-12 flex items-center justify-center text-white text-2xl font-bold">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="h-6 w-6"
                                            >
                                                <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                                                <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#0077b6]">Multi-Wallet Support</h3>
                                            <p className="text-gray-500">Seamlessly manage your crypto assets across multiple wallets.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-[#00b4d8] rounded-full w-12 h-12 flex items-center justify-center text-white text-2xl font-bold">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="h-6 w-6"
                                            >
                                                <line x1="12" x2="12" y1="20" y2="10"></line>
                                                <line x1="18" x2="18" y1="20" y2="4"></line>
                                                <line x1="6" x2="6" y1="20" y2="16"></line>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#0077b6]">Advanced Charting Tools</h3>
                                            <p className="text-gray-500">Analyze market trends and make informed trading decisions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-[#00b4d8] rounded-full w-12 h-12 flex items-center justify-center text-white text-2xl font-bold">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="h-6 w-6"
                                            >
                                                <path d="M2 20h.01"></path>
                                                <path d="M7 20v-4"></path>
                                                <path d="M12 20v-8"></path>
                                                <path d="M17 20V8"></path>
                                                <path d="M22 4v16"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#0077b6]">Real-Time Alerts</h3>
                                            <p className="text-gray-500">Stay informed about market changes and new opportunities.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}

export default Section3;
