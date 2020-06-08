import React,{useState} from "react";
import {View,Text,Switch,TouchableOpacity,StyleSheet} from "react-native";
import {useSelector,useDispatch} from "react-redux";

let activeColor = "#FF7657";
let dividerColor = "#F1F2F5";


const SortBy = () => {
    const stored = useSelector(state => state);
    const dispatch = useDispatch();

    return(
        <View style={{flex:1,borderBottomWidth: 1,borderColor: dividerColor,paddingBottom: 25}}>
            <View style={{flex:1}}>
                <Text>Sort By</Text>
            </View>
            <View style={{flex:1,flexDirection: "row"}}>
                <TouchableOpacity 
                    style={[styles.letftButton,{backgroundColor: stored.SortBy.buttonStates[0]? activeColor : "white"}]} 
                    onPress={() => dispatch({type: "CHANGE_SORT_BY", value:"Distance", buttonStates: [true,false,false]})}
                >
                    <Text style={[styles.buttonText,{color: stored.SortBy.buttonStates[0]? "white" : "black"}]}>Distance</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.middleButton,{backgroundColor: stored.SortBy.buttonStates[1]? activeColor : "white"}]}
                    onPress={() =>  dispatch({type: "CHANGE_SORT_BY", value:"Ratings", buttonStates: [false,true,false]})}>
                    <Text style={[styles.buttonText,,{color: stored.SortBy.buttonStates[1]? "white" : "black"}]}>Ratings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.rightButton,{backgroundColor: stored.SortBy.buttonStates[2]? activeColor : "white"}]} 
                    onPress={() =>  dispatch({type: "CHANGE_SORT_BY", value:"Reviews", buttonStates: [false,false,true]})}>
                    <Text style={[styles.buttonText,,{color: stored.SortBy.buttonStates[2]? "white" : "black"}]}>Reviews</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Type = () => {
    const stored = useSelector(state => state);
    const dispatch = useDispatch();
    
    return(
        <View style={{flex:1,borderBottomWidth: 1,borderColor: dividerColor,paddingBottom: 25,paddingTop: 10}}>
            <View style={{flex:1,paddingBottom: 10}}>
                <Text>Type</Text>
            </View>
            <View style={{flex:3,flexDirection: "row"}}>
                <TouchableOpacity
                    style={[styles.letftButton,{backgroundColor: stored.Type.buttonStates[0]? activeColor : "white"}]} 
                    onPress={() => dispatch({type: "CHANGE_TYPE", value:"All", buttonStates: [true,false,false]})}
                >
                    <Text style={[styles.buttonText,{color: stored.Type.buttonStates[0]? "white" : "black"}]}>
                        All
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.middleButton,{backgroundColor: stored.Type.buttonStates[1]? activeColor : "white"}]} 
                    onPress={() => dispatch({type: "CHANGE_TYPE", value:"Tenting", buttonStates: [false,true,false]})}
                >
                    <Text style={[styles.buttonText,{color: stored.Type.buttonStates[1]? "white" : "black"}]}>
                        Tenting
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.rightButton,{backgroundColor: stored.Type.buttonStates[2]? activeColor : "white"}]} 
                    onPress={() => dispatch({type: "CHANGE_TYPE", value:"RV Camping", buttonStates: [false,false,true]})}
                >
                    <Text style={[styles.buttonText,{color: stored.Type.buttonStates[2]? "white" : "black"}]}>
                        RV Camping
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
    )
}

const Price = () => {
    const stored = useSelector(state => state);
    const dispatch = useDispatch();
    
    return(
        <View style={{flex:1,borderBottomWidth: 1,borderColor: dividerColor,paddingBottom: 10}}>
            <View style={{flex:1,paddingBottom: 10}}>
                <Text>Price</Text>
            </View>
            <View style={{flex:3,flexDirection: "row"}}>
                <TouchableOpacity
                    style={[styles.letftButton,{backgroundColor:  stored.Price.buttonStates[0]? activeColor : "white"}]} 
                    onPress={() => dispatch({type: "CHANGE_PRICE", value:"Free", buttonStates: [true,false,false,false]})}
                >
                    <Text style={[styles.buttonText,{color: stored.Price.buttonStates[0]? "white" : "black"}]}>
                        Free
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.middleButton,{backgroundColor: stored.Price.buttonStates[1]? activeColor : "white"}]} 
                    onPress={() => dispatch({type: "CHANGE_PRICE", value:"$$", buttonStates: [false,true,false,false]})}
                >
                    <Text style={[styles.buttonText,{color: stored.Price.buttonStates[1]? "white" : "black"}]}>
                        $$
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.middleButton,{backgroundColor: stored.Price.buttonStates[2]? activeColor : "white"}]} 
                    onPress={() => dispatch({type: "CHANGE_PRICE", value:"$$$", buttonStates: [false,false,true]})}
                >
                    <Text style={[styles.buttonText,{color: stored.Price.buttonStates[2]? "white" : "black"}]}>
                        $$$
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.rightButton,{backgroundColor: stored.Price.buttonStates[3]? activeColor : "white"}]} 
                    onPress={() => dispatch({type: "CHANGE_PRICE", value:"$$$$", buttonStates: [false,false,false,true]})}
                >
                    <Text style={[styles.buttonText,{color: stored.Price.buttonStates[3]? "white" : "black"}]}>
                        $$$$
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Options = () => {
    const dispatch = useDispatch();
    const {Options: {showSpotsFull,showHighlyRatedSpots,showOnlyFreeSpots}} = useSelector(state => state);

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
                    <Switch value={showSpotsFull} onTouchStart={() => dispatch({type:"TOGGLE_SPOTS_FULL"})}/>
                </View>
            </View>
            <View style={{flex:1,flexDirection: "row"}}>
                <View style={{flex:2,justifyContent: "center"}}>
                    <Text style={{fontSize: 12}}>
                        Show only highly rated spots
                    </Text>
                </View>
                <View style={{flex:1, justifyContent: "center"}}>
                    <Switch value={showHighlyRatedSpots} onTouchStart={() => dispatch({type: "TOGGLE_HIGHLY_RATED_SPOTS"})}/>
                </View>
            </View>
            <View style={{flex:1,flexDirection: "row"}}>
                <View style={{flex:2,justifyContent: "center"}}>
                    <Text style={{fontSize: 12}}>
                        Show only free spots
                    </Text>
                </View>
                <View style={{flex:2,justifyContent: "center"}}>
                    <Switch value={showOnlyFreeSpots} onTouchStart={() => dispatch({type: "TOGGLE_ONLY_FREE_SPOTS"})}/>
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