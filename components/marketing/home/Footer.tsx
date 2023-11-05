import Link from "next/link"

export function Footer() {
    return (
      <div className='flex flex-row justify-between text-xs md:text-sm text-[#2E2E2E] py-3 px-4 md:px-6 md:py-4 border-b border-x border-[#2E2E2E]/25'> 
        <div>
            <Link href='https://www.eastpark.xyz/' className="hover:text-[#E7E6E9]/50 hover:underline underline-offset-4 decoration-inherit no-underline">
                © 2023 EPHG
            </Link>    
        </div> 
        <div className="flex flex-row space-x-3">
            <Link href="/terms" className="hover:text-[#E7E6E9]/50 hover:underline underline-offset-4 decoration-inherit no-underline">Terms</Link>
            <Link href="/privacy" className="hover:text-[#E7E6E9]/50 hover:underline underline-offset-4 decoration-inherit no-underline">Privacy</Link>
        </div>
      </div>
    )
  }