import Item from "./Item"; 
// using the item component with one item

function List(){
    return (
        // fragment exemplo that permit the creation of a component without element to facility the problems with DOM:
        <> 
            <h1>My list</h1>
            <ul>
                {/* invocation for component Item */}
                <Item marca="Ferrari" />
                <Item marca="Fiat" />
                <Item marca="Renault" />
                {/* <li>Item 1</li>
                <li>Item 2</li> */}
            </ul>
        </>
    )
}

export default List;