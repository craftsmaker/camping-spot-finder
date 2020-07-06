import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { PLACES } from "../Mocks";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const width = Dimensions.get("window").width;

export default function () {
  const {
    SortBy: { type: sortBy },
    Price: { type: priceType },
  } = useSelector((state) => state);
  let places = PLACES.slice();

  if (sortBy === "Ratings")
    places.sort((a, b) => parseFloat(b.stars) - parseFloat(a.stars));

  if (sortBy === "Distance")
    places.sort(
      (a, b) =>
        parseFloat(b.distance.substring(0, 3)) -
        parseFloat(a.stars.substring(0, 3))
    );

  const { params } = useRoute();
  const type = params?.type;

  return (
    <View style={{ width, height: "80%" }}>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item: place }) => {
          if (type === place.type || type === "All") {
            if (place.tag === priceType) return <ListItem place={place} />;
            else if (priceType === "All") {
              return <ListItem place={place} />;
            } else return null;
          }
        }}
      />
    </View>
  );
}

function ListItem({ place }) {
  return (
    <View
      style={{
        height: 150,
        flexDirection: "row",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        padding: 10,
        paddingRight: 0,
      }}
    >
      <View style={{ flex: 3, padding: 10 }}>
        <Image source={place.image} style={{ height: "100%", width: "100%" }} />
      </View>
      <View style={{ flex: 4, paddingTop: 20 }}>
        <Text style={{ fontSize: 16 }}>{place.title}</Text>
        <Text style={{ fontSize: 11, color: "#B2B2B2" }}>
          {place.description}
        </Text>
        <View
          style={{
            fleX: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#FFBB5D" }}>{place.stars}</Text>
          <Text style={{ color: "red" }}>{place.distance}</Text>
          <Text>{place.tag}</Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={() => alert("Nothing here buddy")}>
          <Entypo name="dots-three-vertical" size={25} color="#A5A5A5" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
