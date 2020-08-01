import React from "react"
import {Maintype} from '../type/quiztype'


const Quizoption: React.FC<Maintype> =({Handlechange,Handletype,Handleupdate,Handleamount,Handlelevel,Handlestart,Mystyle,Amount})=>{
    



    return(
        
        <div style={Mystyle} className='container mt-5 '>
          <div className='row justify-content-center'>
            <div className='col-md-4 shadow-lg bg-color rounded '>
              <h1>Quiz App</h1>
              <label >Select Category</label>
       <select name="quiz_category" className='custom-select' onChange={Handlechange}>
                <option value="0">Any Category</option>
                <option value="9">General Knowledge</option>
                <option value="10">Entertainment: Books</option>
                <option value="11">Entertainment: Film</option>
                <option value="12">Entertainment: Music</option>
                <option value="13">Entertainment: Musicals &amp; Theatres</option>
                <option value="14">Entertainment: Television</option>
                <option value="15">Entertainment: Video Games</option>
                <option value="16">Entertainment: Board Games</option>
                <option value="17">Science &amp; Nature</option>
                <option value="18">Science: Computers</option>
                <option value="19">Science: Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Entertainment: Comics</option>
                <option value="30">Science: Gadgets</option>
                <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                <option value="32">Entertainment: Cartoon &amp; Animations</option>
            </select>
            <br/>
            <label className='mt-2' >Select Type: </label>
		<select name="type" className="form-control" onChange={Handletype}>
			<option value="any">Any Type</option>
			<option value="multiple">Multiple Choice</option>
			<option value="boolean">True / False</option>
		</select>

		
    <label  className='mt-2 mr-4'>Number of Questions:</label>
		<input type="number" name="amount" id="amount" className="custom-switch" min="5" max="50" value={Amount} onChange={Handleamount}/>

		<br/>
    <label >Select Difficulty: </label>
		<select name="difficulty" className='custom-select' onChange={Handlelevel} >
			<option value="any">Any Difficulty</option>
			<option value="easy">Easy</option>
			<option value="medium">Medium</option>
			<option value="hard">Hard</option>
		</select>

		<br/>
    <label className='mt-3'>After Selecting  Your Desired Quiz Click Update to Update the Quiz </label>
    <button className='btn btn-outline-info mt-3 text-white mb-2' type='button' onClick={Handleupdate} data-toggle='collapse' data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Update The Quiz</button><br/>
    {/* <label className='mt-3'>For Random Quiz Direct click Start</label> */}
       <div className='collapse' id='collapseExample'> <button  className=' btn btn-outline-info mt-3 mb-3 text-white' onClick={Handlestart} >Start the quiz</button></div>

      
        </div>
       
        </div></div>

    )
}


export default Quizoption