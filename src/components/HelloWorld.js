import Phase from './Phase';

function HelloWorld() {
    
    return (
        <div>
            {/* how use other component inside one component */}
            <Phase />
            {/* how works the components */}
            <h1>
                My first component
            </h1>
            <Phase />
        </div>
    ); 
}

export default HelloWorld;