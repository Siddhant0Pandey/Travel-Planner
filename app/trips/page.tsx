import { auth } from "@/auth"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function TripsPage() {
    const session = await auth();
    if(!session){
return(
    <div>
        <h1>PLease sign in to the account</h1>
    </div>
)
    }

    return(
        <div className="max-w-2xl mx-auto mt-10">
            <h1>Welcome to Your Trips</h1>
            <Link href='/trips/new'>
            
            <Button>Add Trip</Button>
            </Link>
        </div>
    )
   
}