import { getServerSession } from "next-auth"
import { authOptions } from "./utils/auth"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SignoutButton from "./components/LogoutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1 className='text-2xl text-center mt-8 font-semibold'>Hello from index page, this is a public route.</h1>
      <h2 className="text-xl text-center mt-2 font-medium">We need to update the UI of this page.</h2>
      {
        session ? (
          <div>
            <h1>You are authenticated</h1>
            <SignoutButton />
          </div>
        ) : (
          <div className="">
            <h1>Signin here</h1>
            <Button asChild>
              <Link href={"/auth"}>Signin</Link>
            </Button>
          </div>
        )
      }
    </main>
  )
}
