// advanced props
import Proptypes from 'prop-types';

function Item({marca, ano_lancamento}) {
 return (
    <>
        <li>
            {marca} - {ano_lancamento}
        </li>
    </>
 )
}

//sugesttion to next developer for do something
Item.propTypes = {
    marca: Proptypes.string.isRequired,
    ano_lancamento: Proptypes.number,
}

Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lancamento: 0,

}

export default Item

// function Item(props) {

// inside of fragment can I put more because he use it but its more to list with title and list and the fragment it's good
//         <li>{props.marca}</li>
//         <p>Teste</p>

       