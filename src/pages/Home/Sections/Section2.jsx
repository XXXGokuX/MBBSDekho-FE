import Stu1 from "../../../images/stu1.jpg"
import Stu2 from "../../../images/student1.jpeg"
import Stu3 from "../../../images/student2.jpeg"
import Stu4 from "../../../images/student3.jpeg"

import college1 from "../../../images/c1.jpeg"
import college2 from "../../../images/c2.jpeg"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"


function Section2() {
    const [value,serchValue]=useState("")   
    const router= useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        router(`/search/${value}`)
    }


    return (
        <>
            <div className="flex flex-col min-h-[100dvh]">

                <main className="flex-1">

                    <div class="flex flex-col min-h-[100dvh]">
                        <header class="bg-[#2563ea] text-white py-24 px-4 md:px-6">
                            <div class="container mx-auto max-w-5xl space-y-4 text-center">
                                <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Find Your Perfect Medical Collge</h1>
                                <p class="max-w-3xl mx-auto text-lg md:text-xl">
                                    Explore Opportunities Worldwide with Ease and Confidence.
                                </p>
                                <div class="flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto">
                                    <input
                                        class="flex h-10 w-full border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 px-4 py-3 rounded-md text-black"
                                        type="text"
                                        placeholder="Search"
                                        value={value}
                                        onChange={(e)=>serchValue(e.target.value)}
                                        
                                    />
                                    <button
                                        class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-3 rounded-md"
                                        type="button"
                                        onClick={handleSubmit}
                                    >
                                        Search College
                                    </button>
                                </div>
                            </div>
                        </header>
                        <main class="flex-1">
                            <section class="py-12 md:py-20 bg-muted">
                                <div class="container mx-auto max-w-5xl px-4 md:px-6">
                                    <div class="grid md:grid-cols-2 gap-8 items-center">
                                        <div>
                                            <img
                                                src={college1}
                                                width="550"
                                                height="400"
                                                alt="Predicción Exitosa"
                                                class="rounded-xl"
                                                style={{ aspectRatio: "550/400", objectFit: "cover" }}
                                            />
                                        </div>
                                        <div class="space-y-4">
                                            <h2 class="text-3xl font-bold tracking-tight">Connect with Our Alumni Network</h2>
                                            <p class="text-muted-foreground">
                                                Join a thriving community of MBBS Dekho alumni who are making an impact in the medical field globally. Gain insights, mentorship, and career opportunities to advance your professional journey.
                                            </p>
                                            <Link class="inline-flex items-center gap-2 text-[#2563ea] hover:underline" to="/colleges">
                                                Join Now
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
                                                    class="h-5 w-5"
                                                >
                                                    <path d="M5 12h14"></path>
                                                    <path d="m12 5 7 7-7 7"></path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="py-12 md:py-20">
                                <div class="container mx-auto max-w-5xl px-4 md:px-6">
                                    <div class="grid md:grid-cols-2 gap-8 items-center">
                                        <div class="order-1 md:order-2">
                                            <img
                                                src={college2}
                                                width="550"
                                                height="400"
                                                alt="Testimonios de Clientes"
                                                class="rounded-xl"
                                                style={{ aspectRatio: "550/400", objectFit: "cover" }}
                                            />
                                        </div>
                                        <div class="order-2 md:order-1 space-y-4">
                                            <h2 class="text-3xl font-bold tracking-tight">Discover Your Path to Global Medical Education</h2>
                                            <p class="text-muted-foreground">
                                                Embark on a journey towards excellence in medicine with MBBS Dekho. We offer comprehensive guidance and support to help you succeed in your international medical education.
                                            </p>
                                            <Link class="inline-flex items-center gap-2 text-[#2563ea] hover:underline" to="/contact">
                                                Learn More
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
                                                    class="h-5 w-5"
                                                >
                                                    <path d="M5 12h14"></path>
                                                    <path d="m12 5 7 7-7 7"></path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </main>

                    </div>
                    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f1f4f9]">
                        <div className="container px-4 md:px-6 max-w-screen-xl mx-auto sm:px-10 md:p-5">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Students Testimonials</div>
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Students Say</h2>
                                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Discover the experiences and success stories of students who have achieved their dreams of studying medicine abroad with MBBS Dekho.
                                    </p>
                                </div>
                            </div>
                            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                                <div className="grid gap-4">
                                    <div className="flex flex-col items-start gap-4 rounded-lg bg-background p-6 shadow-sm">
                                        <div className="flex items-center gap-4">
                                            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                                <img className="aspect-square h-full w-full" src={Stu1} alt="Stu1" />
                                            </span>
                                            <div>
                                                <p className="text-sm font-medium leading-none">Priya Sharma</p>
                                                <p className="text-sm text-muted-foreground">Russia</p>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground">
                                            "MBBS Dekho made my dream of studying medicine in Russia a reality. Their guidance and support were invaluable throughout the entire process."
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start gap-4 rounded-lg bg-background p-6 shadow-sm">
                                        <div className="flex items-center gap-4">
                                            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                                <img className="aspect-square h-full w-full" src={Stu2} alt="Stu1" />
                                            </span>
                                            <div>
                                                <p className="text-sm font-medium leading-none">Rahul Verma</p>
                                                <p className="text-sm text-muted-foreground">Ukraine</p>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground">
                                            "Thanks to MBBS Dekho, I am now pursuing my MBBS in Ukraine. Their expertise and personalized assistance made everything so much easier."
                                        </p>
                                    </div>
                                </div>
                                <div className="grid gap-4">
                                    <div className="flex flex-col items-start gap-4 rounded-lg bg-background p-6 shadow-sm">
                                        <div className="flex items-center gap-4">
                                            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                                <img className="aspect-square h-full w-full" src={Stu3} alt="Stu1" />
                                            </span>
                                            <div>
                                                <p className="text-sm font-medium leading-none">Anjali Mehta</p>
                                                <p className="text-sm text-muted-foreground">Philippines</p>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground">
                                            "I was overwhelmed by the idea of studying abroad, but MBBS Dekho provided the clarity and support I needed. I'm now thriving in my medical studies in the Philippines."
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start gap-4 rounded-lg bg-background p-6 shadow-sm">
                                        <div className="flex items-center gap-4">
                                            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                                <img className="aspect-square h-full w-full" src={Stu4} alt="Stu1" />
                                            </span>
                                            <div>
                                                <p className="text-sm font-medium leading-none">Arjun Patel</p>
                                                <p className="text-sm text-muted-foreground">China</p>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground">
                                            "Choosing MBBS Dekho was the best decision I made. They helped me secure a spot in a top medical university in China, and I couldn't be happier."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

            </div>

        </>
    );
}

export default Section2;