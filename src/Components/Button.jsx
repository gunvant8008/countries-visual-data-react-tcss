import React from "react"

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-orange-400 tracking-wider text-gray-700 p-3 m-5 font-bold"
    >
      {children}
    </button>
  )
}

export default Button
