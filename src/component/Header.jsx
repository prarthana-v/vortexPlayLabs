import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <header className="bg-transparent text-white sticky top-0 z-50">
        <div className="container-fluid mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div className="col-lg-2 col-6 col-md-4 text-xl font-bold">
            <a href="/">
              <img src="/vpl-logog.png" alt="" />
            </a>
          </div>

          {/* Menu button (for mobile) */}
          <button
            className="lg:hidden text-gray-200 hover:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav
            className={`${isOpen ? 'block' : 'hidden'
              } absolute lg:static top-24 left-0 w-full lg:w-auto lg:block opacity-70 lg:opacity-90 lg:bg-transparent`}
          >
            <ul className="flex flex-col lg:flex-row items-center lg:space-x-16">
              <li className="py-2 lg:py-0">
                <a href="#" className="hover:text-red-500 montserrat font-medium transition-all duration-300">
                  Home
                </a>
              </li>
              <li className="py-2 lg:py-0">
                <a href="#" className="hover:text-red-500 montserrat font-medium transition-all duration-300">
                  About
                </a>
              </li>
              <li className="py-2 lg:py-0">
                <a href="#" className="hover:text-red-500 montserrat font-medium transition-all duration-300">
                  Services
                </a>
              </li>
              <li className="py-2 lg:py-0">
                <a href="#" className="hover:text-red-500 montserrat font-medium transition-all duration-300">
                  Contact
                </a>
              </li>
              <li className="login-button wrapper">
                <button
                  onClick={openModal}
                  className="login bg-indigo-400 px-4 py-2 rounded-sm hover:bg-indigo-800"
                >
                  <span className='font-semibold'>Login</span>
                </button>
              </li>
            </ul>



          </nav>
        </div>
      </header>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-300 p-6 rounded shadow-lg w-11/12 lg:w-1/3">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Login</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="bg-utility w-full text-white px-4 py-2 rounded hover:bg-indigo-800"
              >
                Login
              </button>
            </form>
            <button
              onClick={closeModal}
              className="mt-4 text-blue-800 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  )
}

export default Header
