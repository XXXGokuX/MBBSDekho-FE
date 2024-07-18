import { useEffect, useState } from "react";
import Layout from "../../utils/Layout";
import { HiOutlineCamera } from 'react-icons/hi'
import { CgClose } from "react-icons/cg";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { GETAPI } from "../../API/api";

function Dashboard() {

    const [showImage, setShowImage] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const router= useNavigate()
    const id = useSelector(({ reducer }) => reducer.user);
    const user = useSelector(({ reducer }) => reducer.token);



    useEffect(() => {
        const fetchData = async () => {
            const { data } = await GETAPI(`accounts/${id}/`);
            setUserInfo(data);
            console.log(data);
        };

        fetchData();
    }, [id]);

    if (!user) {
        return <Navigate to="/login" />;
    }


    return (

        <>

            <Layout>


                <div class="w-full max-w-3xl mx-auto p-6 md:p-8 lg:p-10">
                    <div class="grid gap-8">
                        <div class="grid gap-4">
                            <div class="flex items-center justify-between">
                                <h1 class="text-2xl font-bold">Personal Profile</h1>
                                <button onClick={() => {
                                    localStorage.clear()
                                    window.location.reload()
                                }} class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-[#e4e4e3] hover:text-accent-foreground h-9 rounded-md px-3">
                                    Logout
                                </button>
                            </div>
                            <div data-orientation="horizontal" role="none" class="shrink-0 bg-[#e4e4e5] h-[1px] w-full"></div>
                            <div class="grid md:grid-cols-2 gap-6">
                                <div class="grid gap-2">
                                    <label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for="name"
                                    >
                                        Name
                                    </label>
                                    <input
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="name"
                                        disabled=""
                                        value={`${userInfo?.user.first_name} ${userInfo?.user.last_name}`}
                                    />
                                </div>
                                <div class="grid gap-2">
                                    <label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="email"
                                        disabled=""
                                        value={`${userInfo?.user.email}`}
                                    />
                                </div>
                                <div class="grid gap-2">
                                    <label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for="phone"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="phone"
                                        disabled=""
                                        value={`${userInfo?.user_profile.user_phone}`}
                                    />
                                </div>
                                <div class="grid gap-2">
                                    <label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for="father-name"
                                    >
                                        Father's Name
                                    </label>
                                    <input
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="father-name"
                                        disabled=""
                                        value={`${userInfo?.user_profile.user_father_name}`}
                                    />
                                </div>
                                <div class="grid gap-2">
                                    <label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for="education-budget"
                                    >
                                        Education Budget
                                    </label>
                                    <input
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="education-budget"
                                        disabled=""
                                        value={`${userInfo?.user_profile.user_budget}`}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="grid gap-4">
                            <div class="flex items-center justify-between">
                                <h2 class="text-xl font-bold">Test Information</h2>
                                {/* <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                    View Marksheet
                                </button> */}
                            </div>
                            <div data-orientation="horizontal" role="none" class="shrink-0 bg-[#e4e4e5] h-[1px] w-full"></div>
                            <div class="grid md:grid-cols-2 gap-6">
                                <div class="grid gap-2">
                                    <label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for="test-score"
                                    >
                                        Test Score
                                    </label>
                                    <input
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="test-score"
                                        disabled=""
                                        value={`${userInfo?.user_test_info.user_test_score}`}
                                    />
                                </div>
                                <div class="grid gap-2">
                                    <label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for="test-date"
                                    >
                                        Test Date
                                    </label>
                                    <input
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="test-date"
                                        disabled=""
                                        value={`${userInfo?.user_test_info.user_test_date}`}
                                    />
                                </div>
                                <div class="grid gap-2">
                                    <label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for="test-expiry"
                                    >
                                        Test Expiry
                                    </label>
                                    <input
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="test-expiry"
                                        disabled=""
                                        value={`${userInfo?.user_test_info.user_test_exp_date}`}
                                    />
                                </div>
                                <div class="grid gap-2">
                                    <label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for="test-type"
                                    >
                                        Test Type
                                    </label>
                                    <input
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="test-type"
                                        disabled=""
                                        value="NEET"
                                    />
                                </div>

                                <div class="grid gap-2">
                                    <label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for="test-type"
                                    >
                                        College Preference
                                    </label>
                                    <input
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="test-type"
                                        disabled=""
                                        value={`${userInfo?.user_profile.user_college_preference}`}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="grid gap-4">
                            <div class="flex items-center justify-between">
                                <h2 class="text-xl font-bold">Documents</h2>
                                {/* <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                    Upload Document
                                </button> */}
                            </div>
                            <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full"></div>
                            <div class="grid gap-4">
                                <div class="flex items-center gap-4 bg-[#f4f4f4] p-4 rounded-lg">
                                    <div class="flex-shrink-0">
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
                                            class="h-8 w-8 text-muted-foreground"
                                        >
                                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-1">
                                        <div class="font-medium">{userInfo && new URL(userInfo?.user_test_info.user_test_document_image).pathname.split("/").pop()}</div>
                                    </div>
                                    <div class="flex gap-2">
                                        <a href={userInfo?.user_test_info.user_test_document_image} download={userInfo && new URL(userInfo?.user_test_info.user_test_document_image).pathname.split("/").pop()}>
                                            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                                                    class="h-4 w-4"
                                                >
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                    <polyline points="7 10 12 15 17 10"></polyline>
                                                    <line x1="12" x2="12" y1="15" y2="3"></line>
                                                </svg>
                                                <span class="sr-only">Download</span>
                                            </button>
                                        </a>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>




            </Layout >


        </>

    );
}

export default Dashboard;