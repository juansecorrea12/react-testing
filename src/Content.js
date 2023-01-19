import Part from "./Part";

const Content = ({parts}) => {
 return(
     <>
        {
            parts.map((value, index) => {
               return <Part key={index} parte = { value['name'] + ' ' + value['exercises']}/>
            })
        }
    </>
    )   
}
export default Content;