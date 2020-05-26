import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator,CardStyleInterpolators} from "@react-navigation/stack";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {Text,View,TouchableOpacity,StyleSheet} from "react-native"
import Constants from "expo-constants";
import {Feather,FontAwesome} from "@expo/vector-icons";
import AllSpots from "./screens/AllSpots";
import Filter from "./screens/Filter";

const Stack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: "#FFFFFF",
                    elevation: 0,
                    height: Constants.statusBarHeight + 60,
                },
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}>
                <Stack.Screen name="AllSpots" component={TabNavigator} options={{
                    header: ({scene}) => {
                        return(
                            <View style={{...scene.descriptor.options.headerStyle,paddingTop: Constants.statusBarHeight,}}>
                                <View style={{flex:1,flexDirection: "row", alignItems: "center",justifyContent: "space-between"}}>
                                    <FontAwesome name="telegram" style={{marginLeft: 20,color: "#FF7657",fontSize: 15}}/>
                                    <View style={{flex:1, paddingLeft: 10}}>
                                        <Text style={{fontSize: 9,color: "#AEB6BB"}}>Detected Location</Text>
                                        <Text>Nothern Islands</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <FontAwesome name="gear" style={[styles.icons, {marginRight: 20}]} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }
                }}/>
                <Stack.Screen name="Filter" component={Filter} options={{
                    header: ({scene,previous,navigation}) => {
                        const {options} = scene.descriptor;
                        const title = 
                            options.headerTitle !== undefined
                                ? options.headerTitle
                                : options.title !== undefined
                                ? options.title
                                : scene.route.name
                        return(
                            <View style={{...options.headerStyle,paddingTop: Constants.statusBarHeight,}}>
                                <View style={{flex:1,flexDirection: "row", alignItems: "center",justifyContent: "space-between"}}>
                                    <TouchableOpacity style={{marginLeft: 20}} onPress={() => navigation.goBack()}>
                                        <Feather name="arrow-left" style={styles.icons}/>
                                    </TouchableOpacity>
                                    <Text style={{fontSize: 20}}>{title}</Text>
                                    <TouchableOpacity style={{marginRight: 20}}>
                                        <Feather name="search" style={styles.icons}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

let styles = StyleSheet.create({
    icons:{
        fontSize: 20
    }
})

const Tab = createMaterialTopTabNavigator();

function TabNavigator(){
    return(
        <Tab.Navigator tabBarOptions={{activeTintColor: "#FF7657", inactiveTintColor: "black",labelStyle: {textTransform: "capitalize"},indicatorStyle:{backgroundColor: "#FF7657"}}}>
            <Tab.Screen name="AllSpots" component={AllSpots} options={{tabBarLabel: "All Spots"}}/>
            <Tab.Screen name="Tenting" children={() => (<View></View>)} options={{tabBarLabel: "Tenting"}}/>
            <Tab.Screen name="Camping" children={() => (<View></View>)} options={{tabBarLabel: "RV Camping"}}/>
        </Tab.Navigator>
    )
}

export default Routes;