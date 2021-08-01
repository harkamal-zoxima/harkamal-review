import {createActions} from "reduxsauce"

const {Types, Creators} = createActions({
    //login action
    changeLoginForm: ['payload'],
	loginFormLoading: null,
	loginFormLoadingStop: null,
	submitLoginForm: ['payload'],
	submitLoginFormSuccess: ['payload'],
	submitLoginFormFailure: null,

    //user interaction
    setUserDetails: ['payload'],
	changeSelectedSection: ['payload'],
	changeSelectedSectionSuccess: ['payload'],

	//logout action
	logout: ['payload'],
	logoutSuccess: ['payload'],
	logoutFailure: null,
})

export const UserTypes = Types
export default Creators