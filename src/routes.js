import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./screens/login";
import Map from "./screens/map";
import Register from "./screens/Register";
import Trouble from "./screens/trouble";
import Teste from "./screens/Teste/index.js";

const Routes = createAppContainer(
  createStackNavigator({
    Login,
    Teste,
    Register,
    Map,
    Trouble
  })
);
export default Routes;
