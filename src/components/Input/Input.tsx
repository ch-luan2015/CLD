import * as React from 'react';
import cx from 'classnames';

export enum InputType {
  PRIMARY,
  SECONDARY,
  OUTLINED,
  MINIMAL1,
  MINIMAL2,
}

export enum ButtonType {
  PRIMARY,
  SECONDARY,
}

interface Props {
  title?: string,
  type: InputType
  disabled?: boolean,
  icon?: string,
  large?: boolean,
}

const icons: { [id: string]: JSX.Element } =
{
  "download": <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>,
  "home": <svg className="inline-block w-4 h-4 text-teal-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z" />
  </svg>,

}
function Input(props: Props) {

  return (
    <>
      <div className="mb-4">
        <input className="w-9/12 h-10 px-3 py-2 font-sans text-base font-medium leading-tight tracking-normal border rounded shadow appearance-none w-36 text-gray-9 focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Basic Use" />
      </div>

      <div className="flex items-center w-9/12 h-10 py-2 border-b border-b-2 border-primary-4">
        <input className="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none" type="text" placeholder="Login" aria-label="Full name" />
        <button className="flex-shrink-0 w-24 h-10 px-2 py-1 font-sans text-base font-medium tracking-normal transition-all border-4 rounded bg-primary-4 border-primary-4 hover:bg-primary-3 " type="button">
          Login
        </button>

      </div>

      <div className="flex items-center w-9/12 h-12 mt-10 border-t-1 border-b-1 border-l-1">
        {/* <input className="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none" type="text" placeholder="Login" aria-label="Full name" /> */}
        <input className="w-full h-10 px-3 py-2 font-sans text-base font-medium leading-tight tracking-normal border-none rounded appearance-none text-gray-9 focus:outline-none" aria-label="Full name" type="text" placeholder="Type here ..." />
        <button className="inline-flex items-center justify-center flex-shrink-0 w-24 h-10 px-4 py-1 font-sans text-base font-medium tracking-normal transition-all rounded-r-lg border-t-1 border-b-1 border-r-1 text-gray-9 disabled:text-gray-4 bg-primary-4 hover:bg-primary-3 active:bg-primary-5 disabled:bg-gray-1 border-primary-5 disabled:border-gray-3 " type="button">
          Login
        </button>

      </div>

    </>
  );
}

export { Input };


{/* <div className="w-full max-w-xs">
      <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
            Username
          </label>
          <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
            Password
          </label>
          <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          <p className="text-xs italic text-red-500">Please choose a password.</p>
        </div>

      </form>
      <p className="text-xs text-center text-gray-500">
        ©2020 Phat Thanh Caphe . All rights reserved.
  </p>
    </div> */}
