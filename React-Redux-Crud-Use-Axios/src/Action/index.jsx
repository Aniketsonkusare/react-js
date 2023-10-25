import { useState } from "react";
import { GetApiDetails,PostApiDetails,DeleteApiDetails, UpdateApiDetails,UpdateApiDetailsn } from "../API/AxiosRequest";
import { useEffect } from "react";

export const GetApiAction = () => {
    return function(dispatch)
    {
        return GetApiDetails().then((res) => {
            console.log(res);
            dispatch({
                type: "GET_DETAILS",
                payload: res.data,
            })
        })
    }
}

export const PostApiAction = (request) => {
    return function (dispatch) {
        return PostApiDetails(request).then((res)=>{
            dispatch({
                type: 'POST_DETAILS',
                payload: '',
            })  
        })
    }
}

export const DeleteApiAction = (id) => {
    return function(dispatch)
    {
        return DeleteApiDetails(id).then((res)=>{
            console.log("delete...",res);
            dispatch({
                type: "DELETE_DETAILS",
                payload: res.data
            })
        })
    }
}

export default(props) => {
    const[DetailsById,setDetailsById] = useState({});
    const GetDetailsById = (requestId) => {
        return UpdateApiDetails(requestId).then((res)=>{
            console.log("Perticular id data...",res);
            setDetailsById(res)
        })
    }
    useEffect(()=>{
        GetDetailsById(props)
    },[])
    return [DetailsById]
}

export const UpdateApiAction = (request,id) => {
    return function (dispatch) {
        dispatch({
            type: 'UPDATE_DETAILS',
            payload: false,
        });

        return UpdateApiDetailsn(request,id).then((res)=>{
            console.log("called...",res);
            dispatch({
                type: 'UPDATE_DETAILS',
                payload: true,
            })
        })
    }
}