const initialData = {
    details: [],
    isResponse: false,
    isDeleted: false,
    isUpdate: false
}

const reducer = (state=initialData,action)=>{
    switch (action.type) {
        case 'GET_DETAILS':
            return{
                details: action.payload
            }
        case 'POST_DATAILS':
            return{
                isResponse: action.payload
            }
        case 'DELETE_DETAILS':
            return{
                isDeleted: action.payload
            }
        case 'UPDATE_DETAILS':
            return{
                isUpdate: action.payload
            }
        default:
            return state;
    }
}   

export default reducer;