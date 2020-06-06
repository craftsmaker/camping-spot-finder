import React,{useState} from "react";
import {View,Text,Image,Dimensions,FlatList,TouchableOpacity} from "react-native"
import {PLACES,MARKERS} from "../Mocks";
import MapView from './MapView';
import PlacesView from './PlacesView';

const AllSpots = () => {
    return(
        <View style={{height: "66.7%",position: "relative"}}>
            <MapView/>
            <PlacesView/>
        </View>
    )
}
export default AllSpots;