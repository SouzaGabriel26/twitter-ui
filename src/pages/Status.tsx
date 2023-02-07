import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import "./Status.css"

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    "Concordo...",
    "Olha, faz sentido!",
    "Parabéns pelo progresso!!"
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    if(newAnswer != '') {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    } else {
      alert('Você deve digitar algo para tweetar!')
    }
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      if(newAnswer != '') {
        setAnswers([newAnswer, ...answers])
        setNewAnswer('')
      } else {
        alert('Você deve digitar algo para tweetar!')
      }
    }
  }

  return (
    <main className="status">
      <Header title="Tweet"/>

      <Tweet
       content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt dolorem ut soluta, 
       reprehenderit blanditiis provident recusandae,
       odio commodi debitis sed ab ex, nulla vero cumque necessitatibus quisquam est laborum quae!"/>

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/souzagabriel26.png" alt="Gabriel Alves" />
          <textarea 
            id="tweet" 
            placeholder="Tweet your answer"
            onChange={(event) => {setNewAnswer(event.target.value)}}
            onKeyDown={handleHotKeySubmit}
            value={newAnswer}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => (<Tweet key={answer} content={answer}/>))}

    </main>
  )
}