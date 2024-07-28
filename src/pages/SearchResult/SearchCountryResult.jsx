import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GETAPI } from "../../API/api";
import { Link } from "react-router-dom";

function SearchCountryResult() {
    const { name } = useParams()
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getColleges = async () => {
            setLoading(true)
            const response = await GETAPI(`colleges/?country=${name}`);;
            setColleges(response.data);
            setLoading(false)
            console.log(colleges)
        }
        getColleges()
    }, [name])



    return (
        <>
            <section class="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3 lg:p-6">
                {colleges.map(college => (<Link class="border hover:bg-[#f1f4f9] bg-card text-card-foreground p-4 rounded-lg shadow-sm" data-v0-t="card" to={`/colleges/${college.college.id}`}><div
                    class="border bg-card text-card-foreground relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out"
                    data-v0-t="card"
                >
                    <div class="absolute top-4 left-4 rounded-md bg-[#2563eb] px-3 py-1 text-sm text-white">
                        {college.college.college_email}
                    </div>

                    <img
                        src={college.college_media[0].image}
                        alt="College"
                        width="400"
                        height="300"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                        class="object-cover w-full h-64 group-hover:opacity-50 transition-opacity"
                    />
                    <div class="p-6 bg-background">
                        <h3 class="text-xl font-bold">{college.college.college_name}</h3>
                        <p class="text-muted-foreground">
                            {college.college_description}
                        </p>
                    </div>
                </div>
                </Link>))}


            </section>{colleges.length === 0 && <section class="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3 lg:p-6">
                <div class="col-span-full flex flex-col items-center justify-center p-8 bg-[#f1f4f9] rounded-lg">
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
                        class="w-12 h-12 text-muted-foreground"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
                        <line x1="9" x2="9.01" y1="9" y2="9"></line>
                        <line x1="15" x2="15.01" y1="9" y2="9"></line>
                    </svg>
                    <h3 class="mt-4 text-xl font-bold">No colleges found</h3>
                    <p class="mt-2 text-muted-foreground">
                        It looks like there are no colleges available at the moment. Please check back later.
                    </p>
                </div>
            </section>}
        </>
    );
}

export default SearchCountryResult;