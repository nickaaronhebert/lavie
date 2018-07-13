export const GET_HOME = 'GET_HOME'
export const GET_HOME_SUCCESS = 'GET_HOME_SUCCESS'
export const GET_HOME_FAILURE = 'GET_HOME_FAILURE'

export function getHome(data) {
	return {
		type: GET_HOME,
		payload: data	
	}
	
}
