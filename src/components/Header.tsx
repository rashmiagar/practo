import {useState} from "react";
import Image from 'next/image'
import Button from './Button'

export default function Header() {
  const menus ={
    doctor: [
      {name: 'Doctor Dashboard', url: ""},
      {name: 'Appointments', url: ""},
      {name: 'Schedule Timing', url: ""},
      {name: 'Patients List', url: ""},
      {name: 'Patients Profile', url: ""},
      {name: 'Chat', url: ""},
      {name: 'Invoices', url: ""},
      {name: 'Profile Settings', url: ""},
      {name: 'Reviews', url: ""},
      {name: 'Doctor Register', url: ""},
      {name: 'Blog', url: "", child: [{name: 'Blog', url: ""}, {name: 'Blog View', url: ''}, {name: 'Add Blog', url: ""}]}
    ],
    patients: [
      {name: 'Doctors', url: "", child: [{name: 'Map Grid', url: ""}, {name: 'Map List', url: ''}]},
      {name: 'Search Doctor', url: "", child: [{name: 'Search Doctor 1', url: ""}, {name: 'Search Doctor 2', url: ''}]},
      {name: 'Doctor Profile', url: ""},
      {name: 'Booking', url: "", child: [{name: 'Booking 1', url: ""}, {name: 'Booking 2', url: ''}]},
      {name: 'Patients Profile', url: ""},
      {name: 'Chat', url: ""},
      {name: 'Invoices', url: ""},
      {name: 'Profile Settings', url: ""},
      {name: 'Reviews', url: ""},
      {name: 'Doctor Register', url: ""},
      {name: 'Blog', url: ""}
    ]
  }
  return (
    <nav className="flex flex-wrap items-center justify-around p-5 bg-gray-100">
    <Image src="/images/logo.png" width="124" height="64" />
      <div className="flex md:hidden">
        <button id="hamburger" onClick={toggleMenu}>
          <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
          <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
        </button>
      </div>
      <div className="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
       <div className="dropdown">
          <div>
            <a
              href="#"
              className="block md:inline-block hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
            >
              Home
              <i className="icon icon-chevron-down align-text-bottom ml-2" />
            </a>
          </div>
          <ul className="dropdown-menu absolute w-48 bg-white rounded-lg shadow-xl  hidden sm:mr-24 md:mr-32 lg:mr-48 xl:mr-64s">

           {menus['doctor'].map((item) => (
              <li key={`${item.name}-home`}>
                <a className="rounded-t text-gray-800 hover:bg-gray-600 hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">
                  {item['name']}
                </a>
              </li>
           ))}
          </ul>
        </div>
        <div className="dropdown">
          <div>
            <a
              href="#"
              className="block md:inline-block hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
            >
              Doctors
              <i className="icon icon-chevron-down align-text-bottom ml-2" />
            </a>
          </div>
          <ul className="dropdown-menu absolute w-48 bg-white divide-gray-200 divide-y  rounded-lg shadow-xl hidden sm:mr-24 md:mr-32 lg:mr-48 xl:mr-64s">

           {
            menus['doctor'].map((item) => {
              if(item['child']){
            return (
                    <li key={`${item.name}-doctor`}>
                      <div className="dropdown2">
                        <div>
                          <a className="rounded-t text-gray-800 hover:bg-gray-600 hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">
                            {item['name']}
                            <i className="icon icon-chevron-right ml-2" />
                          </a>
                         </div>
                         <ul className="dropdown-submenu absolute w-48 bg-white divide-gray-200 divide-y  rounded-lg shadow-xl hidden sm:mr-24 md:mr-32 lg:mr-48 xl:mr-64s">
                          {
                            item['child'].map((subitem) => {
                            return (
                              <li key={`${subitem.name}-doctor`}>
                                <a className="rounded-t text-gray-800 hover:bg-gray-600 hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">
                                  {subitem['name']}
                                </a>
                              </li>
                            )}
                          )
                        }
                        </ul>
                      </div>
                    </li>
              )
          }

          else {
            return (
              <li key={`${item.name}-doctor`}>
                    <a className="rounded-t text-gray-800 hover:bg-gray-600 hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">
                      {item['name']}
                    </a>
                  </li>
              )
           }
          })
         }
          </ul>
        </div>
        <div className="dropdown">
          <div >
            <a
              href="#"
              className="block md:inline-block hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
            >
              Patients
              <i className="icon icon-chevron-down align-text-bottom ml-2" />
            </a>
          </div>
           <ul className="dropdown-menu absolute divide-gray-200 divide-y w-48 bg-white rounded-lg shadow-xl hidden sm:mr-24 md:mr-32 lg:mr-48 xl:mr-64s">
            { menus['patients'].map((item) => {
              if(item['child']){
                return (
                  <li key={`${item.name}-patients`}>
                    <div className="dropdown2">
                      <div>
                        <a className="rounded-t text-gray-800 hover:bg-gray-600 hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">
                          {item['name']}
                          <i className="icon icon-chevron-right ml-2" />
                        </a>
                       </div>
                       <ul className="dropdown-submenu absolute w-48 bg-white divide-gray-200 divide-y  rounded-lg shadow-xl hidden sm:mr-24 md:mr-32 lg:mr-48 xl:mr-64s">
                        {
                          item['child'].map((subitem) => {
                          return (
                            <li key={`${subitem.name}-patients`}>
                              <a className="rounded-t text-gray-800 hover:bg-gray-600 hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">
                                {subitem['name']}
                              </a>
                            </li>
                          )}
                        )
                      }
                      </ul>
                    </div>
                  </li>
                )
            }
            else {
              return (
                <li key={`${item.name}-patients`}>
                      <a className="rounded-t text-gray-800 hover:bg-gray-600 hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">
                        {item['name']}
                      </a>
                    </li>
                )
             }
            })
          }
          </ul>
        </div>
      </div>
      <div>
        <Button type="secondary" text="Register" href="http://www.google.com" size='text-xs' className="font-bold">
          <i className="icon icon-user" />
        </Button>
        <span className="mr-2"></span>
        <Button type="primary" text="Login" href="http://www.google.com" size='text-xs' className="font-bold">
          <i className="icon icon-user" />
        </Button>
      </div>
    </nav>
  );
}

function toggleMenu() {
  const navToggle = document.getElementsByClassName("toggle");
  for (let i = 0; i < navToggle.length; i++) {
    navToggle.item(i).classList.toggle("hidden");
  }
};
