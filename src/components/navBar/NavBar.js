import React from 'react';

const NavBar = () => {
 return (
  <nav className="relative bg-[#fffffe] text-[#0d0d0d]">
      <div className="min-w-screen mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="e">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
       
          <div className=" md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="r" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Ingresar
            </a>
            <a
              href="r"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-[#0d0d0d] bg-[#ff8e3c] hover:bg-[#ff700a]"
            >
              Registrarse
            </a>
          </div>
        </div>
      </div>
       
    </nav>
 );
}

export default NavBar;
