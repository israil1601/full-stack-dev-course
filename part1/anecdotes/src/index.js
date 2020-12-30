import React, { useState } from "react";
import ReactDOM from "react-dom";

const Anecdote = ({anecdote}) => {
  return <p>{anecdote}</p>;
};

const Votes = ({votes}) => {
  return <div>has {votes} votes</div>
}

const Button = ({ text, handler }) => {
  return <button onClick={handler}>{text}</button>;
};

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(6).fill(0));
  const pickRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * 6);
    setSelected(randomIndex);
  };

  const vote = () => {
    setVotes(
      votes.map((elem, i) => {
        if (i === selected) {
          return ++elem;
        }
        return elem;
      })
    );
  };

  const getMaxVoteIndex = () => {
    return votes.indexOf(Math.max(...votes));
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} />
      <Votes votes={votes[selected]} />
      <div>
        <Button text="vote" handler={vote} />
        <Button text="next anecdote" handler={pickRandomAnecdote} />
      </div>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={anecdotes[getMaxVoteIndex()]} />
      <Votes votes={Math.max(...votes)} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
