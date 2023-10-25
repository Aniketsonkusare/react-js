import React, { useState } from 'react'
import { PostApiAction } from '../Action'
import { useDispatch } from 'react-redux'

function Home(){

    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[phone,setPhone] = useState('')
    const[country,setCountry] = useState('')

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
        dispatch(PostApiAction(finaldata))
    }

  return (
    <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" onChange={namehandler} name='name'/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputPassword1" onChange={emailhandler} name='email'/>
                        </div>
                        <div className="mb-3 ">
                            <label className="form-lable" htmlFor="exampleCheck1">Phone</label>
                            <input type="number" className="form-control" id="exampleCheck1" onChange={phonehandler} name='phone'/>
                        </div>
                        <div className="mb-3 ">
                            <label className="form-lable" htmlFor="exampleCheck1">Country</label>
                            <input type="text" className="form-control" id="exampleCheck2" onChange={countryhandler} name='country'/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(e)=>ClickHndl(e)}>Submit</button>
                </form>
                </div>
            </div>
        </div>
    </>
    )
}

export default Home
