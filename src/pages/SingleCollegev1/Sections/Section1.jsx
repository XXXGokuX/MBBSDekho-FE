import { useState } from "react";
import { HiOutlineLocationMarker } from 'react-icons/hi'
import Loader2 from "../../../components/Loading/Loader2";

function Section1({ college, isLoading }) {

    const [active, setActive] = useState(0);

    if (isLoading)
        return <Loader2 />


    return (
        <>
            <div className="section-1">

                <div className="section-container flex flex-col lg:flex-row gap-5">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-6">
                        <div class="grid grid-rows-[1fr_auto] gap-4">
                            {college?.college_media.map((elem, index) => (<img
                                src={elem.image}
                                alt="College"
                                width="800"
                                height="600"
                                style={{ aspectRatio: "800 / 600", objectFit: "cover" }}
                                class={`w-full h-full object-cover rounded-lg  ${active === index ? 'block':'hidden'}`} 
                                key={index}
                            />))
                            }
                            <div class="grid grid-cols-7 gap-2">
                            {college && college?.college_media.map((elem,index)=>(<img
                                    src={elem.image}
                                    alt="College"
                                    width="100"
                                    height="100"
                                    class={`w-full h-full object-cover rounded-md shadow-lg ${active===index ? 'blur-none':'blur-[1px]'}`} 
                                    style={{ aspectRatio: "100 / 100", objectFit: "cover" }}
                                    onClick={()=> setActive(index)} key={index}
                                />))}
                                
                            </div>
                        </div>
                        <div class="space-y-4">
                            <h1 class="text-3xl font-bold">{college?.college?.college_name}</h1>
                            <div class="flex items-center gap-2 text-muted-foreground">
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
                                    <line x1="2" x2="5" y1="12" y2="12"></line>
                                    <line x1="19" x2="22" y1="12" y2="12"></line>
                                    <line x1="12" x2="12" y1="2" y2="5"></line>
                                    <line x1="12" x2="12" y1="19" y2="22"></line>
                                    <circle cx="12" cy="12" r="7"></circle>
                                </svg>
                                <span>{college?.college_address}</span>
                            </div>
                            <div>
                                <p> {college?.college_description}</p>
                                <p class="mt-4"></p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Section1;