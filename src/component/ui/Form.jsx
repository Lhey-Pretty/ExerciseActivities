import {useState} from "react";

export default function Form()
{

    //useState
    const [name, setName] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
    }
    //event
    return (
        <form method = "POST" onSubmit ={handleSubmit}>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Input name here"
            />
            <button>Submit</button>
        </form>
    )
}