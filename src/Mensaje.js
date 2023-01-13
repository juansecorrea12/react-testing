const Mensaje = (params) => {
    console.log(params);
    return (
      <h1 style={{color: params.color}}>{params.message}</h1>
    )
  }
  export default Mensaje;