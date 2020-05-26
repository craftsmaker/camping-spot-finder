import React from "react";
import {View,Text,Button} from "react-native";

const Home = ({navigation:{navigate}}) => {
    return(
        <View>
            <Text>Thats is home</Text>
            <Button 
                title="CLICK"
                onPress={() => navigate("Filter")}
            />
        </View>
    )
}

export default Home;