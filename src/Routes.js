import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./screens/Home";

const {Screen,Navigator} = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <Navigator>
                <Screen name="/Home" component={Home}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default Routes;