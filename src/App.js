import './App.css';
import { useEffect, useState } from "react"
import Game from game
import Welcome from welcome

const App = () => {
    const [error, setError] = useState(null)
    const [item, setItem] = useState("")
    const [isOpen, setIsOpen] = useState(false);

  
    useEffect(() => {
        const getter = async () => {
            try {
                let response = await fetch('https://www.mmobomb.com/api1/games/?limits=10')
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                let newItem = await response.json()
                setItem(newItem);
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
        <div className='App'>
            {item.map((game) => {
                <div><Game item={game} /></div>
                })}
  
    <main>
      <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </main>
    
        </div>
    )
}
export default App