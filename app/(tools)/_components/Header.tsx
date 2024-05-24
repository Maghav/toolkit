import Logo from "./Logo"
import Menu from "./Menu"

function Header() {
  return (
    <div className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Logo />
            <Menu />
        </div>
    </div>
  )
}

export default Header

 