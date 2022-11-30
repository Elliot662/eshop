import {faker} from 'faker'


const Game = ({item})=>{


    let money = faker.commerce.price(100, 200)

    



return (
<div class = 'center'>

<h2> game name :{item.title} </h2>
<img src ={item.thumbnail}/>

<p>{money}</p>

</div>

) 

}

export default Game
