import React from "react";
import { Switch, Route} from "react-router-dom";
import Dashboard from "../Dashboard";
import { useDispatch} from "react-redux";

export default function Router(props) {
  const dispatch = useDispatch();
   return (
    <Switch>
        <Route path="/*" component={Dashboard}/>
     </Switch>
  );
}
