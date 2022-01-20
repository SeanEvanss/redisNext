import handler from "../pages/api/cars";


export default function CarForm() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const formData = Object.fromEntries(form.entries());

        console.log(formData);

        const res = await fetch('/api/cars', {
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
        })

        const result = await res.json();
        console.log(result);
    }

    return (
        <div style={{textAlign:"center"}}>
            <form onSubmit={handleSubmit} style={{margin:"auto"}}>
                <div style={{ textAlign: "left" }}>
                    <p>Car make </p>
                    <input name="make" type="text" placeholder="Car make" />
                    <p>Car image link</p>
                    <input name="image" type="text" />
                    <p>Car model</p>
                    <input name="model" type="text" />
                    <p>Car description</p>
                    <input name="description" type="text" />
                </div>


                <button type="submit" style={{ marginTop: 20 }}>Submit</button>

            </form>

        </div>

    )
}