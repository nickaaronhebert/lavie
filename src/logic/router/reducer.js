import * as actions from './actions'; 
export default function (state={
	items: [],
	item: null
}, action) {
 let stateCopy = {...state};
 switch (action.type) {
  case actions.FETCH_ONE_SUCCESS:
  	stateCopy.item = action.payload;
    return {...stateCopy};
  case actions.FETCH_MANY_SUCCESS:
  	stateCopy.items = action.payload;
    return {...stateCopy};
  default:
     return {...stateCopy};
 }
}