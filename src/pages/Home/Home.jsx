import Layout from "../../utils/Layout";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Section5 from "./Sections/Section5";
import Section6 from "./Sections/Section6";


function Home() {
  return (
    <>
      <div className="home-app">

        <div className="home-app">

          <Section1 />
          <Section2 />
          <Section4 />
          <Section3 />
          <footer className="bg-[#0077b6] py-8 md:py-12 lg:py-16 ">
            <div className="container px-4 md:px-6 lg:px-8 max-w-screen-xl mx-auto sm:px-10 md:p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white">Company</h3>
                  <ul className="space-y-1">
                    <li>
                      <a className="text-white hover:underline" href="#">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:underline" href="#">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:underline" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white">Quick Links</h3>
                  <ul className="space-y-1">
                    <li>
                      <a className="text-white hover:underline" href="#">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:underline" href="#">
                        College 
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:underline" href="#">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white">Colleges</h3>
                  <ul className="space-y-1">
                    <li>
                      <a className="text-white hover:underline" href="#">
                        MBBS Admission In Russia
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:underline" href="#">
                      MBBS Admission In Ukraine
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:underline" href="#">
                      MBBS Admission In Georgia
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white">Legal</h3>
                  <ul className="space-y-1">
                    <li>
                      <a className="text-white hover:underline" href="#">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:underline" href="#">
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:underline" href="#">
                        Cookie Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 md:mt-12 lg:mt-16 flex flex-col md:flex-row items-center justify-between">
                <div className="text-white">© 2024 MBBS Platform. All rights reserved.</div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  <a className="text-white hover:underline" href="#">
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
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a className="text-white hover:underline" href="#">
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
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-white hover:underline" href="#">
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
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a className="text-white hover:underline" href="#">
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
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
          <footer className="flex flex-col  gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">

            <p className="text-xs text-muted-foreground">© 2024 HR App. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <a className="text-xs hover:underline underline-offset-4" href="#">
                Terms of Service
              </a>
              <a className="text-xs hover:underline underline-offset-4" href="#">
                Privacy
              </a>
            </nav>
          </footer>
        </div>


      </div>
    </>
  );
}

export default Home;