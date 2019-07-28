import { GET_USER_INFO, GET_USER_INFO_SUCCESS } from "../actions/userInfo";

const userinfoInitState = {
    name: "",
    email: "",
    phone: "",

}

const UserInfoReducer = (state = userinfoInitState, action) => {
    switch(action.type) {
        case GET_USER_INFO_SUCCESS: {
            const data = action.data;
            return  {
                name: data.name,
                email: data.email,
                phone: data.phone,
               }
        }
           
        default:
            return state;
    }
}

export default UserInfoReducer;