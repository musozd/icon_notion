import Link from 'next/link'

function Header() {
  return (
    <header className="pl-6 py-6 bg-gradient-to-r from-white to-red-400 mx-auto">
      <nav className="space-x-4 flex justify-between items-center">
        <Link href="/" className="">
          <a>
            <img src="/logo.svg" />
          </a>
        </Link>
        <div className="space-x-6 text-center pr-10">
          <Link href="/">
            <a>Homepage</a>
          </Link>
          <Link href="#comments">
            <a>Comments</a>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
