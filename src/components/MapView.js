import React,{useEffect} from "react";
import {View,TouchableOpacity,Dimensions} from "react-native";
import MapView, { Marker } from "react-native-maps";
import {useRoute} from "@react-navigation/native";
import {MARKERS} from "../Mocks";
import {Fontisto,FontAwesome5, MaterialIcons} from "@expo/vector-icons";
import * as Location from "expo-location";
import {useSelector} from "react-redux";

const width = Dimensions.get("window").width;
const orangeColor = "#FF7657";
const yellowColor = "#FFBA5A";

const INITIAL_REGION = {
  latitude: 3.148561,
  longitude: 101.652778,
  latitudeDelta: 1.5,
  longitudeDelta: 1.5,
};

const CustomTruck = React.memo(() => {
  return <FontAwesome5 name="truck" style={{backgroundColor: yellowColor,borderRadius: 30,padding: 10,color: "white"}}/>
})

const CustomTent = () => {
  return <Fontisto name="tent" style={{backgroundColor: orangeColor,borderRadius: 30,padding: 10,color: "white"}}/>
}

export default function Map(){
  const reference = React.useRef(null);
  const selector = useSelector(state => state)

  useEffect(() => {
    (async () => {
      await Location.requestPermissionsAsync()
    })()
  })
  
  const {params} = useRoute();
  const type = params?.type;

  return(
    <View style={{height:"70%"}}>
      <MapView
          initialRegion={INITIAL_REGION}
          ref={reference}
          style={{width,height: "100%",position:"relative"}}
          showsUserLocation={true}
      >
        <CustomMarkers type={type}/>
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

function CustomMarkers({type}) {
    return(
      MARKERS.map((marker,index) => {
        if (type === "All"){
          return (
            <Marker key={index} coordinate={marker.coordinates}>
              {
                marker.type === "camp"
                ? <CustomTruck/>
                : <CustomTent/>
              }
            </Marker>
          )
        }
        else if(type === "RV Camping" && marker.type === "camp"){
          return(
            <Marker key={index} coordinate={marker.coordinates}>
              <CustomTruck/>
            </Marker>
          )
        }
        else if(type === "Tenting" && marker.type === "tent"){
          return(
            <Marker key={index} coordinate={marker.coordinates}>
              <CustomTent/>
            </Marker>
          )
        }
      })
    )
}