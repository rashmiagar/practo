import React from 'react';

export default function Button({text, href, type, children}) {
  const element = href ? 'a' : 'button';

  if(type === 'primary') {
    return <button className="rounded bg-blue-500 px-4 py-2 text-white" onClick={()=>window.open(href)}>{children}&nbsp;{text}</button>;
  }
  else if(type === 'secondary') {
    return <button className="border border-blue-600 text-blue-600 font-montserrat py-2 px-8 font-medium rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">{text}</button>;
  }
}
