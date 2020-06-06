import {createStore} from "redux";

const INITIAL_STATE = {
    SortBy:"Ratings",
    Type: "All",
    Price: "Free",
    Options: {}
}

function reducer(state = INITIAL_STATE,action){
    switch(action.type){
        case "ADD":
            return [...state,"love"]
        default:
            return state;
    }
}


export default createStore(reducer);