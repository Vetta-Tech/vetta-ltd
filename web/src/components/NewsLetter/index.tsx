import React, { Component } from 'react'

interface ColorProps {
  color: 'black' | 'white'
}

class NewsLetter extends Component<ColorProps> {
  render() {
    return (
      <div>
        <section
          className={`2xl:py-30 overflow-hidden bg-${this.props.color} my-10 py-20 font-monster`}
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="-m-10 flex flex-wrap">
                <div className="w-full p-10 lg:w-2/3">
                  <div className="relative rounded-3xl bg-violet-600 px-6 pt-16 pb-20 lg:px-24">
                    <img
                      className="absolute top-0 right-0 -mt-12 mr-12 lg:block"
                      src="https://shuffle.dev/zospace-assets/images/stars.svg"
                      alt=""
                    />
                    <div>
                      <h3 className="font-heading mt-6 mb-12 text-4xl font-bold text-white lg:text-4xl">
                        Subscribe now
                      </h3>
                      <div className="mb-8 sm:flex sm:max-w-md sm:items-center sm:rounded-full sm:bg-white">
                        <span className="hidden pl-6 sm:inline-block lg:pl-10">
                          <svg
                            width={37}
                            height={37}
                            viewBox="0 0 37 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="18.5"
                              cy="18.5"
                              r="9.5"
                              fill="#1F40FF"
                              fillOpacity="0.15"
                            />
                            <circle
                              cx="18.5"
                              cy="18.5"
                              r="18.5"
                              fill="#1F40FF"
                              fillOpacity="0.06"
                            />
                            <circle
                              cx="18.5"
                              cy="18.5"
                              r="2.5"
                              fill="#282C36"
                            />
                          </svg>
                        </span>
                        <input
                          className="mb-4 w-full rounded-full py-5 pl-8 font-bold placeholder-gray-900 focus:outline-none sm:mb-0 sm:w-auto sm:pl-4"
                          type="email"
                          placeholder="Drop your Email"
                        />
                        <button className="ml-auto w-full rounded-full bg-gray-900 px-10 py-5 font-bold text-white transition duration-200 hover:bg-gray-800 sm:w-auto">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full p-10 lg:w-1/3">
                  <div className="relative rounded-xl bg-gray-600 px-10 py-12">
                    <div
                      className="absolute top-0 right-0 -mt-6 mr-10 h-14 w-14 bg-gray-600 lg:left-0 lg:-ml-5 lg:mt-10"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                      }}
                    />
                    <h4 className="mb-10 text-3xl font-bold text-white">
                      Benefits
                    </h4>
                    <ul>
                      <li className="mb-3 flex items-center">
                        <span className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900">
                          <svg
                            width={18}
                            height={14}
                            viewBox="0 0 18 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.13504 13.3377L0 7.20264L0.810243 6.3924L6.13504 11.7172L17.1898 0.662476L18 1.47272L6.13504 13.3377Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                        <p className="text-lg font-bold text-white">
                          Discounts
                        </p>
                      </li>
                      <li className="mb-3 flex items-center">
                        <span className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900">
                          <svg
                            width={18}
                            height={14}
                            viewBox="0 0 18 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.13504 13.3377L0 7.20264L0.810243 6.3924L6.13504 11.7172L17.1898 0.662476L18 1.47272L6.13504 13.3377Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                        <p className="text-lg font-bold text-white">Offers</p>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900">
                          <svg
                            width={18}
                            height={14}
                            viewBox="0 0 18 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.13504 13.3377L0 7.20264L0.810243 6.3924L6.13504 11.7172L17.1898 0.662476L18 1.47272L6.13504 13.3377Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                        <p className="text-lg font-bold text-white">
                          News/Articles
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default NewsLetter
