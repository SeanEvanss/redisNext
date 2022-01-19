import CarForm from "../lib/CarForm";
import SearchForm from "../lib/SearchForm";

export default function Home() {
  return (
    <div>
      <h1>
        Create a car ? (will not be shipped to you)
      </h1>
      <CarForm />
      <h1>
        Find a car, except your own
      </h1>
      <SearchForm />
    </div>
  )
}
