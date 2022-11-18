import '../Mod/Mod.css'

function Mod(props){
    return(
        <div className='modifierName'>
            {props.modifier.name}
        </div>
    );
}

export default Mod;