import React, { useState } from 'react'
import ReactDOM from "react-dom";

const Button = ({ text, handler }) => {
  return <button onClick={handler}>{text}</button>;
};

const Statictic = ({ statistic, score }) => {
  return (
    <tr>
      <td>{statistic}</td>
      <td>{score}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = `${(good / all) * 100}%`;

  return (
    <table>
      <tbody>
        <Statictic statistic="good" score={good} />
        <Statictic statistic="neutral" score={neutral} />
        <Statictic statistic="bad" score={bad} />
        <Statictic statistic="all" score={all} />
        <Statictic statistic="average" score={average} />
        <Statictic statistic="positive" score={positive} />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button text="good" handler={() => setGood((a) => a + 1)} />
        <Button text="neutral" handler={() => setNeutral((a) => a + 1)} />
        <Button text="bad" handler={() => setBad((a) => a + 1)} />
      </div>
      <h1>statistics</h1>
      <div>
        {good || neutral || bad ? (
          <Statistics good={good} neutral={neutral} bad={bad} />
        ) : (
          "No feedback given"
        )}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
