

// function Person(props) {
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