import React from "react";
import {View} from "react-native"
import MapView from '../components/MapView';
import PlacesView from '../components/PlacesView';

function Foundation({type = "All"}){
    console.log("Main Entrance")
    return(
        <View style={{height: "66.7%",position: "relative"}}>
            <MapView/>
            <PlacesView/>
        </View>
    )
}

export function RVCamping() {
    return(
        <Foundation/>
    )
};

export function Tenting() {
    return(
        <Foundation/>
    )
};

export function AllSpots() {
    return(
        <Foundation/>
    )
};