import './styles.css';
// import Mensaje from './Mensaje';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10  
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      {/* Se define enviar por props solo una posición del objeto
      y no el objeto completo, ya que cada componente solo usa una posición
      del objeto en cuestión */}
      <Header course = {course.name} />
      <Content course= {course.parts}/>
      <Total course = {course.parts}/>
    </div>
  )
}

export default App;
