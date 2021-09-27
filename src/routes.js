import { Switch, Route, Redirect } from "react-router-dom";
import Intro from "./pages/introducao";
import Ambientacao from "./pages/ambientacao"
import Pandora from "./pages/pandora"
import Relacoes from "./pages/relacoes"
import Alunos from "./pages/alunos"
import Adaptacao from "./pages/adaptacao"
import Navi from "./pages/navi"
import Caracteristicas from "./pages/caracteristicas"

export default function Routes(){
    return(
        <Switch>

            <Redirect exact from='/' to='/introducao' />

            <Route exact path="/introducao">
                <Intro />
            </Route>

            <Route exact path="/ecologia/pandora">
                <Pandora />
            </Route>

            <Route exact path="/ecologia/ambientacao">
                <Ambientacao />
            </Route>

            <Route exact path="/ecologia/relacoes">
                <Relacoes />
            </Route>

            <Route exact path="/zoologia/adaptacao">
                <Adaptacao />
            </Route>

            <Route exact path="/zoologia/navi">
                <Navi />
            </Route>

            <Route exact path="/zoologia/caracteristicas">
                <Caracteristicas />
            </Route>

            <Route exact path="/alunos">
                <Alunos />
            </Route>

            <Route>
            </Route>

        </Switch>
    )
}