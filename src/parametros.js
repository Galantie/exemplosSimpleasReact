import {useParams} from 'react-router-dom'
function Parametros(props) {
    const teste = useParams()
    const parametro = new URLSearchParams(props.location.search).get("teste")


    return (
      <>
        <h1>Parametro do Path: {JSON.stringify(teste)}</h1>
        <h1>Query params: {parametro} </h1>

      </>
    );
  }
  
  export default Parametros;