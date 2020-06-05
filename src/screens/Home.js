import React,{useState} from "react";
import {View,Text,Image,Dimensions,FlatList,TouchableOpacity} from "react-native";
import MapView, { Marker,Circle } from "react-native-maps";
import {useRoute} from "@react-navigation/native";
import {Fontisto,FontAwesome5, Feather,Entypo,MaterialIcons} from "@expo/vector-icons";
import {PLACES,MARKERS} from "./Mocks";
import ExpMap from './MapView';

// Debounce the change of state, useMemo or to use onChangeRegionComplete
const width = Dimensions.get("window").width;

const AllSpots = () => {
    return(
        <View style={{height: "66.7%",position: "relative"}}>
            <ExpMap/>
            <PlacesComp/>
        </View>
    )
}

function PlacesComp(){
  return(
    <View style={{width,height: "80%"}}>
      <FlatList
        data={PLACES}
        keyExtractor={item => item.id}
        renderItem={({ item: place }) => (
          <View style={{height: 150,flexDirection: "row", borderBottomColor: "gray",borderBottomWidth: 1,padding:10,paddingRight: 0}}>
            <View style={{flex:3,padding: 10}}>
              <Image source={place.image} style={{height: "100%",width: "100%"}}/>
            </View>
            <View style={{flex:4,paddingTop: 20}}>
              <Text style={{fontSize: 16}}>{place.title}</Text>
              <Text style={{fontSize: 11, color: "#B2B2B2"}}>{place.description}</Text>
              <View style={{fleX:1,flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{color: "#FFBB5D"}}>{place.stars}</Text>
                <Text style={{color: "red"}}>{place.distance}</Text>
                <Text>{place.tag}</Text>
              </View>
            </View>
            <View style={{flex:1,justifyContent: "center", alignItems: "center"}}>
                <TouchableOpacity onPress={() => alert("Nothing here buddy")}>
                  <Entypo name="dots-three-vertical" size={25} color="#A5A5A5"/>
                </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  )
}

function MapComp(){
  const INITIAL_REGION = {
    latitude: 4.149771,
    longitude: 101.655449,
    latitudeDelta: 1.5,
    longitudeDelta: 1.5,
  };
  const {params} = useRoute();
  console.log(params);

  return(
    <View style={{height:"70%"}}>
      <MapView
        initialRegion={INITIAL_REGION}
        style={{width,height: "100%",position:"relative"}}
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
          <TouchableOpacity style={{flex:1,justifyContent: "center",alignItems: "center",backgroundColor: "white",borderRadius: 30, height: 35,width: 35}} onPress={() => alert("You are at:",region)}>
            <MaterialIcons name="location-searching" size={24} color="black" />
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default AllSpots;