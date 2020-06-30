import React from "react";
import {View,Text,Switch,TouchableOpacity,StyleSheet} from "react-native";
import {useSelector,useDispatch} from "react-redux";
import {useRoute} from "@react-navigation/native";
import {Fontisto,FontAwesome5} from "@expo/vector-icons";

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

let screens = ["All","Tenting","RV Camping"]

const Type = () => {
    const {Type} = useSelector(state => state);
    const dispatch = useDispatch();
    const {params: {fromScreen}} = useRoute();
    console.log(Type);
    function changeType(screenIndex = 0){
        let buttonStates = [true,false,false]
        if (screenIndex === 1)
            buttonStates = [false,true,false]
        else if(screenIndex === 2)
            buttonStates = [false,false,true]
        
        dispatch({type: "CHANGE_TYPE", status: buttonStates})
    }

    let index = Type.indexOf(true);
    React.useEffect(() => {
        if (fromScreen !== screens[index])
            changeType(index)
    },[fromScreen])


    return(
        <View style={{flex:1,borderBottomWidth: 1,borderColor: dividerColor,paddingBottom: 25,paddingTop: 10}}>
            <View style={{flex:1,paddingBottom: 10}}>
                <Text>Type</Text>
            </View>
            <View style={{flex:3,flexDirection: "row"}}>
                <TouchableOpacity
                    style={[styles.letftButton,{backgroundColor: Type[0]? activeColor : "white"}]} 
                    onPress={() => changeType()}
                >
                    <View style={{flex:1,alignItems: "center",justifyContent: "center",position:"relative"}}>
                        <Fontisto name="tent" size={18} style={{position:"absolute", left: "30%",color: Type[0]? "white" : activeColor}}/>
                        <FontAwesome5 name="truck" size={18} style={{position:"absolute", right: "35%",color: Type[0]? "white" : "#FFBA5A"}}/>
                    </View>
                    <Text style={[styles.buttonText,{color: Type[0]? "white" : "black"}]}>
                        All
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.middleButton,{backgroundColor: Type[1]? activeColor : "white"}]} 
                    onPress={() => changeType(1)}
                >
                    <View style={{flex:1,alignItems: "center",justifyContent: "center"}}>
                        <Fontisto name="tent" size={18} style={{color: Type[1]? "white" : activeColor}}/>
                    </View>
                    <Text style={[styles.buttonText,{color: Type[1]? "white" : "black"}]}>
                        Tenting
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.rightButton,{backgroundColor: Type[2]? activeColor : "white"}]} 
                    onPress={() => changeType(2)}
                >
                    <View style={{flex:1,alignItems: "center",justifyContent: "center"}}>
                        <FontAwesome5 name="truck" size={18}  style={{color: Type[2]? "white" : "#FFBA5A"}}/>
                    </View>
                    <Text style={[styles.buttonText,{color: Type[2]? "white" : "black"}]}>
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
    
    const {params: {price}} = useRoute();

    function changePrice(screenName){
        let buttonStates = [true,false,false,false]
        if (screenName === "$$")
            buttonStates = [false,true,false,false]
        else if(screenName === "$$$")
            buttonStates = [false,false,true,false]
        else if(screenName === "$$$$")
            buttonStates = [false,false,false,true]
        
        dispatch({type: "CHANGE_PRICE", value:screenName, buttonStates})
    }
 
    // React.useLayoutEffect( () => {
    //     console.log("SUPOSE")
    //     if (stored.Type.type !== fromScreen)
    //         changeType(price)

    // },[price])

    return(
        <View style={{flex:1,borderBottomWidth: 1,borderColor: dividerColor,paddingBottom: 10}}>
            <View style={{flex:1,paddingBottom: 10}}>
                <Text>Price</Text>
            </View>
            <View style={{flex:3,flexDirection: "row"}}>
                <TouchableOpacity
                    style={[styles.letftButton,{backgroundColor:  stored.Price.buttonStates[0]? activeColor : "white"}]} 
                    onPress={() => changePrice("Free")}
                >
                    <Text style={[styles.buttonText,{color: stored.Price.buttonStates[0]? "white" : "black"}]}>
                        Free
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.middleButton,{backgroundColor: stored.Price.buttonStates[1]? activeColor : "white"}]} 
                    onPress={() => changePrice("$$")}
                >
                    <Text style={[styles.buttonText,{color: stored.Price.buttonStates[1]? "white" : "black"}]}>
                        $$
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.middleButton,{backgroundColor: stored.Price.buttonStates[2]? activeColor : "white"}]} 
                    onPress={() => changePrice("$$$")}
                >
                    <Text style={[styles.buttonText,{color: stored.Price.buttonStates[2]? "white" : "black"}]}>
                        $$$
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.rightButton,{backgroundColor: stored.Price.buttonStates[3]? activeColor : "white"}]} 
                    onPress={() => changePrice("$$$$")}
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
        flex:1,
        textAlign: "center",
        textAlignVertical: "center",
    },
})

export default Filter;