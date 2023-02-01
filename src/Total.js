const Total = ({excercises}) => {
    
    // Función para la sumatoria de ejercicios
    const sumatoriaExcercises = () => {
        let sumatoria = 0;
        excercises.map((value) => sumatoria += value['exercises']);
        return sumatoria;
    }

    return(
        <>
        {
            // llamar a la función.
            // No se hace el map aqui, ya que se renderizaría más de una vez.
            <p> <strong>{'Number of exercises ' + sumatoriaExcercises()}</strong></p>
        }
        </>
    )
}

export default Total;