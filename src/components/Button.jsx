import React from 'react'

function Button({
    children,
    type="button",
    bgColor="bg-red-400",
    textColor="text-white",
    className="",
    onClick,
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${type} ${className}`} {...props}
      onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button
