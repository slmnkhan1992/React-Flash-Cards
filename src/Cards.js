import React from 'react'
import './App.css';
import { useState  } from 'react';



function Cards() {

  const questions = [
    {
      id: 1,
      question: "What language is React based on?",
      answer: "JavaScript",
    },
    {
      id: 2,
      question: "What are the building blocks of React apps?",
      answer: "Components",
    },
    {
      id: 3,
      question: "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX",
    },
    {
      id: 4,
      question: "How to pass data from parent to child components?",
      answer: "Props",
    },
    {
      id: 5,
      question: "How to give components memory?",
      answer: "useState hook",
    },
    {
      id: 6,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element",
    },
  ];

  const [visible,setVisible] = useState(null)

  const handler = (id)=>{
    setVisible(id !== visible ? id : null)
  } 

  return (
    <>
    <h1 style={{textAlign: 'center', marginTop: '10px', fontSize: '3rem', fontWeight: "bolder"}}>Flash Cards</h1>
    <div className='container' style={{ display: 'flex', height: '100%', width: '100%', flexWrap: 'wrap', gap: '15px' }}>

      {
        questions.map((item) => (
          <div onMouseOver={()=>handler(item.id)}
          className={item.id === visible && item.id === 1 ? 'red' :
            item.id === visible && item.id === 2 ? 'green' :
            item.id === visible && item.id === 3 ? 'yellow' :
            item.id === visible && item.id === 4 ? 'blue' :
            item.id === visible && item.id === 5 ? 'pink' :
            item.id === visible && item.id === 6 ? 'black' :
            ''}
          >

            <h6>{item.id === visible ? item.answer : item.question}</h6>
          </div>
        ))
      }
    </div>
    </>
  )
}


export default Cards