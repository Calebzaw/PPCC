import { Switch, Route } from "react-router-dom";
import Intro from "./pages/introducao";
import Ambientacao from "./pages/ambientacao"
import Pandora from "./pages/pandora"
import Relacoes from "./pages/relacoes"
import Alunos from "./pages/alunos"

export default function Routes(){
    return(
        <Switch>

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

            <Route exact path="/alunos">
                <Alunos />
            </Route>

            <Route>
            </Route>

        </Switch>
    )
}