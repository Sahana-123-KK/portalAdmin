import React, { useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import EmployeeInfo from '../../data/data'
// import "./employee.css"
import "./employee.css"
import Fuse from "fuse.js"
import employeeInfo from '../../data/data'

export default function 
Employee(props) {

  const [search, setSearch] = useState("");
  let query = "";

  function setInput(e){
    query = e.target.value;
    setSearch(query)


  }

  console.log(employeeInfo)


  const fuse = new Fuse(employeeInfo, {
    keys:["name", "experience"],
    includeScore:true
  });


  const results = fuse.search(search);

  console.log(results);
  // const item = results.item
  // console.log(item)
  const finalResults = (search !=="" ?results : employeeInfo)
  console.log(finalResults);
  
  return (
    <div>
        <Navbar  log={props.log} setlog={props.setlog} />

        <h2 className='text-center heading' >This is employees list </h2>
        <form className="d-flex input-employee" role="search">

        <input className="form-control me-2 " onChange={setInput} type="search" placeholder="Search Employee details" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>


    <div className="container all-employees">


      {
        
        // console.log(finalResults.name)
        finalResults.map((data)=>{
          return (
            // console.log(details.name);
            
            <div className='employee'>
              <h3 className='my-3 text-primary names' > <i class="bi h2 bi-person"></i> {search !== "" ? data.item.name : 
              data.name} </h3>
              
              
              <h5 className='' > <span className='text-secondary' > Age :</span> {search !== "" ? data.item.age : data.age} </h5>
              
              <h5> <span className='text-secondary' > Years of Experience :</span> {search !== "" ? data.item.experience  : data.experience} </h5>

              <h5 className='text-success'> <span className='text-secondary' > Salary :</span> {search !== "" ? data.item.salary  : data.salary} </h5>

              </div>



)
})
}

</div>

    </div>
  )
}
