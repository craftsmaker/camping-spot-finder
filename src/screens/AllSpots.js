import React from "react";
import {View,Text,Button,Dimensions} from "react-native";
import MapView, { Marker,LatLng } from "react-native-maps";

const width = Dimensions.get("window").width;

const Home = ({navigation:{navigate}}) => {
    
    return(
        <View style={{height: "60%",position: "relative"}}>
            <View>
                <MapView style={{width,height: "100%"}}>
                    <Marker coordinate={{latitude: 60,longitude: 60}}></Marker>
                </MapView>
                
            </View>
        </View>
    )
}

export default Home;