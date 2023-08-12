import Item from "./Item"

function List(){
    return (
        <> 
            <h1>My list</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Fiat" ano_lancamento={1964}/>
                <Item marca="Renault" />
                <Item marca="Chevolet" ano_lancamento={1999} />
                {/* default props insert one data already done in some component in this case Item */}
                <Item /> 
            </ul>
        </>
    )
}

export default List;

// using the item component with one item
// <> </> FRAGMENT exemple that permit the creation of a component without element to facility the problems with DOM:
// invocation for component in <li> Item 

//                 <li>Item 1</li>
//                 <li>Item 2</li>