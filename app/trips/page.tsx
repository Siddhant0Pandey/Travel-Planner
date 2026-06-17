import { auth } from "@/auth"

export default async function TripsPage() {
    const session = await auth();
    if(!session){
return(
    <div>
        <h1>PLease sign in to the account</h1>
    </div>
)
    }
   
}