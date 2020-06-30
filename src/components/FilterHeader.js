import React from "react";
import {View,TouchableOpacity,StyleSheet,Text} from "react-native";
import {Feather} from "@expo/vector-icons";
import Constants from "expo-constants";
import {useSelector} from "react-redux";

const types = ["All","Tenting","RV Camping"]

export default ({scene,previous,navigation}) => {
    const {Type} = useSelector(state => state);

    let screen = types[Type.indexOf(true)];
    console.log("FH:",screen)
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
                <TouchableOpacity style={{marginLeft: 20}} onPress={() => navigation.navigate("Home",{screen})}>
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


let styles = StyleSheet.create({
    icons:{
        fontSize: 20
    }
})