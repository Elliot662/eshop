import './App.css';
import { useEffect, useState } from "react"
import Welcome from './welcome';
import ID from './Id';
import Artefact from "./Artefact"
import Price from './price';


const App = () => {
    const [data, setData] = useState("")
    const [error, setError] = useState(null)
    const [isOpen, setIsOpen] = useState(false);
    const [userInput, setUserInput] = useState("546303")

    const getter = async () => {
        try {
            let response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${userInput}`)
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            let newData = await response.json()
            setData(newData);
        } catch (error) {
            setError("Error could not fetch the data")
            console.log(error.message)
        }
    }

    useEffect(() => {
        getter()
    }, [])
    if (!data) {
        return <h1>loading...</h1>
    }
    if (error) {
        return <h1>Their has been an error sorry</h1>
    }

    return (
        <div>
            <Welcome />
            <ID />
            <input
                type="text"
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
            />
            <button onClick={getter}>Enter</button>
            <Artefact data={data} />
        </div>
    )
}
export default App