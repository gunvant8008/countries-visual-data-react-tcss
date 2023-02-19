import { useEffect, useState } from "react"
import Button from "../Button"
import Chart from "../Chart"

const VisualSection = ({
  countries,
  totalWorldPopulation,
  sortedLanguageArray
}) => {
  const [chartDisplay, setChartDisplay] = useState("population")
  const [charts, setCharts] = useState([])

  useEffect(() => {
    if (chartDisplay === "population") {
      const top10Countries = getTop10FromArray(countries)
      const populationCharts = top10Countries?.map((country, index) => {
        return (
          <Chart
            key={index}
            country={country}
            totalWorldPopulation={totalWorldPopulation}
            chartDisplay={chartDisplay}
          />
        )
      })
      setCharts(populationCharts)
    }
    if (chartDisplay === "language") {
      const top10Languages = getTop10FromArray(sortedLanguageArray)
      const languageCharts = top10Languages?.map((language, index) => {
        return (
          <Chart key={index} language={language} chartDisplay={chartDisplay} />
        )
      })
      setCharts(languageCharts)
    }
  }, [chartDisplay, countries])

  return (
    <div className="flex flex-col items-center p-10 gap-4">
      <div className="text-center">
        <Button onClick={() => setChartDisplay("population")}>
          POPULATION
        </Button>
        <Button onClick={() => setChartDisplay("language")}> LANGUAGES</Button>
        <h1 className="text-xl font-bold">
          {chartDisplay === "population"
            ? "Most Populated Countries"
            : "Most Spoken Languages."}
        </h1>
      </div>
      <div className="bg-slate-600 rounded-xl w-full text-center flex flex-col justify-center items-center p-4">
        {charts}
      </div>
      <Button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }
      >
        Go To Top
      </Button>
    </div>
  )
}

export default VisualSection

function getTop10FromArray(array) {
  return array.filter((item, i) => i < 10)
}
