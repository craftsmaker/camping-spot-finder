import {createStore} from "redux";

const INITIAL_STATE = {
    SortBy:{
        type: "Ratings",
        buttonStates: [false,true,false],
    },
    Type: {
        type: "All",
        buttonStates: [true,false,false],
    },
    Price: {
        type: "Free",
        buttonStates: [true,false,false],
    },
    Options: {
        showSpotsFull: false,
        showHighlyRatedSpots: false,
        showOnlyFreeSpots:false,
    }
}

function reducer(state = INITIAL_STATE,action){
    switch(action.type){
        case "TOGGLE_ONLY_FREE_SPOTS":
            return {...state, Options: {...state.Options, showOnlyFreeSpots: !state.Options.showOnlyFreeSpots}}
        case "TOGGLE_HIGHLY_RATED_SPOTS":
            return {...state, Options: {...state.Options, showHighlyRatedSpots: !state.Options.showHighlyRatedSpots}}
        case "TOGGLE_SPOTS_FULL":
            return {...state, Options: {...state.Options, showSpotsFull: !state.Options.showSpotsFull}}
        case "CHANGE_PRICE":
            return {...state, Price: {...state.SortBy, type: action.value,buttonStates: action.buttonStates}};
        case "CHANGE_TYPE":
            return {...state, Type: {...state.SortBy, type: action.value,buttonStates: action.buttonStates}};
        case "CHANGE_SORT_BY":
            return {...state, SortBy: {...state.SortBy, type: action.value,buttonStates: action.buttonStates}};
        case "CHANGE_ONLY_TYPE":
            return {...state, Type: {...state.SortBy, type: action.value}};
        default:
            return state;
    }
}


export default createStore(reducer);