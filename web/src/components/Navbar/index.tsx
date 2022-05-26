import Link from 'next/link'
import { useRouter } from 'next/router'
import bn from '../../locals/Home/bn'
import en from '../../locals/Home/en'

import { GlobeAltIcon } from '@heroicons/react/solid'
import { useState } from 'react'

export const Navbar = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : bn

  const [sideNav, showSideNav] = useState(false)

  const changeLanguage = (e: any) => {
    const locale = e.target.value
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <>
      {sideNav && (
        <div className="fixed z-50  h-full w-72 bg-white">
          <ul className="mx-auto flex w-full flex-col justify-center font-bold">
            <li>
              <Link className="hover:underline" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/partnership">
                Partnership
              </Link>
            </li>

            <li>
              <Link className="hover:underline" href="/careers">
                Career
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-center">
            <GlobeAltIcon width={24} color="red" />
            <select
              onChange={changeLanguage}
              className="hover:active appearance-none rounded-lg bg-gray-50 p-2 outline-none"
            >
              <option value="en">English</option>
              <option value="bn">বাংলা</option>
            </select>
          </div>
        </div>
      )}
      <section className="container mx-auto  font-monster  sm:px-0">
        <nav className="relative flex items-center justify-between py-2 px-2">
          <Link href="/">
            <Link href="/" className="text-xl text-gray-900">
              <img
                className="h-7"
                src="/images/logo/lpg-logo.png"
                alt=""
                width="auto"
              />
            </Link>
          </Link>

          <div className="lg:hidden">
            <button
              onClick={() => showSideNav(!sideNav)}
              className="navbar-burger flex items-center rounded p-3 text-gray-900 hover:bg-gray-50"
            >
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
              </svg>
            </button>
          </div>
          <div className="mr-8 hidden lg:block">
            <ul className="flex items-center space-x-8 text-sm font-bold">
              <li>
                <Link className="hover:underline" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/partnership">
                  Partnership
                </Link>
              </li>

              <li>
                <Link className="hover:underline" href="/careers">
                  Career
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden items-center justify-center space-x-4 lg:flex">
            <div className="flex items-center justify-center">
              <GlobeAltIcon width={24} color="red" />
              <select
                onChange={changeLanguage}
                className="hover:active appearance-none rounded-lg bg-gray-50 p-2 outline-none"
              >
                <option value="en">English</option>
                <option value="bn">বাংলা</option>
              </select>
            </div>
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
                  src="/images/logo/lpg-logo.png"
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
    </>
  )
}
