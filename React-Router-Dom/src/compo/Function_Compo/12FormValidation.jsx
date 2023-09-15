import React, { useState } from "react";

function FormValidation() {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[pwd,setPwd] = useState('')

    const Blur = () =>{
        if (name == '') {
            alert("please enter the name")
        }
        else if (email == '') {
            alert("please enter the email")
        }
        else if (pwd == '') {
            alert("please enter the password")
        }
    }
  return (
    <>

      <div className="container mt-5">
        <form action="" onSubmit={Blur}>
            <table className="table"> 
                <tr>
                    <td><tr>Name:</tr></td>     
                    <td><input type="text" name="name" id="name" className="form form-control" onChange={(e) =>{setName(e.target.value)}} /></td>
                </tr>
                <tr>
                    <td><tr>Email:</tr></td>     
                    <td><input type="email" name="email" id="email" className="form form-control" onChange={(e) =>{
                    setEmail(e.target.value)}} /></td>
                </tr>
                <tr>
                    <td><tr>Password:</tr></td>     
                    <td><input type="password" name="name" id="name" className="form form-control" onChange={(e) =>{setPwd(e.target.value)}}/></td>
                </tr>
                <tr>
                    <input type="submit" className="btn btn-primary mt-5" onChange={(e) =>{(e.target.value)}}/>
                </tr>
            </table>
        </form>
      </div>
    </>
  );
}

export default FormValidation;