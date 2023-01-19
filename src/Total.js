const Total = ({parts}) => {
    
    // Función para la sumatoria de ejercicios
    const sumatoriaExcercises = () => {
        let sumatoria = 0;
        parts.map((value) => sumatoria += value['exercises']);
        return sumatoria;
    }

    return(
        <>
        {
            // llamar a la función.
            // No se hace el map aqui, ya que se renderizaría más de una vez.
            <p>{'Number of exercises ' + sumatoriaExcercises()}</p>
        }
        </>
    )
}

export default Total;