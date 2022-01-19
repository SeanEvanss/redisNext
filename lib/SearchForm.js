import { useState } from "react"

export default function SearchForm() {
    const [hits, setHits] = useState([]);

    const searchCars = async (event) => {
        const q = event.target.value;
        if (q.length > 3) {
            console.log(q);
            const params = new URLSearchParams({ q });
            console.log(params);
            const res = await fetch("/api/search?" + params);
            const result = await res.json();
            console.log(result);
            setHits(result["cars"]);
        }


    };

    return (
        <div>
            <input onChange={searchCars} type="text" placeholder="Search for a car" />
            <ul>
                {hits.map(car => (
                    <li ley={car.entityID}>
                        <h2 >
                            {car.make}
                        </h2>
                        <h2>
                            {car.model}
                        </h2>                        
                        <img src={car.image} />
                        <p>
                            {car.description}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}