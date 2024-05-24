import Image from "next/image"
import Link from "next/link"

function Logo() {
  return (
    <div>
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="@/public/vercel.svg" alt="logo" width={100} height={40} className="h-8" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ONL9 Toolkit</span>
        </Link>
    </div>
  )
}

export default Logo