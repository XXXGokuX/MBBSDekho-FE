import { Link } from "react-router-dom";
import Sucess from "../../../images/img/student-mbbs.jpeg"

function Section1() {
   return (
      <>
         <div className="">
            <div className="flex flex-col min-h-[100dvh]">

               <main className="flex-1 ">
                  <section className="w-full py-12 md:py-24 lg:py-32 max-w-screen-xl mx-auto px-2 sm:px-10 md:p-5">
                     <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                           <div className="flex flex-col justify-center space-y-4">
                              <div className="space-y-2">
                                 <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Start Your Journey

                                 </h1>
                                 <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    In our pursuit of ensuring quality service, we have tied-up with the rop and most perstigious medical universities worldwide


                                 </p>
                              </div>
                              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                 <Link
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#2563ea] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#2563ea]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    to="/colleges"
                                 >
                                    Get Started
                                 </Link>
                                 <Link
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    to="/contact"
                                 >
                                    Learn More
                                 </Link>
                              </div>
                           </div>
                           <img
                              src={Sucess}
                              width="550"
                              height="550"
                              alt="Hero"
                              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                           />
                        </div>
                     </div>
                  </section>
                  <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f1f4f9]">
                     <div className="container px-4 md:px-6 max-w-screen-xl mx-auto sm:px-10 md:p-5">
                        <div className="grid max-w-5xl mx-auto gap-8 sm:grid-cols-2 md:grid-cols-3">
                           <div className="flex flex-col items-start gap-2">
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
                                 className="h-8 w-8 text-[#2563ea]"
                              >
                                 <path d="M8 2v4"></path>
                                 <path d="M16 2v4"></path>
                                 <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                 <path d="M3 10h18"></path>
                              </svg>
                              <h3 className="text-xl font-bold">Your Gateway to MBBS Abroad</h3>
                              <p className="text-muted-foreground">Expert Support for Your International Medical Education Journey</p>
                           </div>
                           <div className="flex flex-col items-start gap-2">
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
                                 className="h-8 w-8 text-[#2563ea]"
                              >
                                 <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                 <circle cx="9" cy="7" r="4"></circle>
                                 <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                 <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                              </svg>
                              <h3 className="text-xl font-bold">Transform Your Future</h3>
                              <p className="text-muted-foreground">Study Medicine Internationally with MBBS Dekho</p>
                           </div>
                           <div className="flex flex-col items-start gap-2">
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
                                 className="h-8 w-8 text-[#2563ea]"
                              >
                                 <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                 <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                              </svg>
                              <h3 className="text-xl font-bold">MBBS Dekho</h3>
                              <p className="text-muted-foreground">Your Pathway to Global Medical Education</p>
                           </div>
                        </div>
                     </div>
                  </section>
               </main>

            </div>

         </div>
      </>
   );
}

export default Section1;
