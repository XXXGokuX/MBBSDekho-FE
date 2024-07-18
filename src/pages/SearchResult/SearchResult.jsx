import { Link, useNavigate, useParams } from "react-router-dom"
import college1 from "../../images/college-1.jpeg"
import { useEffect, useState } from "react";
import { GETAPI } from "../../API/api";
export default function SearchResult() {

    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(false)
    const [value, serchValue] = useState("")
    const router= useNavigate()

    const { name } = useParams()
    
   

    useEffect(() => {
        const getColleges = async () => {
            setLoading(true)
            const response = await GETAPI('colleges/');
            setColleges(response.data.filter(college => college.college.college_name.toLowerCase().includes(name.toLowerCase())));
            setLoading(false)
            console.log(colleges)
        }
        getColleges()
    }, [name])





    return (

        <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-8">
            <div class="mb-8">
                <input
                    class="flex h-10 border border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-lg bg-muted px-4 py-2 text-base"
                    placeholder="Search for colleges..."
                    type="search"
                    value={value}
                    onChange={e=> serchValue(e.target.value)}
                    onKeyDown={(e)=>{
                        if(e.key==="Enter"){
                            router(`/search/${value}`)
                        }
                    }}

                />
            </div>
            <div class="grid gap-6">
                {colleges.length!==0 ? colleges.map(college => (<Link class="border hover:bg-[#f1f4f9] bg-card text-card-foreground p-4 rounded-lg shadow-sm" data-v0-t="card" to={`/colleges/${college.college.id}`}>
                    <div class="flex items-start gap-4">
                        <img
                            src={college.college_media[0].image}
                            alt="University of California, Berkeley"
                            width="120"
                            height="120"
                            class="rounded-lg object-cover"
                            style={{ aspectRatio: "120 / 120", objectFit: "cover" }}
                        />
                        <div class="flex-1">
                            <h3 class="text-lg font-medium">{college.college.college_name}</h3>
                            <p class="text-muted-foreground">{college.college_address}</p>
                            <p class="mt-2">
                                {college.college_description}
                            </p>
                        </div>
                    </div>
                </Link>)) : <div className="flex flex-col items-center justify-center min-h-[80vh] gap-6 px-4 sm:px-6 md:px-8">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">No Colleges Found</h1>
                        <p className="text-muted-foreground">
                            Sorry, we couldn't find any colleges matching your search. Please try refining your search.
                        </p>
                    </div></div>}
            </div>
        </div>
    )
}