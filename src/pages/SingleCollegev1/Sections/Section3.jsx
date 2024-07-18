import college from "../../../images/college-1.jpeg"
export default function Section3() {

    return (
        <>
            <div class="rounded-lg border bg-card mt-10 text-card-foreground shadow-sm" data-v0-t="card">
                <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Courses</h3>
                    <p class="text-sm text-muted-foreground">View details about the available courses.</p>
                </div>
                <div class="p-6">
                    <div class="relative w-full overflow-auto">
                        <table class="w-full caption-bottom text-sm">
                            <thead class="[&amp;_tr]:border-b">
                                <tr class="border-b transition-colors hover:bg-[#2563ea]/10 data-[state=selected]:bg-muted">
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
                                <tr class="border-b transition-colors hover:bg-[#2563ea]/10 data-[state=selected]:bg-muted">
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
                                <tr class="border-b transition-colors hover:bg-[#2563ea]/10 data-[state=selected]:bg-muted">
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Advanced React</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        Dive deep into React, exploring advanced concepts and best practices.
                                    </td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-08-01</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-09-15</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Jane Smith</td>
                                </tr>
                                <tr class="border-b transition-colors hover:bg-[#2563ea]/10 data-[state=selected]:bg-muted">
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
                                <tr class="border-b transition-colors hover:bg-[#2563ea]/10 data-[state=selected]:bg-muted">
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
            </div>


            <div class="w-full mx-auto py-8 md:py-12">
                <div class="bg-background rounded-lg shadow-lg overflow-hidden">
                    <div class="relative w-full overflow-auto">
                        <table class="w-full caption-bottom text-sm">
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
                                            It has a strong focus on research and innovation, with state-of-the-art facilities and a highly
                                            qualified faculty.
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Fee Breakdown</h3>
                    <p class="text-sm text-muted-foreground">6-semester fee details for various services</p>
                </div>
                <div class="p-6">
                    <div class="relative w-full overflow-auto">
                        <table class="w-full caption-bottom text-sm">
                            <thead class="[&amp;_tr]:border-b">
                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Semester
                                    </th>
                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Hostel Fee
                                    </th>
                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Education Fee
                                    </th>
                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Sports Fee
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="[&amp;_tr:last-child]:border-0">
                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">1</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$2,500</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$5,000</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$250</td>
                                </tr>
                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$2,500</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$5,000</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$250</td>
                                </tr>
                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">3</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$2,500</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$5,000</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$250</td>
                                </tr>
                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">4</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$2,500</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$5,000</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$250</td>
                                </tr>
                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">5</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$2,500</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$5,000</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$250</td>
                                </tr>
                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">6</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$2,500</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$5,000</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$250</td>
                                </tr>
                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted font-medium">
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Total</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$15,000</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$30,000</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$1,500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <section class="w-full py-12 md:py-16 lg:py-20">
                <div class="container grid gap-8 px-4 md:px-6">
                    <div class="grid gap-2">
                        <h2 class="text-3xl font-bold tracking-tight">Explore Top Colleges</h2>
                        <p class="text-muted-foreground">Discover the best colleges and universities for your future.</p>
                    </div>
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div class="group relative rounded-lg overflow-hidden bg-[#f1f4f9] transition-all hover:bg-[#2563ea] hover:text-white">
                            <a class="absolute inset-0 z-10" href="#">
                                <span class="sr-only">View</span>
                            </a>
                            <div class="flex flex-col items-start gap-4 p-6">
                                <div class="flex items-center gap-4">
                                    <img
                                        src={college}
                                        alt="College Logo"
                                        width="48"
                                        height="48"
                                        class="rounded-md"
                                        style={{aspectRatio: "48 / 48", objectFit: "cover"}}
                                    />
                                    <h3 class="text-lg font-semibold">Stanford University</h3>
                                </div>
                                <p class="text-sm leading-relaxed">
                                    Stanford University is a private research university located in the heart of Silicon Valley. It is known
                                    for its world-class programs in engineering, computer science, and business.
                                </p>
                                <div class="grid gap-2 text-sm text-muted-foreground">
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
                                            class="w-4 h-4"
                                        >
                                            <line x1="2" x2="5" y1="12" y2="12"></line>
                                            <line x1="19" x2="22" y1="12" y2="12"></line>
                                            <line x1="12" x2="12" y1="2" y2="5"></line>
                                            <line x1="12" x2="12" y1="19" y2="22"></line>
                                            <circle cx="12" cy="12" r="7"></circle>
                                        </svg>
                                        <span>Palo Alto, CA</span>
                                    </div>
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
                                            class="w-4 h-4"
                                        >
                                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                                            <polyline points="10 17 15 12 10 7"></polyline>
                                            <line x1="15" x2="3" y1="12" y2="12"></line>
                                        </svg>
                                        <span>16,000 students</span>
                                    </div>
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
                                            class="w-4 h-4"
                                        >
                                            <rect width="14" height="8" x="5" y="2" rx="2"></rect>
                                            <rect width="20" height="8" x="2" y="14" rx="2"></rect>
                                            <path d="M6 18h2"></path>
                                            <path d="M12 18h6"></path>
                                        </svg>
                                        <span>Engineering, Computer Science, Business</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="group relative rounded-lg overflow-hidden bg-[#f1f4f9] transition-all hover:bg-[#2563ea] hover:text-white">
                            <a class="absolute inset-0 z-10" href="#">
                                <span class="sr-only">View</span>
                            </a>
                            <div class="flex flex-col items-start gap-4 p-6">
                                <div class="flex items-center gap-4">
                                    <img
                                        src={college}
                                        alt="College Logo"
                                        width="48"
                                        height="48"
                                        class="rounded-md"
                                        style={{aspectRatio: "48 / 48", objectFit: "cover"}}
                                    />
                                    <h3 class="text-lg font-semibold">Harvard University</h3>
                                </div>
                                <p class="text-sm leading-relaxed">
                                    Harvard University is a private Ivy League research university located in Cambridge, Massachusetts. It
                                    is one of the most prestigious universities in the world, known for its excellence in education,
                                    research, and innovation.
                                </p>
                                <div class="grid gap-2 text-sm text-muted-foreground">
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
                                            class="w-4 h-4"
                                        >
                                            <line x1="2" x2="5" y1="12" y2="12"></line>
                                            <line x1="19" x2="22" y1="12" y2="12"></line>
                                            <line x1="12" x2="12" y1="2" y2="5"></line>
                                            <line x1="12" x2="12" y1="19" y2="22"></line>
                                            <circle cx="12" cy="12" r="7"></circle>
                                        </svg>
                                        <span>Cambridge, MA</span>
                                    </div>
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
                                            class="w-4 h-4"
                                        >
                                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                                            <polyline points="10 17 15 12 10 7"></polyline>
                                            <line x1="15" x2="3" y1="12" y2="12"></line>
                                        </svg>
                                        <span>22,000 students</span>
                                    </div>
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
                                            class="w-4 h-4"
                                        >
                                            <rect width="14" height="8" x="5" y="2" rx="2"></rect>
                                            <rect width="20" height="8" x="2" y="14" rx="2"></rect>
                                            <path d="M6 18h2"></path>
                                            <path d="M12 18h6"></path>
                                        </svg>
                                        <span>Liberal Arts, Law, Medicine</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="group relative rounded-lg overflow-hidden bg-[#f1f4f9] transition-all hover:bg-[#2563ea] hover:text-white">
                            <a class="absolute inset-0 z-10" href="#">
                                <span class="sr-only">View</span>
                            </a>
                            <div class="flex flex-col items-start gap-4 p-6">
                                <div class="flex items-center gap-4">
                                    <img
                                        src={college}
                                        alt="College Logo"
                                        width="48"
                                        height="48"
                                        class="rounded-md"
                                        style={{aspectRatio: "48 / 48", objectFit: "cover"}}
                                    />
                                    <h3 class="text-lg font-semibold">University of California, Berkeley</h3>
                                </div>
                                <p class="text-sm leading-relaxed">
                                    UC Berkeley is a public research university located in Berkeley, California. It is one of the most
                                    prestigious and selective public universities in the United States, known for its strong programs in
                                    science, engineering, and the humanities.
                                </p>
                                <div class="grid gap-2 text-sm text-muted-foreground">
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
                                            class="w-4 h-4"
                                        >
                                            <line x1="2" x2="5" y1="12" y2="12"></line>
                                            <line x1="19" x2="22" y1="12" y2="12"></line>
                                            <line x1="12" x2="12" y1="2" y2="5"></line>
                                            <line x1="12" x2="12" y1="19" y2="22"></line>
                                            <circle cx="12" cy="12" r="7"></circle>
                                        </svg>
                                        <span>Berkeley, CA</span>
                                    </div>
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
                                            class="w-4 h-4"
                                        >
                                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                                            <polyline points="10 17 15 12 10 7"></polyline>
                                            <line x1="15" x2="3" y1="12" y2="12"></line>
                                        </svg>
                                        <span>31,000 students</span>
                                    </div>
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
                                            class="w-4 h-4"
                                        >
                                            <rect width="14" height="8" x="5" y="2" rx="2"></rect>
                                            <rect width="20" height="8" x="2" y="14" rx="2"></rect>
                                            <path d="M6 18h2"></path>
                                            <path d="M12 18h6"></path>
                                        </svg>
                                        <span>Engineering, Computer Science, Environmental Science</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="group relative rounded-lg overflow-hidden bg-[#f1f4f9] transition-all hover:bg-[#2563ea] hover:text-white">
                            <a class="absolute inset-0 z-10" href="#">
                                <span class="sr-only">View</span>
                            </a>
                            <div class="flex flex-col items-start gap-4 p-6">
                                <div class="flex items-center gap-4">
                                    <img
                                        src={college}
                                        alt="College Logo"
                                        width="48"
                                        height="48"
                                        class="rounded-md"
                                        style={{aspectRatio: "48 / 48", objectFit: "cover"}}
                                    />
                                    <h3 class="text-lg font-semibold">Massachusetts Institute of Technology (MIT)</h3>
                                </div>
                                <p class="text-sm leading-relaxed">
                                    MIT is a private research university located in Cambridge, Massachusetts. It is one of the world's most
                                    prestigious universities, known for its cutting-edge research and groundbreaking innovations in science,
                                    technology, and engineering.
                                </p>
                                <div class="grid gap-2 text-sm text-muted-foreground">
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
                                            class="w-4 h-4"
                                        >
                                            <line x1="2" x2="5" y1="12" y2="12"></line>
                                            <line x1="19" x2="22" y1="12" y2="12"></line>
                                            <line x1="12" x2="12" y1="2" y2="5"></line>
                                            <line x1="12" x2="12" y1="19" y2="22"></line>
                                            <circle cx="12" cy="12" r="7"></circle>
                                        </svg>
                                        <span>Cambridge, MA</span>
                                    </div>
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
                                            class="w-4 h-4"
                                        >
                                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                                            <polyline points="10 17 15 12 10 7"></polyline>
                                            <line x1="15" x2="3" y1="12" y2="12"></line>
                                        </svg>
                                        <span>11,000 students</span>
                                    </div>
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
                                            class="w-4 h-4"
                                        >
                                            <rect width="14" height="8" x="5" y="2" rx="2"></rect>
                                            <rect width="20" height="8" x="2" y="14" rx="2"></rect>
                                            <path d="M6 18h2"></path>
                                            <path d="M12 18h6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}