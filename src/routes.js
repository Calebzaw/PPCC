import { Switch, Route } from "react-router-dom";
import Intro from "./pages/introducao";

export default function Routes(){
    return(
        <Switch>

            <Route exact path="/introducao">
                <Intro />
            </Route>

            <Route>
            </Route>

        </Switch>
    )
}