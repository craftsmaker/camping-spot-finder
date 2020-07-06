import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";

export default ({ scene, navigation: { navigate } }) => {
  const actualScreenIndex = scene.route?.state?.index;

  return (
    <View
      style={{
        ...scene.descriptor.options.headerStyle,
        paddingTop: Constants.statusBarHeight,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FontAwesome
          name="telegram"
          style={{ marginLeft: 20, color: "#FF7657", fontSize: 15 }}
        />
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text style={{ fontSize: 9, color: "#AEB6BB" }}>
            Detected Location
          </Text>
          <Text>Nothern Islands</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigate("Filter", { fromScreenIndex: actualScreenIndex })
          }
        >
          <FontAwesome
            name="gear"
            style={[styles.icons, { marginRight: 20 }]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

let styles = StyleSheet.create({
  icons: {
    fontSize: 20,
  },
});
