import React from "react"

const Header = ({ countries }) => {
  const totalCountries = countries.length
  return (
    <div className="w-[80%] text-center m-auto bg-gray-100 p-4">
      <h1 className="text-[2rem] text-orange-600 font-bold">
        WORLD COUNTRIES DATA
      </h1>
      <p className="font-bold text-gray-500">
        Currently we have {totalCountries} countries
      </p>
    </div>
  )
}

export default Header
