import handler from "../pages/api/cars";


export default function CarForm(){
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form= new FormData(e.target);
        const formData=  Object.fromEntries(form.entries());
        
        console.log(formData);
        
        const res= await fetch('/api/cars', {            
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
        })

        const result= await res.json();
        console.log(result);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input name="make" type= "text"/>
            <input name="model" type= "text"/>
            <input name="image" type= "text"/>
            <textarea name="description" type= "text"/>

            <button type="submit">Submit</button>

        </form>
    )
}