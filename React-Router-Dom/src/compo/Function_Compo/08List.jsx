import React, { useState } from 'react'
import Lists from './lists'
import Previous from './16Previous';
function List() {
    const[data,setData] = useState(Lists)
    console.log(data);
  return (
    <>
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <table   className="table">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Age</td>
                                <td>Occupation</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((ele,i)=>{
                                console.log(ele);
                                return(
                                <tr key={i}>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.age}</td>
                                    <td>{ele.occupation}</td>
                                </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Previous/>
    </>
  )
}

export default List
