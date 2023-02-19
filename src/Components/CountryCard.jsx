import React from "react"

const CountryCard = ({ country }) => {
  const { flags, name, capital, languages, population, currencies } = country

  let currency
  if (currencies) {
    currency = Object.keys(currencies)
  }

  let languagesArray
  if (languages) {
    languagesArray = Object.values(languages).join(", ")
  }

  return (
    <div className="break-words w-[250px] h-[300px] bg-white rounded-1 flex flex-col m-4 p-4 items-center justify-between shadow-lg ">
      <img className="w-[60%]" src={flags.svg} alt="flag" />
      <h1 className="uppercase font-semibold text-orange-500">{name.common}</h1>
      <div className="text-left text-sm break-words w-52">
        <p>
          {" "}
          <span className="font-bold"> Capital:</span> {capital}
        </p>
        <p>
          {" "}
          <span className="font-bold"> Languages:</span> {languagesArray}
        </p>
        <p>
          {" "}
          <span className="font-bold">Population:</span> {population}
        </p>
        <p>
          <span className="font-bold">Currency:</span> {currency}
        </p>
      </div>
    </div>
  )
}

export default CountryCard
