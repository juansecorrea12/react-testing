import Part from "./Part";

const Content = ({course}) => {
 return(
     <>
        {
            course.map((value, index) => {
               return <Part key={index} parte = { value['name'] + ' ' + value['exercises']}/>
            })
        }
    </>
    )   
}
export default Content;