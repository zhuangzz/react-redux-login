let  account = {
	isAuthenticated:false,
	currentUser:""
}

export default function accountReducer(state = account, action) {
  switch (action.type) {
    case 'XXX':
      return state
    default:
      return state;
  }
}