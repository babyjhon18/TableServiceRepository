import '../Pagination/Pagination.css'

function Pagination(){
    return (<div className='padinationRow row'>
        <div className="previousButton col-1">
            <button>Previous</button>
        </div>
        <div className="nextButton col-1">
            <button>Next</button>
        </div>
    </div>);
}

export default Pagination;