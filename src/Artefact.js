import "./Artefact.css"

const Artefact = ({data}) => {
    return(
        <div>
            <h2>Artefact Name: {data.objectName}</h2>
            <p>Price: {data.price}</p>
            <img src={data.primaryImage}/>
        </div>
    )
}
export default Artefact