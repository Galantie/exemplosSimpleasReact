
import Sobre from './sobre'
import { useCounter, IncrementarContador, DecrementarContador} from './contadorContext'

function App() {
  const teste = useCounter()
  const implementarCounter = IncrementarContador()
  const abaixarContador = DecrementarContador()

  return (
    <>
      <h1>Teste inicio{teste}</h1>
      <Sobre testeprops="testando mais uma vez"></Sobre>
      <button onClick={implementarCounter}>Incrementa</button>
      <button onClick={abaixarContador}>Decrementa</button>
    </>
  );
}

export default App;
