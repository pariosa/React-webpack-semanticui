import {
  UPDATE_BASE_SPEED,
  UPDATE_BASE_SPEED_ARMORED,
  UPDATE_BASE_SPEED_SQ,
  UPDATE_BASE_SPEED_ARMORED_SQ,
  UPDATE_FLY_SPEED,
  UPDATE_FLY_MANEUVERABILITY,
  UPDATE_SWIM_SPEED,
  UPDATE_CLIMB_SPEED,
  UPDATE_BURROW_SPEED,
  UPDATE_SPEED_TEMP_MOD,
  LOAD_ENTIRE_CHARACTER
} from "../constants/actionTypes";
const initialState = {
  baseSpeed:"25",
  baseSpeedArmored:"20",
  baseSpeedSq:"10",
  baseSpeedArmoredSq:"8",
  flySpeed:"0",
  flyManeuverability:"none",
  swimSpeed:"15",
  climbSpeed:"10",
  burrowSpeed:"5",
  tempMod:"None"
}
const speedReducer = (state = initialState, action) => { 
  switch (action.type) { 
    case UPDATE_BASE_SPEED:
      return {...state, baseSpeed: action.payload.target.value};
    case UPDATE_BASE_SPEED_ARMORED:
      return {...state, baseSpeedArmored: action.payload.target.value};
    case UPDATE_BASE_SPEED_SQ:
      return {...state, baseSpeedSq: action.payload.target.value};
    case UPDATE_BASE_SPEED_ARMORED_SQ:
      return {...state, baseSpeedArmoredSq: action.payload.target.value};
    case UPDATE_FLY_SPEED:
      return {...state, flySpeed: action.payload.target.value};
    case UPDATE_FLY_MANEUVERABILITY:
      return {...state, flyManeuverability: action.payload.target.value};
    case UPDATE_SWIM_SPEED:
      return {...state, swimSpeed: action.payload.target.value};
    case UPDATE_CLIMB_SPEED:
      return {...state, climbSpeed: action.payload.target.value};
    case UPDATE_BURROW_SPEED: 
      return {...state, burrowSpeed: action.payload.target.value};
    case UPDATE_SPEED_TEMP_MOD:  
      return {...state, tempMod: action.payload.target.value};
    case  LOAD_ENTIRE_CHARACTER:
      return {... action.payload.speed}
  	default: 
  	 return state;
  }
}

export default speedReducer;