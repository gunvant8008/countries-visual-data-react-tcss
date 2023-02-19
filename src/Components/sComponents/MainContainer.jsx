import React from "react"
import { useState } from "react"
import Header from "../Header"
import InputBar from "../InputBar"
import ResultSection from "./ResultSection"
import VisualSection from "./VisualSection"

const MainContainer = ({ countries }) => {
  const [userQuery, setUserQuery] = useState("")
  const filteredCountriesArray = filterCountries(countries, userQuery)
  const { sortedCountriesWithWorld, totalWorldPopulation } =
    sortCountriesWithWorld(countries, filteredCountriesArray)
  const sortedLanguageArray = sortLanguageArray(filteredCountriesArray)

  return (
    <div>
      <Header countries={countries} />
      <InputBar setUserQuery={setUserQuery} userQuery={userQuery} />
      <ResultSection countries={filteredCountriesArray} userQuery={userQuery} />
      <VisualSection
        countries={sortedCountriesWithWorld}
        totalWorldPopulation={totalWorldPopulation}
        sortedLanguageArray={sortedLanguageArray}
      />
    </div>
  )
}

export default MainContainer

//REVIEW:
function filterCountries(countries, userQuery) {
  return countries.filter(country => {
    if (
      filterByCountryName().includes(country) ||
      filterByCapital().includes(country) ||
      filterByLanguage().includes(country)
    ) {
      return true
    }
  })

  function filterByCountryName() {
    // Filter countries by name
    return countries.filter(country =>
      country.name.common.toLowerCase().startsWith(userQuery.toLowerCase())
    )
  }
  function filterByCapital() {
    // Filter countries by capital
    return countries.filter(country => {
      if (country.capital) {
        return country.capital[0]
          .toLowerCase()
          .startsWith(userQuery.toLowerCase())
      }
    })
  }
  function filterByLanguage() {
    return countries.filter(country => {
      let languagesArray = []
      if (country.languages) {
        languagesArray = Object.values(country.languages)
      }
      for (const language of languagesArray) {
        if (language.toLowerCase().startsWith(userQuery.toLowerCase())) {
          return true
        }
      }
    })
  }
}

function sortCountriesWithWorld(countries, filteredCountriesArray) {
  let totalWorldPopulation = 0
  countries.forEach(country => {
    if (country.population) {
      totalWorldPopulation += country.population
    }
  })
  const countriesWithWorld = [
    { name: { common: "World" }, population: totalWorldPopulation },
    ...filteredCountriesArray
  ]
  const sortedCountriesWithWorld = countriesWithWorld.sort(
    (a, b) => b.population - a.population
  )
  return { sortedCountriesWithWorld, totalWorldPopulation }
}

function sortLanguageArray(filteredCountriesArray) {
  let languagesArray = []
  filteredCountriesArray.forEach(country => {
    if (country.languages) {
      const lan = Object.values(country.languages)
      languagesArray.push(lan)
    }
  })
  const flatLanguageArray = languagesArray.flat()
  const languagesCountObject = flatLanguageArray.reduce((acc, language) => {
    acc[language] ? acc[language]++ : (acc[language] = 1)
    return acc
  }, {})
  const sortedLanguageArray = Object.entries(languagesCountObject).sort(
    (a, b) => b[1] - a[1]
  )
  return sortedLanguageArray
}
