import '../Mod/Mod.css'

function Mod(props){
    return(<div>
        {
            props.modifier.without < 0 ? 
            <div className='modifierName without'>
                {props.modifier.name}
            </div>
            :
            <div className='modifierName'>
                {props.modifier.name}
            </div>
        }
        </div>
    );
}

export default Mod;