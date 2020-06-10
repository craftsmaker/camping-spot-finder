import React from "react";
import {View} from "react-native"
import MapView from '../components/MapView';
import PlacesView from '../components/PlacesView';

export default ({route: {params: {type}}}) => {

    return(
        <View style={{height: "66.7%",position: "relative"}}>
            <MapView type={type}/>
            <PlacesView type={type}/>
        </View>
    )
};