import React from "react";
import {View,Text,Button} from "react-native";

const Filter = ({navigation: {navigate}}) => {
    return(
        <View>
            <Text>This is Filter</Text>
            <Button 
                title="CLICK"
                onPress={() => navigate("Home")}
                color="purple"
            />
        </View>
    )
}

export default Filter;