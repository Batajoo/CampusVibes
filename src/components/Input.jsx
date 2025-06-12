import React,{forwardRef, useId} from 'react'

const Input = function Input({
  emoji="",
  label="",
  type="text",
  placeholder="",
  className="",
  ref=null,
  ...props}) {
  const id = useId;
  return (
    <div className='w-full'>
      {label && <label
        className='inline-block mb-1 p-1'
        htmlFor={id}
      >
        {label}
        </label>
      }
      <input
        type={type}
        ref={ref}
        id={id}
        placeholder={placeholder}
        className={`px-3 py-2 rounded-2xl text-black outline-none border-gray-400 border-[2px] w-full focus:border-purple-600 duration-200 ${className}`}
        {...props}
      />
    </div>
  )
};

export default Input
