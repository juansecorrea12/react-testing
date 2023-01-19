import './App.css';
// import Mensaje from './Mensaje';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  const course = 'Half Stack application development'
  
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
  return (
    <div>
      <Header title = {course} />
      <Content 
      espacio1 = {part1['name'] + ' ' + part1['exercises']}
      espacio2 = {part2.name + ' ' + part2.exercises}
      espacio3 = {part3.name + ' ' + part3.exercises}
      />
      <Total total = {'Number of exercises ' + (part1['exercises'] + part2['exercises'] + part3['exercises'])}/>
    </div>
  )
}

export default App;
