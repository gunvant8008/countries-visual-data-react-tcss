import React from "react"

const Chart = ({ country, totalWorldPopulation, language, chartDisplay }) => {
  const newName =
    chartDisplay === "population" ? country?.name?.common : language?.[0]
  const newNumber =
    chartDisplay === "population"
      ? country?.population.toLocaleString()
      : language?.[1]
  const newPercentage =
    chartDisplay === "population"
      ? `${(country?.population / totalWorldPopulation) * 100}`
      : `${language?.[1]}`
  // useEffect(() => {
  //   if (chartDisplay === "population") {
  //     const populationPercentage =
  //       (country?.population / totalWorldPopulation) * 100
  //     const newState = {
  //       percentage: populationPercentage,
  //       name: country?.name?.common,
  //       numbers: country?.population
  //     }
  //     //REVIEW:
  //     setState(newState)
  //   }
  //   if (chartDisplay === "population") {
  //     const languagePercentage = language?.[1]
  //     const newState = {
  //       percentage: languagePercentage,
  //       name: language?.[0],
  //       numbers: language?.[1]
  //     }
  //     setState(newState)
  //   }
  // }, [chartDisplay])

  return (
    <div className="bg-gray-200 w-[90%] p-4 flex items-center m-2">
      <h1 className="flex-initial w-[20%] font-bold text-center">{newName}</h1>
      <div className="w-full h-6 bg-gray-400 rounded-full ">
        <div
          className="h-6 bg-orange-500 rounded-full"
          style={{ width: `${newPercentage}%` }}
        ></div>
      </div>

      <h1 className="flex-initial w-[20%] text-center font-bold">
        {newNumber}
      </h1>
    </div>
  )
}

export default Chart
