import React from 'react'
import {Final} from  '../type/quiztype'

const Resultquiz : React.FC<Final>=({Total,Correct,Wrong,Mystyle,Handebackhome})=>{


    return(

        <div style={Mystyle} className='container'>
            <div className='row justify-content-center mt-5'><div className='col-md-4 shadow'>
            <h1>Quiz Result</h1>
          
    <ul className='list-group align-content-center d-flex'>
        
        <li className='list-group-item d-flex justify-content-between bg-result'><label>Total Questions </label>  <span>{Total}</span></li>
        <li className='list-group-item d-flex justify-content-between bg-result'><label>Correct Answer </label>  <span>{Correct}</span></li>
        <li className='list-group-item d-flex justify-content-between bg-result'><label>Wrong Answer </label>  <span>{Wrong}</span></li>
        
    </ul>
    <button className='btn btn-outline-info mt-3 mb-3 text-white' onClick={Handebackhome} data-toggle='collapse' data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Go back to Homepage</button>
        </div>
        </div></div>
    )
}

export default  Resultquiz