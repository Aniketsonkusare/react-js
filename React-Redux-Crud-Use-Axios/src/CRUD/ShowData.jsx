import React, { useEffect } from 'react'
import {GetApiAction,DeleteApiAction} from '../Action/index'
import {useSelector,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

function ShowData() {
    const dispatch = useDispatch()
    const responsedata = useSelector((state) => state.reducer.details)
    const deletedata = useSelector((state) => state.reducer.isDeleted)

    useEffect(()=>{
        dispatch(GetApiAction())
    },[dispatch])

    if (deletedata) {
        window.location.reload(false);
    }

    const result = responsedata ? responsedata.map((data)=>{
        return<>
            <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.country}</td>
                <td>
                    <button className='btn btn-danger' onClick={()=>dispatch(DeleteApiAction(data.id))}>Delete</button>
                </td>
                <td>
                    <Link to={`update/${data.id}`}>
                    <button className='btn btn-success' type='button'>Update</button>
                    </Link>
                </td>
            </tr>
        </>
    }):null
  return (
    <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <table className='table'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Country</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                        
                           
                                <tbody>
                                    {result}
                                </tbody>
                           
                        
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default ShowData;
