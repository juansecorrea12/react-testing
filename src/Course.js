import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

export const Course = ({courses}) => {
    return (
        <>
        {
            courses.map((course) => (
                <div key={course.id}>
                <Header name = {course.name} />
                <Content parts = {course.parts} />
                <Total excercises = {course.parts} />        
                </div>
            ))
        }
        </>
    )
}
