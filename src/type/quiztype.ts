import {ChangeEvent} from 'react'
export type quiz = {

    category: string
    correct_answer:  string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string

}
export type result = {

    correct: number
    wrong:  number
    

}
export type Maintype ={
    Mystyle:any
    Amount:number
    Handlestart:()=>void
    Handleupdate:()=>void
    Handleamount:(e : ChangeEvent<HTMLInputElement>)=>void
    Handlelevel:(e : ChangeEvent<HTMLSelectElement>)=>void
    Handlechange:(e : ChangeEvent<HTMLSelectElement>)=>void
    Handletype:(e : ChangeEvent<HTMLSelectElement>)=>void
    
    
    
}
export type Card={

    Mystyle:any
    
    Count:number
    Quizdata:{

        category: string
        correct_answer:  string
        difficulty: string
        incorrect_answers: string[]
        question: string
        type: string
    
    }
    Choices:string[]
    Store:string
    Handleradio:(e:ChangeEvent<HTMLInputElement>)=>void
    HandleNext: (e : React.FormEvent<EventTarget>)=>void
    Total:number
    
}
export type Final ={
    Mystyle:any
    Total:number
    Correct:number
    Wrong:number
    Handebackhome:()=>void
    
}
// export type change = 