import './App.css';
import { useEffect, useState } from "react"


const App = () => {
    const [error, setError] = useState(null)
    const [item, setItem] = useState("")
    useEffect(() => {
        const getter = async () => {
            try {
                let response = await fetch("https://www.mmobomb.com/api1/games")
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                let newItem = await response.json()
                setItem(newItem)
            } catch (error) {
                setError("Error could not fetch the data")
                console.log(error.message)
            }
        }
        getter()
    }, [])
    if (!item) {
        return <h1>The page is loading...</h1>
    }
    if (error) {
        return <h1>There has been an error</h1>
    }
    return (
        <div>
            <Welcome />
            <Game />
        </div>
    )
}
export default App