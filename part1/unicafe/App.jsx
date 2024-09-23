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
      <Button onclick={handleGood} text="Good"/>
      <Button onclick={handleNeutral} text="Neutral"/>
      <Button onclick={handleBad} text="Bad"/>
    </div>
  )
}

const Button = ({onclick, text}) => {
  return (
    <button onClick={onclick}>{text}</button>
  )
}

const Stats = ({good, bad, neutral, total, avg, positive}) => {
  if (total == 0) {
    return (
      <div>
        <p>Stats pls</p>
      </div>
    )
  } else return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="Good" value={good}/>
      <StatisticLine text="Neutral" value={neutral}/>
      <StatisticLine text="Bad" value={bad}/>
      <StatisticLine text="Average" value={avg}/>
      <StatisticLine text="Positive" value={(positive*100)+'%'}/>
      <StatisticLine text="Total" value={total}/>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <p>{text}: {value}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [avg, setAvg] = useState(0.0)
  const [positive, setPositive] = useState(0.0)
  let newGood = good, newBad = bad
  const handleGood = () => {
    newGood = good+1
    setGood(newGood)
    updateStats()
  }
  const handleBad = () => {
    newBad = bad+1
    setBad(newBad)
    updateStats()
  }
  const handleNeutral = () => {
    setNeutral(neutral+1)
    updateStats()
  }

  const updateStats = () => {
    const newTotal = total + 1;
    const newAvg = (newGood - newBad)/newTotal;
    console.log("new total", newTotal);
    console.log("sum", newGood, newBad);
    setTotal(newTotal)
    setPositive(newGood/newTotal);
    setAvg(newAvg);
  }

  return (
    <div>
      <Title />
      <Input handleGood={() => handleGood()} handleBad={() => handleBad()} handleNeutral = {() => handleNeutral()}/>
      <Stats good={good} bad={bad} neutral={neutral} total={total} avg={avg} positive={positive}/>
    </div>
  )
}

export default App