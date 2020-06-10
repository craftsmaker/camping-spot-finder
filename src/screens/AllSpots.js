import React from "react";
import {View} from "react-native"
import MapView from '../components/MapView';
import PlacesView from '../components/PlacesView';

export default () => {
    return(
        <View style={{height: "66.7%",position: "relative"}}>
            <MapView/>
            <PlacesView/>
        </View>
    )
};