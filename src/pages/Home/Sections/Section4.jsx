import { useNavigate } from "react-router";
import MySlider from "../../../components/Slider/Slider";
import img1 from "../../../images/banner1.jpeg"
import img2 from "../../../images/banner3.jpeg"
import img3 from "../../../images/banner4.jpeg"
import img4 from "../../../images/banner5.jpeg"
import img5 from "../../../images/banner6.jpeg"
import img6 from "../../../images/banner7.jpeg"



function Section4() {
     const router= useNavigate()

     return (
          <>

               <section class="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 lg:p-6">
                    <div class="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                         
                         <img
                              src={img1}
                              alt="Workspace 1"
                              width="400"
                              height="300"
                              class="object-cover w-full h-64"
                              style={{ aspectRatio: "600/400", objectFit: "cover", objectPosition: "center" }}
                         />
                         <div class="p-4 bg-background">
                              <h3 class="text-xl font-bold">Study MBBS in Russia</h3>
                              <p class="text-sm text-muted-foreground">
                                   Join Top Medical Universities in Russia for a World-Class Education
                              </p>
                              <button onClick={()=> router("/contact")} class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2 mt-4">
                                   Learn More
                              </button>
                         </div>
                    </div>
                    <div class="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                         
                         <img
                              src={img2}
                              alt="Workspace 2"
                              width="400"
                              height="300"
                              class="object-cover w-full h-64"
                              style={{ aspectRatio: "600/400", objectFit: "cover", objectPosition: "top" }}
                         />
                         <div class="p-4 bg-background">
                              <h3 class="text-xl font-bold">Pursue Your MBBS in Ukraine</h3>
                              <p class="text-sm text-muted-foreground">
                                   Affordable and High-Quality Medical Education Awaits You in Ukraine.
                              </p>
                              <button onClick={()=> router("/contact")} class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2 mt-4">
                                   Learn More
                              </button>
                         </div>
                    </div>
                    <div class="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                         
                         <img
                              src={img3}
                              alt="Workspace 3"
                              width="400"
                              height="300"
                              class="object-cover w-full h-64"
                              style={{ aspectRatio: "600/400", objectFit: "cover", objectPosition: "bottom" }}
                         />
                         <div class="p-4 bg-background">
                              <h3 class="text-xl font-bold">MBBS in Belarus</h3>
                              <p class="text-sm text-muted-foreground">
                                   Experience Premier Medical Training in Belarus.
                              </p>
                              <button onClick={()=> router("/contact")} class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2 mt-4">
                                   Learn More
                              </button>
                         </div>
                    </div>
                    <div class="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                        
                         <img
                              src={img4}
                              alt="Workspace 4"
                              width="400"
                              height="300"
                              class="object-cover w-full h-64"
                              style={{ aspectRatio: "600/400", objectFit: "cover", objectPosition: "top" }}
                         />
                         <div class="p-4 bg-background">
                              <h3 class="text-xl font-bold">Study Medicine in Georgia</h3>
                              <p class="text-sm text-muted-foreground">
                              Unlock Your Medical Career with Renowned Universities in Georgia.
                              </p>
                              <button onClick={()=> router("/contact")} class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2 mt-4">
                                   Learn More
                              </button>
                         </div>
                    </div>
                    <div class="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                        
                         <img
                              src={img5}
                              alt="Workspace 5"
                              width="400"
                              height="300"
                              class="object-cover w-full h-64"
                              style={{ aspectRatio: "600/400", objectFit: "cover", objectPosition: "top" }}
                         />
                         <div class="p-4 bg-background">
                              <h3 class="text-xl font-bold">MBBS Opportunities in Uzbekistan</h3>
                              <p class="text-sm text-muted-foreground">
                              Get Quality Medical Education at Leading Institutions in Uzbekistan.
                              </p>
                              <button onClick={()=> router("/contact")} class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2 mt-4">
                                   Learn More
                              </button>
                         </div>
                    </div>
                    <div class="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                         
                         <img
                              src={img6}
                              alt="Workspace 6"
                              width="400"
                              height="300"
                              class="object-cover w-full h-64"
                              style={{ aspectRatio: "600/400", objectFit: "cover", objectPosition: "top" }}
                         />
                         <div class="p-4 bg-background">
                              <h3 class="text-xl font-bold">Your Medical Journey Starts in Kyrgyzstan</h3>
                              <p class="text-sm text-muted-foreground">
                              Affordable MBBS Programs with Excellent Training in Kyrgyzstan.
                              </p>
                              <button onClick={()=> router("/contact")} class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2 mt-4">
                                   Learn More
                              </button>
                         </div>
                    </div>
               </section>

          </>
     );
}

export default Section4;