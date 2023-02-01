import Part from "./Part";
import './styles.css';

const Content = ({parts}) => {
 return(
     <div>
        {
            parts.map((value, index) => {
               return <Part key={index} parte = { value['name'] + ' ' + value['exercises']}/>
            })
        }
    </div>
    )   
}
export default Content;