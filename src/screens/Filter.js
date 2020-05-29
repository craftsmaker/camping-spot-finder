import React,{useState} from "react";
import {View,Text,Switch,TouchableOpacity,StyleSheet} from "react-native";

let activeColor = "#FF7657";
let dividerColor = "#F1F2F5";


const SortBy = () => {
    const [activesButtonsFromSortBy,setActivesButtonsFromSortBy] = useState([true,false,false])

    return(
        <View style={{flex:1,borderBottomWidth: 1,borderColor: dividerColor,paddingBottom: 25}}>
            <View style={{flex:1}}>
                <Text>Sort By</Text>
            </View>
            <View style={{flex:1,flexDirection: "row"}}>
                <TouchableOpacity 
                    style={[styles.letftButton,{backgroundColor: activesButtonsFromSortBy[0]? activeColor : "white"}]} 
                    onPress={() => setActivesButtonsFromSortBy([true,false,false])}
                >
                    <Text style={[styles.buttonText,{color: activesButtonsFromSortBy[0]? "white" : "black"}]}>Distance</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.middleButton,{backgroundColor: activesButtonsFromSortBy[1]? activeColor : "white"}]} onPress={() => setActivesButtonsFromSortBy([false,true,false])}>
                    <Text style={[styles.buttonText,,{color: activesButtonsFromSortBy[1]? "white" : "black"}]}>Ratings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.rightButton,{backgroundColor: activesButtonsFromSortBy[2]? activeColor : "white"}]} onPress={() => setActivesButtonsFromSortBy([false,false,true])}>
                    <Text style={[styles.buttonText,,{color: activesButtonsFromSortBy[2]? "white" : "black"}]}>Reviews</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Type = () => {
    const [activesButtonsFromType,setActivesButtonsFromType] = useState([false,true,false]);

    return(
        <View style={{flex:1,borderBottomWidth: 1,borderColor: dividerColor,paddingBottom: 25,paddingTop: 10}}>
            <View style={{flex:1,paddingBottom: 10}}>
                <Text>Type</Text>
            </View>
            <View style={{flex:3,flexDirection: "row"}}>
                <TouchableOpacity
                    style={[styles.letftButton,{backgroundColor: activesButtonsFromType[0]? activeColor : "white"}]} 
                    onPress={() => setActivesButtonsFromType([true,false,false])}
                >
                    <Text style={[styles.buttonText,{color: activesButtonsFromType[0]? "white" : "black"}]}>
                        All
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.middleButton,{backgroundColor: activesButtonsFromType[1]? activeColor : "white"}]} 
                    onPress={() => setActivesButtonsFromType([false,true,false])}
                >
                    <Text style={[styles.buttonText,{color: activesButtonsFromType[1]? "white" : "black"}]}>
                        Tenting
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.middleButton,{backgroundColor: activesButtonsFromType[2]? activeColor : "white"}]} 
                    onPress={() => setActivesButtonsFromType([false,false,true])}
                >
                    <Text style={[styles.buttonText,{color: activesButtonsFromType[2]? "white" : "black"}]}>
                        RV Camping
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
    )
}

const Price = () => {
    const [activesButtonsFromPrice,setActivesButtonsFromPrice] = useState([false,true,false,false]);
    return(
        <View style={{flex:1,borderBottomWidth: 1,borderColor: dividerColor,paddingBottom: 10}}>
            <View style={{flex:1,paddingBottom: 10}}>
                <Text>Price</Text>
            </View>
            <View style={{flex:3,flexDirection: "row"}}>
                <TouchableOpacity
                    style={[styles.letftButton,{backgroundColor: activesButtonsFromPrice[0]? activeColor : "white"}]} 
                    onPress={() => setActivesButtonsFromPrice([true,false,false,false])}
                >
                    <Text style={[styles.buttonText,{color: activesButtonsFromPrice[0]? "white" : "black"}]}>
                        Free
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.middleButton,{backgroundColor: activesButtonsFromPrice[1]? activeColor : "white"}]} 
                    onPress={() => setActivesButtonsFromPrice([false,true,false,false])}
                >
                    <Text style={[styles.buttonText,{color: activesButtonsFromPrice[1]? "white" : "black"}]}>
                        $$
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.middleButton,{backgroundColor: activesButtonsFromPrice[2]? activeColor : "white"}]} 
                    onPress={() => setActivesButtonsFromPrice([false,false,true,false])}
                >
                    <Text style={[styles.buttonText,{color: activesButtonsFromPrice[2]? "white" : "black"}]}>
                        $$$
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.rightButton,{backgroundColor: activesButtonsFromPrice[3]? activeColor : "white"}]} 
                    onPress={() => setActivesButtonsFromPrice([false,false,false,true])}
                >
                    <Text style={[styles.buttonText,{color: activesButtonsFromPrice[3]? "white" : "black"}]}>
                        $$$$
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Options = () => {
    const [showSpotsFull,setShowSpotsFull] = useState(false);
    const [showHighlyRatedSpots,setShowHighlyRatedSpots] = useState(false);
    const [showOnlyFreeSpots,setShowOnlyFreeSpots] = useState(false);

    return(
        <View style={{flex:2}}>
            <View style={{flex:1,justifyContent: "center"}}>
                    <Text style={{fontSize: 16}}>
                    More Options
                    </Text>
            </View>
            <View style={{flex:1,flexDirection: "row"}}>
                <View style={{flex:2,justifyContent: "center"}}>
                    <Text style={{fontSize: 12}}>
                        Show spots that are full
                    </Text>
                </View>
                <View style={{flex:2,justifyContent: "center"}}>
                    <Switch value={showSpotsFull} onTouchStart={() => setShowSpotsFull(prev => !prev)}/>
                </View>
            </View>
            <View style={{flex:1,flexDirection: "row"}}>
                <View style={{flex:2,justifyContent: "center"}}>
                    <Text style={{fontSize: 12}}>
                        Show only highly rated spots
                    </Text>
                </View>
                <View style={{flex:1, justifyContent: "center"}}>
                    <Switch value={showHighlyRatedSpots} onTouchStart={() => setShowHighlyRatedSpots(prev => !prev)}/>
                </View>
            </View>
            <View style={{flex:1,flexDirection: "row"}}>
                <View style={{flex:2,justifyContent: "center"}}>
                    <Text style={{fontSize: 12}}>
                        Show only free spots
                    </Text>
                </View>
                <View style={{flex:2,justifyContent: "center"}}>
                    <Switch value={showOnlyFreeSpots} onTouchStart={() => setShowOnlyFreeSpots(prev => !prev)}/>
                </View>
            </View>
        </View>
    )
}

const Filter = () => {
    return(
        <View style={{flex:1,backgroundColor: "#FFF",padding:10}}>    
            <SortBy/>
            <Type/>
            <Price/>
            <Options/>
        </View>
    )
}

const styles = StyleSheet.create({
    leftActiveButton:{
        flex:1,
        justifyContent: "center",
        backgroundColor: activeColor,
        borderColor: activeColor,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    letftButton:{
        flex:1,
        justifyContent: "center",
        borderColor: activeColor,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    middleButton:{
        flex:1,
        justifyContent: "center",
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor: activeColor
    },
    rightButton:{
        flex:1,
        justifyContent: "center",
        borderColor: activeColor,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderRightWidth:1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    activeText:{
        textAlign: "center",
        color: "white"
    },
    buttonText:{
        textAlign: "center"
    },
})

export default Filter;