import Link from "next/link"
import { Button } from "@/components/ui/button"


function Menu() {
  return (
    <div className="hidden w-full md:block md:w-auto">
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
            <Link className="block py-2 mt-2.5 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" href="/">Home</Link>
        </li>
        <li>
            <Link className="block py-2 mt-2.5 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" href="/tools">Tools</Link>
        </li>
        <li>
            <Link className="block py mt-2.5 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" href={"https://portfolio.onl9.club"}>Portfolio</Link>
        </li>
        <li className="flex space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button asChild>
                <Link href="/login">Login</Link>
            </Button>
        </li>
        <li className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button variant="outline" asChild>
                <Link href="/register">Register</Link>
            </Button>
        </li>
    </ul>
    </div>
            
  )
}

export default Menu 