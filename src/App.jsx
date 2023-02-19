import MainContainer from "./Components/sComponents/MainContainer"
import useFetch from "./hooks/useFetch"
import "./App.css"

function App() {
  const {
    data: countries,
    loading,
    error
  } = useFetch("https://restcountries.com/v3.1/all")
  return (
    <div>
      {loading && <p>{loading}</p>}
      {countries && <MainContainer countries={countries} />}
      {error && <p>{error}</p>}
    </div>
  )
}

export default App
