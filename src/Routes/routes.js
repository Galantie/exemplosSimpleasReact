import {Switch, BrowserRouter, Route} from 'react-router-dom'
import App from '../App'
import Sobre from '../sobre'
import Parametros from '../parametros'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/parametros/:id" component={Parametros} />
            </Switch>
        </BrowserRouter>
    )

}