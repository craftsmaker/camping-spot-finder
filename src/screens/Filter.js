import React from "react";
import {View,Text,Switch,TouchableOpacity,StyleSheet} from "react-native";

let activeColor = "#FF7657";
let dividerColor = "#F1F2F5";

const Filter = ({navigation: {navigate}}) => {  
    return(
        <View style={{flex:1,backgroundColor: "#FFF",padding:10}}>
            <View style={{flex:1,borderBottomWidth: 1,borderColor: dividerColor,paddingBottom: 25}}>
                <View style={{flex:1}}>
                    <Text>Sort By</Text>
                </View>
                <View style={{flex:1,flexDirection: "row"}}>
                    <TouchableOpacity style={styles.leftActiveButton}>
                        <Text style={styles.activeText}>Distance</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.middleInactiveButton} onPress={e => console.log(e)}>
                        <Text style={styles.inactiveText}>Ratings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rightInactiveButton}>
                        <Text style={styles.inactiveText}>Reviews</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:1,borderBottomWidth: 1,borderColor: dividerColor,paddingBottom: 25,paddingTop: 10}}>
                <View style={{flex:1,paddingBottom: 10}}>
                    <Text>Type</Text>
                </View>
                <View style={{flex:3,flexDirection: "row"}}>
                    <TouchableOpacity style={styles.leftActiveButton}>
                        <Text style={styles.activeText}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.middleInactiveButton}>
                        <Text style={styles.inactiveText}>Tenting</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rightInactiveButton}>
                        <Text style={styles.inactiveText}>RV Camping</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:1,borderBottomWidth: 1,borderColor: dividerColor,paddingBottom: 10}}>
                <View style={{flex:1,paddingBottom: 10}}>
                    <Text>Price</Text>
                </View>
                <View style={{flex:3,flexDirection: "row"}}>
                    <TouchableOpacity style={styles.leftActiveButton}>
                        <Text style={styles.activeText}>Free</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.middleInactiveButton}>
                        <Text style={styles.inactiveText}>$$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.middleInactiveButton}>
                        <Text style={styles.inactiveText}>$$$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rightInactiveButton}>
                        <Text style={styles.inactiveText}>$$$$</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:2}}>
                <View style={{flex:1,justifyContent: "center"}}>
                     <Text style={{fontSize: 16}}>More Options</Text>
                </View>
                <View style={{flex:1,flexDirection: "row"}}>
                    <View style={{flex:2,justifyContent: "center"}}>
                        <Text style={{fontSize: 12}}>Show spots that are full</Text>
                    </View>
                    <View style={{flex:2,justifyContent: "center"}}>
                        <Switch/>
                    </View>
                </View>
                <View style={{flex:1,flexDirection: "row"}}>
                    <View style={{flex:2,justifyContent: "center"}}>
                        <Text style={{fontSize: 12}}>Show only highly rated spots</Text>
                    </View>
                    <View style={{flex:1, justifyContent: "center"}}>
                        <Switch/>
                    </View>
                </View>
                <View style={{flex:1,flexDirection: "row"}}>
                    <View style={{flex:2,justifyContent: "center"}}>
                        <Text style={{fontSize: 12}}>Show only free spots</Text>
                    </View>
                    <View style={{flex:2,justifyContent: "center"}}>
                        <Switch />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    leftActiveButton:{
        flex:1,
        justifyContent: "center",
        backgroundColor: activeColor,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    middleInactiveButton:{
        flex:1,
        justifyContent: "center",
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor: activeColor
    },
    rightInactiveButton:{
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
    inactiveText:{
        textAlign: "center"
    },
})

export default Filter;