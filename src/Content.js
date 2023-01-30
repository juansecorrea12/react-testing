import Part from "./Part";
import './styles.css';

const Content = ({course}) => {
 return(
     <div>
        {
            course.map((value, index) => {
               return <Part key={index} parte = { value['name'] + ' ' + value['exercises']}/>
            })
        }
    </div>
    )   
}
export default Content;