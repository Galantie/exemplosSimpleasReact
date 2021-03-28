
import { useCounter } from './contadorContext'
function Sobre(props) {
    const teste = useCounter()
    return (
      <>
        <h1>Sobre</h1>
        <h2>{teste}</h2>
        <h2>{props.testeprops}</h2>
        </>
    );
  }
  
  export default Sobre;
  