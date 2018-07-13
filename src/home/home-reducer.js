export default function (state={
	home: null
}, action) {
 let stateCopy = {...state};
 switch (action.type) {
  case 'GET_HOME_SUCCESSFUL':
    return {...stateCopy};
  case 'GET_HOME_FAILURE':
     return {...stateCopy};
   default:
     return {...stateCopy};
 }
}
