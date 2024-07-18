import { useState } from "react";


function Section3() {

    
    const [activeTab, setActiveTab] = useState(0)
    const tabs = ['Courses', 'Admissions', 'Fees']

    return (
        <>
            <div className="college-infotabs mt-5">

                <div className="all-tabs bg-[#6e48aa] rounded-xl px-4 py-2 md:px-8 md:py-5">

                    <div className="tabs flex">

                        {
                            tabs.map((tab, index) => (
                                <div key={index} className={`text-white text-base cursor-pointer md:text-lg ${activeTab === index && 'border-b-4 border-b-white/25 pb-1 font-semibold bg-white/10'}  px-4 py-2 select-none`} onClick={() => setActiveTab(index)} >{tab}</div>
                            ))
                        }


                    </div>

                    <div className="tab-content">

                        {/* {tabContent.map((content,index)=> (
                            <div key={index} className={`tabcontent text-white/95 tracking-wide pt-4 pb-14   ${activeTab===index ? 'block' : 'hidden'}`}>
                              {content}
                            </div>
                        ))} */}

                        {activeTab === 0 &&
                            <div class="rounded-lg text-white bg-card text-card-foreground" data-v0-t="card">
                                
                                <div class="p-6">
                                    <div class="relative w-full overflow-auto">
                                        <table class="w-full caption-bottom text-sm">
                                            <thead class="[&amp;_tr]:border-b">
                                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                        Course
                                                    </th>
                                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                        Description
                                                    </th>
                                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                        Start Date
                                                    </th>
                                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                        End Date
                                                    </th>
                                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                        Instructor
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody class="[&amp;_tr:last-child]:border-0">
                                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                                                        Introduction to Web Development
                                                    </td>
                                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                        Learn the fundamentals of web development, including HTML, CSS, and JavaScript.
                                                    </td>
                                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-06-01</td>
                                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-07-15</td>
                                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">John Doe</td>
                                                </tr>
                                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Advanced React</td>
                                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                        Dive deep into React, exploring advanced concepts and best practices.
                                                    </td>
                                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-08-01</td>
                                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-09-15</td>
                                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Jane Smith</td>
                                                </tr>
                                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                                                        Database Design and Management
                                                    </td>
                                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                        Understand database design principles and learn how to manage data effectively.
                                                    </td>
                                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-10-01</td>
                                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-11-15</td>
                                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Michael Johnson</td>
                                                </tr>
                                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                                                        Machine Learning Fundamentals
                                                    </td>
                                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                        Explore the core concepts and techniques of machine learning.
                                                    </td>
                                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-12-01</td>
                                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2024-01-15</td>
                                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Sarah Lee</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>}
                        {activeTab === 1 && <div class="w-full">
                            <div class="bg-background overflow-hidden">
                                <div class="relative w-full overflow-auto">
                                    <table class="w-full caption-bottom text-sm text-white">
                                        <thead class="[&amp;_tr]:border-b">
                                            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                    Information
                                                </th>
                                                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                    Details
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="[&amp;_tr:last-child]:border-0">
                                            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Location</td>
                                                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">New York, USA</td>
                                            </tr>
                                            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Year of Establishment</td>
                                                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">1985</td>
                                            </tr>
                                            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Primary Language</td>
                                                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">English</td>
                                            </tr>
                                            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Average Temperature</td>
                                                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">20°C</td>
                                            </tr>
                                            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Visa Success Rate</td>
                                                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">90%</td>
                                            </tr>
                                            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Hostel Facilities</td>
                                                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                    <div class="flex items-center gap-2">
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
                                                            class="w-5 h-5 text-green-500"
                                                        >
                                                            <path d="M20 6 9 17l-5-5"></path>
                                                        </svg>
                                                        Available
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Crime-free Campus</td>
                                                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                    <div class="flex items-center gap-2">
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
                                                            class="w-5 h-5 text-green-500"
                                                        >
                                                            <path d="M20 6 9 17l-5-5"></path>
                                                        </svg>
                                                        Yes
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">No Donation Requirements</td>
                                                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                    <div class="flex items-center gap-2">
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
                                                            class="w-5 h-5 text-green-500"
                                                        >
                                                            <path d="M20 6 9 17l-5-5"></path>
                                                        </svg>
                                                        Yes
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Ragging-free Environment</td>
                                                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                    <div class="flex items-center gap-2">
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
                                                            class="w-5 h-5 text-green-500"
                                                        >
                                                            <path d="M20 6 9 17l-5-5"></path>
                                                        </svg>
                                                        Yes
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Additional Information</td>
                                                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                    <div class="text-muted-foreground">
                                                        The college offers a wide range of undergraduate and postgraduate programs in various disciplines.
                                                        It has a
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>}
                        {activeTab === 2 && <div class="overflow-x-auto w-full">
                            <table class="w-full text-left border-collapse text-white">
                                <thead class="bg-primary text-white">
                                    <tr>
                                        <th class="px-4 py-3 font-medium">Year</th>
                                        <th class="px-4 py-3 font-medium">Tuition Fees</th>
                                        <th class="px-4 py-3 font-medium">One-Time Charges</th>
                                        <th class="px-4 py-3 font-medium">Hostel Fees</th>
                                        <th class="px-4 py-3 font-medium">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b bg-card">
                                        <td class="px-4 py-3 font-medium">1st Year</td>
                                        <td class="px-4 py-3">$15,000</td>
                                        <td class="px-4 py-3">$500</td>
                                        <td class="px-4 py-3">$3,000</td>
                                        <td class="px-4 py-3 font-medium">$18,500</td>
                                    </tr>
                                    <tr class="border-b bg-card">
                                        <td class="px-4 py-3 font-medium">2nd Year</td>
                                        <td class="px-4 py-3">$15,000</td>
                                        <td class="px-4 py-3">$0</td>
                                        <td class="px-4 py-3">$3,000</td>
                                        <td class="px-4 py-3 font-medium">$18,000</td>
                                    </tr>
                                    <tr class="border-b bg-card">
                                        <td class="px-4 py-3 font-medium">3rd Year</td>
                                        <td class="px-4 py-3">$15,000</td>
                                        <td class="px-4 py-3">$500</td>
                                        <td class="px-4 py-3">$3,000</td>
                                        <td class="px-4 py-3 font-medium">$18,500</td>
                                    </tr>
                                    <tr class="border-b bg-card">
                                        <td class="px-4 py-3 font-medium">4th Year</td>
                                        <td class="px-4 py-3">$15,000</td>
                                        <td class="px-4 py-3">$0</td>
                                        <td class="px-4 py-3">$3,000</td>
                                        <td class="px-4 py-3 font-medium">$18,000</td>
                                    </tr>
                                    <tr class="border-b bg-card">
                                        <td class="px-4 py-3 font-medium">5th Year</td>
                                        <td class="px-4 py-3">$15,000</td>
                                        <td class="px-4 py-3">$500</td>
                                        <td class="px-4 py-3">$3,000</td>
                                        <td class="px-4 py-3 font-medium">$18,500</td>
                                    </tr>
                                    <tr class="border-b bg-card">
                                        <td class="px-4 py-3 font-medium">6th Year</td>
                                        <td class="px-4 py-3">$15,000</td>
                                        <td class="px-4 py-3">$0</td>
                                        <td class="px-4 py-3">$3,000</td>
                                        <td class="px-4 py-3 font-medium">$18,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>}



                    </div>

                </div>

            </div>
        </>
    );
}

export default Section3;