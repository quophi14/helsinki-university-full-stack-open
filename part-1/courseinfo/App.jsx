const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <div>
      <p>Topic: {props.parts} , Number of Exercises: {props.exercises}</p>
    </div>
  );
};

const Total = (props) => {
  return (
    <>
      <p>Total Number of exercises  = {props.part1 + props.part2 + props.part3} Exercises</p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",

    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },

      {
        name: "Using props to pass data",
        exercises: 7,
      },

      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts[0].name} exercises = {course.parts[0].exercises}/>
      <Content parts={course.parts[1].name} exercises = {course.parts[1].exercises}/>
      <Content parts={course.parts[2].name} exercises = {course.parts[2].exercises}/>
      <Total part1={course.parts[0].exercises} 
      part2 = {course.parts[1].exercises} 
      part3={course.parts[2].exercises}/>
      
      
       </div>
  );
};

export default App;
