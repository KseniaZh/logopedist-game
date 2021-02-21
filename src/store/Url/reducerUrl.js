import {
} from "./types";

const initialState = {
    url_User:'http://localhost:5000/api/User',
    url_User_GET_login: `http://localhost:5000/api/User/GetByLogin`,
    url_User_POST: `http://localhost:5000/api/User/add`,
    url_User_PUT: `http://localhost:5000/api/User/update`,
    url_User_DELETE: `http://localhost:5000/api/User/delete/`,
    url_ViewType: "http://localhost:5000/api/ViewType",
    url_ViewType_POST: `http://localhost:5000/api/ViewType/add`,
    url_ViewType_PUT: `http://localhost:5000/api/ViewType/update`,
    url_EltypeClass: "http://localhost:5000/api/EltypeClass",
    url_EltypeClass_POST: `http://localhost:5000/api/EltypeClass/add`,
    url_EltypeClass_PUT: `http://localhost:5000/api/EltypeClass/update`,
    url_EltypeClass_DELETE: `http://localhost:5000/api/EltypeClass/delete/`,
            };



const stateUrl = (state = initialState, action) => {

    switch (action.type) {
 
        default:
            return state;
    }
}
export default stateUrl