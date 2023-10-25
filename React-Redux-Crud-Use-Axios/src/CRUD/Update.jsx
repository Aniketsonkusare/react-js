import React, { useState } from 'react'
import { PostApiAction,UpdateApiAction } from '../Action'
import { useDispatch } from 'react-redux'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react'
import GetDetailsById from '../Action/index'

function Update() {

    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[phone,setPhone] = useState('')
    const[country,setCountry] = useState('')

    const {id} = useParams();
    const [getDetails] = GetDetailsById(id);

    useEffect(()=>{
        const data = () =>{
            console.log(data);
            if (getDetails.data) {
                setName(getDetails.data.name)
                setEmail(getDetails.data.email)
                setPhone(getDetails.data.phone)
                setCountry(getDetails.data.country)
            }
        }
        data();
    },[getDetails.data])
    const namehandler = (e) => {
        setName(e.target.value)
    }
    const emailhandler = (e) => {
        setEmail(e.target.value)
    }
    const phonehandler = (e) => {
        setPhone(e.target.value)
    }
    const countryhandler = (e) => {
        setCountry(e.target.value)
    }
    const dispatch = useDispatch();
    
    const ClickHndl = (e) => {
        const finaldata = {
            name: name,
            email: email,
            phone: phone,
            country: country
        }
        // dispatch(PostApiAction(finaldata,id))
        dispatch(UpdateApiAction(finaldata,id))
    }

  return (
    <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" onChange={namehandler} name='name' defaultValue={name}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputPassword1" onChange={emailhandler} name='email'defaultValue={email}/>
                        </div>
                        <div className="mb-3 ">
                            <label className="form-lable" htmlFor="exampleCheck1">Phone</label>
                            <input type="number" className="form-control" id="exampleCheck1" onChange={phonehandler} name='phone' defaultValue={phone}/>
                        </div>
                        <div className="mb-3 ">
                            <label className="form-lable" htmlFor="exampleCheck1">Country</label>
                            <input type="text" className="form-control" id="exampleCheck2" onChange={countryhandler} name='country' defaultValue={country}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(e)=>ClickHndl(e)}>Submit</button>
                </form>
                </div>
            </div>
        </div>
    </>
    )
}

export default Update
