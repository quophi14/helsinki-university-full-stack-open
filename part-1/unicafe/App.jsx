import { useState } from "react"

const StatisticLine = ({text, value}) => {
  return(
    <tr>
     <td>{text}</td>
     <td>{value}</td>    
    </tr>
  )
  
}

const Button = ({text,onClick}) => {

  return(
    <button onClick={onClick}>{text}</button>
  )
}





const Statistics = ({good, neutral, bad, average, positive,total}) => {
  if (total === 0) return (
    <h1>No feedback given </h1>
  )
  return (
    <table>
      <tbody>
      <StatisticLine text='Good' value={good}/>
      <StatisticLine text='Neutral' value={neutral} />
      <StatisticLine text='Bad' value={bad}/>
      <StatisticLine text='All' value={total}/>
      <StatisticLine text='Average' value={average}/>
      <StatisticLine text='Positive Feedback' value={positive}/>
      </tbody>
    </table>
  );
}







const App = () => {


  


  // category for various feedbacks
  // save each click to it's own button

  const[average, SetAverage] = useState(0);
  const[positive, setPositive] = useState(0);
  
  const [total, setTotal] = useState(0); // for the feedbacks giveny

  const [good, setGood] = useState(0); // for good feedback

  const goodFeedBack = () => {
    const updatedGood = good + 1
    setGood((prev) => prev + 1);
    const sum = updatedGood + neutral + bad;
    setTotal(sum);
    SetAverage(sum/3);
    setPositive((updatedGood/sum) * 100);
    
  }

  const [neutral, setNeutral] = useState(0); // for neutral feedback
  const neutralFeedBack = () => {
    const updatedNeutral = neutral + 1;
    setNeutral((prev) => prev + 1);
    setTotal(updatedNeutral + good + bad);
    SetAverage((updatedNeutral + good + bad) / 3);
  
  }

  const [bad, setBad] = useState(0); // for bad feedback
  const badFeedBack = () => {
    const updatedBad = bad + 1;
    setBad((prev) => prev + 1);
    setTotal(updatedBad + good + neutral);
    SetAverage((updatedBad + good + neutral)/3);

  }

  return (
    <>
      <h1>Give FeedBack</h1>
      <div>
        <Button text='Good' onClick={goodFeedBack}/>
        <Button text='Neutral' onClick={neutralFeedBack}/>
        <Button text='Bad' onClick={badFeedBack}/>
        
        </div>
      <h1>Statistics</h1>
      <Statistics 
      good={good} 
      neutral={neutral}
      bad={bad}
      total={total}
      average={average}
      positive={positive.toFixed(5) +' %'}/>
    </>
  );
}

export default App
