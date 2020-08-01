import React, {useEffect, useState,ChangeEvent} from 'react';
import './App.css';
import {quizApi} from './services/quiz_service'
import {quiz} from './type/quiztype'
import Quizoption from './Component/quizOption'
import Quizcard from './Component/quizCard'
import Resultquiz from './Component/resultQuiz'
import './bootstrap.min.css'

function App() {
   
    let [mystyle,
        setMystyle] = useState < any > ({display: 'block'});
    let [second,
        setSecond] = useState < any > ({display: 'none'});
    let [style3,setStyle3] = useState<any>({display:'none'})
    let [question2,
        setQuestion] = useState < quiz[] > ([]);
    let [quizdata,
        setQuizdata] = useState < quiz > ({
        category: 'testo',
        correct_answer: 'test1',
        difficulty: 'testt',
        incorrect_answers: ['test2','test3','test4'],
        question: 'tests',
        type: 'teste'
    });
    let [count,
        setCount] = useState(0);
    let [category,
        setCategory] = useState(0);
    let [amount,
        setAmount] = useState(5);
    let [level,
        setLevel] = useState('easy');
    let [choices,
        setChoice] = useState(['test1', 'test2']);
    let [correct,
        setCorrect] = useState(0);
    let [wrong,
        setWrong] = useState(0);
    let [a,
        setA] = useState(0);
    let [store,
        setStore] = useState('');
    let[typee,setTypee]= useState('multiple');

    useEffect(() => {

        async function getData() {
            const data : quiz[] = await quizApi(amount, level, category,typee);
            setQuestion(data);

        }
        getData();
    }, [amount,level,category,typee,a])

    const handleradio = (e : ChangeEvent<HTMLInputElement>) : void => {

        setStore(e.target.value)

    }
    const handlecatupdate = () : void => {

        setA(++a);
    }
    const handlestart = () : void => {

        if(question2.length===0)
        {
            alert('alert wait data is loading')
        }
        else{
            setCount(count);
        setQuizdata(question2[count]);
        const shuffleArray = (array : string[]) => [...array].sort(() => Math.random() - 0.5);

        setChoice(shuffleArray(question2[count].incorrect_answers.concat(question2[count].correct_answer)));
        setMystyle({display: 'none'});
        setSecond({display: 'block'})
        }

    }

    const handlnext = (e : React.FormEvent<EventTarget>) => {
        e.preventDefault();
        if (count === question2.length - 1) {
          setSecond({display: 'none'});
          setStyle3({display: 'block'})
            if (store === quizdata.correct_answer) {
                setCorrect(++correct);

            } else if (store !== quizdata.correct_answer) {
                setWrong(++wrong);

            }
        }
        if (count < question2.length - 1) {
            if (store === quizdata.correct_answer) {
                setCorrect(++correct);
            } else if (store !== quizdata.correct_answer) {
                setWrong(++wrong);
               
            }
            setCount(++count);
            setQuizdata(question2[count]);
            const shuffleArray = (array : any[]) => [...array].sort(() => Math.random() - 0.5);
            setChoice(shuffleArray(question2[count].incorrect_answers.concat(question2[count].correct_answer)));

        }

    }
    

    const handlechange = (e : ChangeEvent<HTMLSelectElement>) : void => {

        setCategory(parseInt(e.target.value))

    }
    const handleamount = (e : ChangeEvent<HTMLInputElement>) : void => {
        setAmount(parseInt(e.target.value))
    }
    const handlelevel = (e : ChangeEvent<HTMLSelectElement>) : void => {
        setLevel(e.target.value);

    }
    const handletype=(e : ChangeEvent<HTMLSelectElement>) : void =>{

        setTypee(e.target.value);
    }
    const handlebackhome =()=>
    {
        setMystyle({display: 'block'});
        setStyle3({display: 'none'});
        setCount(0);
        setCorrect(0);
        setWrong(0);
    }

    return (

        <div className="App">
            <Quizoption Mystyle={mystyle}
            Amount={amount}
             Handlestart={handlestart} 
            Handleupdate={handlecatupdate}
            Handlelevel={handlelevel}
            Handleamount={handleamount}
            Handlechange={handlechange}
            Handletype={handletype}
            >
            </Quizoption>
            <br/>
            <Quizcard
            Mystyle={second}
            Quizdata={quizdata}
            Count={count}
            Choices={choices}
            Store={store}
            Handleradio={handleradio}
            HandleNext={handlnext}
            Total={question2.length}

            ></Quizcard>
            <Resultquiz
            Mystyle={style3}
            Total={question2.length}
            Correct={correct}
            Wrong={wrong}
            Handebackhome={handlebackhome}
            ></Resultquiz>
            

     <div className="footer-copyright pt-3 text-white text-center ">© 2020 Copyright:
        <span>
        Syed Sabtain</span>
        </div>
        </div>
    );
}

export default App;
