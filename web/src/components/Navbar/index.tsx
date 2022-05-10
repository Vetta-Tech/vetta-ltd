import Link from 'next/link'

export const Navbar = () => {
  return (
    <section className="container mx-auto py-2  px-4 font-monster lg:px-10">
      <nav className="relative flex items-center justify-between">
        <Link href="/">
          <Link href="/" className="text-xl text-gray-900">
            <img
              className="h-7"
              src="/images/logo/lpg-logo.jpg"
              alt=""
              width="auto"
            />
          </Link>
        </Link>

        <div className="lg:hidden">
          <button className="navbar-burger flex items-center rounded p-3 text-gray-900 hover:bg-gray-50">
            <svg
              className="h-3 w-10"
              width={39}
              height={13}
              viewBox="0 0 39 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={39} height={2} rx={1} fill="currentColor" />
              <rect
                x={19}
                y={11}
                width={20}
                height={2}
                rx={1}
                fill="currentColor"
              />
              <title>Mobile menu</title>
            </svg>
          </button>
        </div>
        <div className=" mr-8 hidden lg:block">
          <ul className="flex items-center space-x-8 text-sm font-bold">
            <li>
              <a className="hover:underline" href="#">
                Product
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Story
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/careers">
                Careers
              </a>
            </li>
            <li>
              <Link className="hover:underline" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <Link
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.romexbd"
          >
            <a className="inline-block cursor-pointer rounded-full border border-black bg-black px-12 py-4 font-bold text-white transition duration-200 hover:bg-white hover:text-black">
              Get Vetta
            </a>
          </Link>
        </div>
      </nav>
      <div className="navbar-menu fixed top-0 left-0 bottom-0 z-50 hidden w-5/6 max-w-sm">
        <div className="navbar-backdrop fixed inset-0 bg-blue-600 opacity-80" />
        <nav className="relative flex h-full w-full flex-col overflow-y-auto bg-gray-800 py-8">
          <div className="mb-16 flex items-center pr-6">
            <a className="ml-10 text-2xl font-bold text-white" href="#">
              <img
                className="h-7"
                src="/images/logo/lpg-logo.jpg"
                alt=""
                width="auto"
              />
            </a>
          </div>
          <div>
            <ul>
              <li className="mb-1 px-10">
                <a
                  className="block rounded-xl py-4 pl-8 text-xl text-white hover:bg-gray-500"
                  href="#"
                >
                  Product
                </a>
              </li>
              <li className="mb-1 px-10">
                <a
                  className="block rounded-xl py-4 pl-8 text-xl text-white hover:bg-gray-500"
                  href="#"
                >
                  Story
                </a>
              </li>
              <li className="mb-1 px-10">
                <a
                  className="block rounded-xl py-4 pl-8 text-xl text-white hover:bg-gray-500"
                  href="#"
                >
                  Features
                </a>
              </li>
              <li className="mb-1 px-10">
                <a
                  className="block rounded-xl py-4 pl-8 text-xl text-white hover:bg-gray-500"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  )
}
