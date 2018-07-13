export default function (state={
	currentUser: null,
	sessionToken: null,
  authenticated: false
}, action) {
 let stateCopy = {...state};
 switch (action.type) {
  default:
     return {...stateCopy};
 }
}