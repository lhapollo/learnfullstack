import { useState } from 'react'

const Title = () => {
  return (
    <div>
      <h1>Unicafe</h1>
    </div>
  )
}

const Input = ({handleGood, handleBad, handleNeutral}) => {
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
    </div>
  )
}

const Stats = ({good, bad, neutral}) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good+1)
  const handleBad = () => setBad(bad+1)
  const handleNeutral = () => setNeutral(neutral+1)

  console.log(good);

  return (
    <div>
      <Title />
      <Input handleGood={() => handleGood()} handleBad={() => handleBad()} handleNeutral = {() => handleNeutral()}/>
      <Stats good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App