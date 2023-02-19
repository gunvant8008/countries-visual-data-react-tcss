import React from "react"
import CountryCard from "../CountryCard"
const ResultSection = ({ countries }) => {
  const mappedCountries = countries.map((country, index) => {
    return <CountryCard key={index} country={country} />
  })
  return (
    <div className="w-[80%] bg-gray-200 m-auto text-center flex flex-wrap items-center justify-center">
      {mappedCountries}
    </div>
  )
}

export default ResultSection
