import React from 'react'
import {Card} from '../type/quiztype'
const Quizcard: React.FC<Card> =({Mystyle,Quizdata,Choices,Store,Count,HandleNext,Handleradio,Total})=>{


    return(
        <div style={Mystyle} className='container'>
            <div className='row mt-5 justify-content-center'><div className='col-md-4 '>
            <ul className='list-group mb-2'>
                <li className='list-group-item list-group-item-action shadow align-content-center' >{Count+1}/{Total}.  {Quizdata?.question.split('&quot;')[0]}</li>
                </ul>
                <form onSubmit={HandleNext}>
                    
                {Choices.map((values,key)=>{
                return(<div key={key} className='shadow rounded-lg'>
                <label className='list-group-item list-group-item-action d-flex justify-content-between align-content-center' htmlFor={values}>
                <label className='justify-content-between align-content-center '  htmlFor={values}>{key+1}.  {values}</label>
                     <input  type="radio" className='justify-content-between align-content-center '  name="choice" id={values} value={values} checked={Store===values} required onChange={Handleradio}  />
                </label>
            
            
                        </div>
            
                    )
                    })}
          
          
            
        
        
        <button type='submit' className='btn btn-outline-info mt-3 text-white' >Next</button>
        

        </form>
        
    </div>
    </div></div>
       
    
    )
}

export default Quizcard