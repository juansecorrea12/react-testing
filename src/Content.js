import Part from "./Part";

const Content = (props) => {
 return(
     <>
        <Part parte1 = {props.espacio1}/>
        <Part parte2 = {props.espacio2}/>
        <Part parte3 = {props.espacio3}/>
    </>
    )   
}
export default Content;