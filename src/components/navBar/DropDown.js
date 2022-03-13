import React from 'react';
import { Fragment } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import { Menu, Transition } from '@headlessui/react'
import { IoLogOut, IoSettings, IoList } from "react-icons/io5";
import { setLogout } from '../../redux/reducers/authReducer';

const chevronIcon = (
 <svg
   className="text-gray-900 dark:text-gray-100"
   fill="currentColor"
   xmlns="http://www.w3.org/2000/svg"
   width="24"
   height="24"
   viewBox="0 0 24 24"
 >
   <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
 </svg>
)
const Dropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector( state => state.auth );

  const handdleLogout = () => {
      dispatch(setLogout());
  }

  const handleConfig = () => {
      navigate(`/dashboard/${user.uid}`);
  }

  const handleTodo = () => {
      navigate("/dashboard");
  }

 return (
  <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex items-center text-sm rounded-full hover:opacity-80">
          <span className="sr-only">Abrir preferencias</span>
          <img
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
            src={`https://ui-avatars.com/api/?color=00000&name=${user.name.split(" ").join("")}`}
            alt=""
          />
          <span className="ml-2 font-semibold hidden md:block">{user.name}</span>
          {chevronIcon}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 block mt-2 origin-top-right bg-[#fffffe] dark:bg-[#20303b]  divide-y divide-gray-100 dark:divide-gray-700 rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={handleTodo}
                className={`${
                  active ? 'bg-[#ff8e3c] dark:text-gray-900' : ''
                } group flex gap-1 rounded-md items-center w-full px-4 py-2 text-sm dark:text-[#F0F1F7] text-gray-900 font-semibold`}
              >
                <IoList />
                todo list
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={handleConfig}
                className={`${
                  active ? 'bg-[#ff8e3c] dark:text-gray-900' : ''
                } group flex gap-1 rounded-md items-center w-full px-4 py-2 text-sm dark:text-[#F0F1F7] text-gray-900 font-semibold`}
              >
                <IoSettings />
                Configuración
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={handdleLogout}
                className={`${
                  active ? 'bg-[#ff8e3c] dark:text-gray-900' : ''
                } group flex gap-1 rounded-md items-center w-full px-4 py-2 text-sm text-gray-900 dark:text-[#F0F1F7] font-semibold`}
              >
                <IoLogOut />
                Logout
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
 );
}

export default Dropdown;
