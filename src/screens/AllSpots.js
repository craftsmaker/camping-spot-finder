import React from "react";
import {View,Text,Image,Dimensions,FlatList,TouchableOpacity} from "react-native";
import MapView, { Marker,Circle } from "react-native-maps";
import {Fontisto,FontAwesome5, Feather,Entypo} from "@expo/vector-icons";

const width = Dimensions.get("window").width;


const AllSpots = () => {
    return(
        <View style={{height: "66.7%",position: "relative"}}>
            <MapComp/>
            <PlacesComp/>
        </View>
    )
}

function PlacesComp(){
  console.log(Dimensions.get("window").height)
  const places = [
    {
      id: "1",
      title: "Camping Paradise",
      description: "Popular spot for local trekkers",
      stars: "4.9",
      distance: "2.0 miles",
      tag: "Free",
      image: require("../../assets/everest.jpg")
    },
    {
      id: "2",
      title: "Lakeside Florida",
      description: "This is for all sunset lovers",
      stars: "5.0",
      distance: "5.0 miles",
      tag: "Free",
      image: require("../../assets/everest.jpg")
    },
    {
      id: "3",
      title: "Lakeside Florida",
      description: "This is for all sunset lovers",
      stars: "5.0",
      distance: "5.0 miles",
      tag: "Free",
      image: require("../../assets/everest.jpg")
    },
    {
      id: "4",
      title: "Lakeside Florida",
      description: "This is for all sunset lovers",
      stars: "5.0",
      distance: "5.0 miles",
      tag: "Free",
      image: require("../../assets/everest.jpg")
    },
  ]
  return(
    <View style={{width,height: "50%"}}>
      <FlatList
        data={places}
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
  const [markers] = React.useState([
    {
      title: 'hello',
      coordinates: {
        latitude: 3.148561,
        longitude: 101.652778
      },
      children: <FontAwesome5 name="truck"/>
    },
    {
      title: 'hello',
      coordinates: {
        latitude: 3.149771,
        longitude: 101.655449
      },
      children:<Fontisto name="tent"/>
    }])

  return(
    <MapView 
      initialRegion={{latitude: 3.149771,longitude: 101.655449,latitudeDelta: 0.0922,longitudeDelta: 0.0421}}
      style={{width,height: "100%"}}
  >
      {markers.map((marker,index) => (
          <Marker key={index} coordinate={marker.coordinates} children={marker.children}/>
      ))}

    <Circle center={{latitude: 4.149771,longitude: 111.655449}} radius={3} fillColor="red"/>
  </MapView>
  )
}

export default AllSpots;