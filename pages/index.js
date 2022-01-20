import CarForm from "../lib/CarForm";
import SearchForm from "../lib/SearchForm";

export default function Home() {
  return (
    <div style={{padding:24, textAlign:"center"}}>
      <h1>
        Create a car ? (will not be shipped to you)
      </h1>
      <CarForm style={{margin:"auto"}}/>
      <h1>
        Find a car, except your own
      </h1>
      <SearchForm />
    </div>
  )
}
