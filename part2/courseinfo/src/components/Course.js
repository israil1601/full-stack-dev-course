import React from "react";

const Header = ({ course }) => {
  return <h2>{course}</h2>;
};

const Total = ({ total }) => {
  return <p><b>total of {total} exercises </b></p>;
};

const Part = ({ name, exercise }) => {
  return (
    <p>
      {name} {exercise}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
     {parts.map(part => <Part name={part.name} exercise={part.exercises} key={part.id} />)}
    </>
  );
};

const Course = ({ course }) => {
  const total = course.parts.reduce((prev, curr) => prev + curr.exercises, 0);
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </>
  );
};

export default Course;
