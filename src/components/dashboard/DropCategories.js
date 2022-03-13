import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";

import {
  IoSchool,
  IoHome,
  IoBriefcase,
  IoApps,
  IoChevronDown,
  IoCheckmark,
} from "react-icons/io5";

const categories = [
  {
    id: 4,
    name: "Default",
    icon: <IoApps />,
  },
  {
    id: 1,
    name: "School",
    icon: <IoSchool />,
  },
  {
    id: 2,
    name: "Home",
    icon: <IoHome />,
  },
  {
    id: 3,
    name: "Work",
    icon: <IoBriefcase />,
  },
];

const DropCategories = ({ setCate }) => {
  const [categoria, setCategoria] = useState(categories[0]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  useEffect(() => {
    setCate(categoria);
  }, [setCate, categoria]);

  return (
    <Listbox value={categoria} onChange={setCategoria}>
      {({ open }) => (
        <>
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full bg-[#fffffe] dark:bg-[#20303b] border border-gray-300 dark:border-[#ff8e3c] rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none  focus:border-black sm:text-sm">
              <span className="flex items-center">{categoria.icon}</span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <IoChevronDown className="h-5 w-5 text-black dark:text-[#fffffe]" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-[#fffffe] dark:bg-[#20303b] shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {categories.map((category) => (
                  <Listbox.Option
                    key={category.id}
                    className={({ active }) =>
                      classNames(
                        active ? "dark:text-black bg-[#ff8e3c]" : "text-gray-900",
                        "cursor-default select-none relative group flex gap-1 rounded-md items-center w-full px-4 py-2 text-sm text-gray-900 dark:text-gray-200 font-semibold`"
                      )
                    }
                    value={category}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">{category.icon}</div>
                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-black",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <IoCheckmark className="h-5 w-5" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default DropCategories;
