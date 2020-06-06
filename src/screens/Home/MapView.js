import React,{useState,useEffect,useMemo} from "react";
import {View,TouchableOpacity,Dimensions} from "react-native";
import MapView, { Marker } from "react-native-maps";
import {useRoute} from "@react-navigation/native";
import {MARKERS} from "../Mocks";
import {Fontisto,FontAwesome5, Feather,Entypo,MaterialIcons} from "@expo/vector-icons";
import * as Location from "expo-location";

const width = Dimensions.get("window").width;

export default function Map(){
    const INITIAL_REGION = {
      latitude: -10.8533401,
      longitude: -30.057203,
      latitudeDelta: 1.5,
      longitudeDelta: 1.5,
    };
  
    const {params} = useRoute();
    const reference = React.useRef(null);

    useEffect(() => {
      (async () => {
        await Location.requestPermissionsAsync()
      })()
    })

    return(
      <View style={{height:"70%"}}>
        <MapView
            initialRegion={INITIAL_REGION}
            ref={reference}
            style={{width,height: "100%",position:"relative"}}
            showsUserLocation={true}
        >
          {MARKERS.map((marker,index) => {
            if (params?.filter === "All Spots"){
              return (
                <Marker key={index} coordinate={marker.coordinates}>
                  {
                    marker.type === "camp"
                    ? <FontAwesome5 name="truck"/>
                    : <Fontisto name="tent"/>
                  }
                </Marker>
              )
            }
            else if(params?.filter === "Camp" && marker.type === "camp"){
              return(
                <Marker key={index} coordinate={marker.coordinates}>
                  <FontAwesome5 name="truck"/>
                </Marker>
              )
            }
            else if(params?.filter === "Tent" && marker.type === "tent"){
              return(
                <Marker key={index} coordinate={marker.coordinates}>
                  <Fontisto name="tent"/>
                </Marker>
              )
            }
          })}
        </MapView>
        <View style={{position: "absolute", bottom: 5, right: 5}}>
            <TouchableOpacity style={{
              flex:1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 30,
              height: 35,
              width: 35
            }} onPress={() => {
              (async () => {
                await Location.getCurrentPositionAsync()
                  .then(position => {
                    reference.current.animateCamera({
                      center: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                      },
                      heading: position.coords.heading,
                      pitch: 0,
                      zoom:0,
                      altitude:position.coords.altitude
                    })
                  })
              })()
            }}>
              <MaterialIcons name="location-searching" size={24} color="black" />
            </TouchableOpacity>
        </View>
      </View>
    )
  }
  