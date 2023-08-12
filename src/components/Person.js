
// function Person(props) { -> example use the props or him more clean
function Person({ name, age, work, photo }) {
    return (
        <div>
            <img src={photo} alt={name}/>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Work: {work}</p>
        </div>
    )
}

export default Person;