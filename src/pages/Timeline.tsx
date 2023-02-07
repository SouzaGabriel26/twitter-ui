import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Timeline.css"

export function Timeline() {

  const [newTweet, setNewTweet] = useState('')

  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Tweet 2',
    'Testando tweetar!'
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    if(newTweet != '') {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    } else {
      alert('Você deve digitar algo para tweetar!')
    }
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      if(newTweet != '') {
        setTweets([newTweet, ...tweets])
        setNewTweet('')
      } else {
        alert('Você deve digitar algo para tweetar!')
      }
    }
  }

  return (
    <main className="timeline">
      <Header title="Home"/>


      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/souzagabriel26.png" alt="Gabriel Alves" />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value);
            }}
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => (<Tweet key={tweet} content={tweet}/>))}

    </main>
  )
}