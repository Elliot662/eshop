import "./Artefact.css"

const Artefact = ({data}) => {
    let price = Number(`${data.objectID}`) * 3
    return(
        <div>
            <h2>Artefact Name: {data.objectName}</h2>
            <p>Price: £{price}</p>
            <img src={data.primaryImage}/>
        </div>
    )
}
export default Artefact