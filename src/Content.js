import Part from "./Part";

const Content = ({espacio1, espacio2, espacio3}) => {
 return(
     <>
        <Part parte = {espacio1}/>
        <Part parte = {espacio2}/>
        <Part parte = {espacio3}/>
    </>
    )   
}
export default Content;