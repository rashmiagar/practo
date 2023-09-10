import React from 'react';

export default function Button({text, href, type, children, size='text-l', ...props}) {
  const element = href ? 'a' : 'button';

  if(type === 'secondary') {
    return <button
      className={`${props.className} border border-gray-300 text-black py-2 px-8 font-large rounded hover:bg-blue-600 hover:text-white transition-all duration-0 hover:shadow-[0_0px_0px_50px_rgba(255, 255, 255, 255, 1)] hover:border-2 ${size}`}
      onClick={()=>window.open(href)}
      >
      <span className="mr-2">{children}</span>
      <span>{text}</span>
      </button>
  }
  return <button
      className={`${props.className} rounded bg-blue-500 px-4 py-2 text-white ${size} ease-linear duration-500 delay-0 hover:text-blue-600 hover:bg-white hover:border
       hover:shadow-inner[0_0px_0px_50px_rgba(255, 255, 255, 255, 1)]`}
      onClick={()=>window.open(href)}
      >
      <span className="mr-2">{children}</span>
      <span>{text}</span>
    </button>
}
