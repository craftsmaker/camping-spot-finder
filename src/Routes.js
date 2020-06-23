import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator,CardStyleInterpolators} from "@react-navigation/stack";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Constants from "expo-constants";
import Filter from "./screens/Filter";
import store from "./store";''
import {Provider} from "react-redux";
import FilterHeader from "./components/FilterHeader"
import HomeHeader from "./components/HomeHeader";
// import AllSpots from "./screens/AllSpots";
// import Tenting from "./screens/Tenting";
// import RVCamping from "./screens/RVCamping";

import {RVCamping,Tenting,AllSpots} from "./screens/Home"

const Stack = createStackNavigator();

const Routes = () => {
    return(
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: {
                        backgroundColor: "#FFFFFF",
                        elevation: 0,
                        height: Constants.statusBarHeight + 60,
                    },
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    
                }}>
                    <Stack.Screen name="Home" component={TabNavigator} options={{header: HomeHeader}}/>
                    <Stack.Screen name="Filter" component={Filter} options={{header: FilterHeader}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

const Tab = createMaterialTopTabNavigator();

function TabNavigator(){
    return(
        <Tab.Navigator 
            swipeEnabled={false} 
            tabBarOptions={{activeTintColor: "#FF7657", inactiveTintColor: "black",labelStyle: {textTransform: "capitalize"},indicatorStyle:{backgroundColor: "#FF7657"}}}
        >
            <Tab.Screen name="All" component={AllSpots} options={{tabBarLabel: "All Spots"}} initialParams={{type: "All"}}/>
            <Tab.Screen name="Tenting" component={Tenting} options={{tabBarLabel: "Tenting"}} initialParams={{type: "Tenting"}}/>
            <Tab.Screen name="RV Camping" component={RVCamping} options={{tabBarLabel: "RV Camping"}} initialParams={{type: "RV Camping"}}/>
        </Tab.Navigator>
    )
}

export default Routes;