import {quiz} from '../type/quiztype'
export const quizApi= async (countno:number,level:string,cat:number,typee:string)  :Promise<quiz[]> => {

    // const pre_data = await fetch(`https://opentdb.com/api.php?amount=${countno}&difficulty=${level}&type=multiple`);
    const pre_data = await fetch(`https://opentdb.com/api.php?amount=${countno}&category=${cat}&difficulty=${level}&type=${typee}`);
    
    let {results} =  await pre_data.json();
    let data: quiz[] = results; 
    return data;
}