import React, { useState } from 'react'

 function ProfileForm(submit) {
const [profile, setProfile]=useState({
  firstname:"",
  lastname:"",
  email:"",
  phone:""
});

<const handler =(event) =>{
  setProfile((prev)=>({
    ...prev,
    [event.target.name]: event.target.value
  }))
}

const handleForm =(e) =>{
  e.preventDefault();
submit(profile)
}


  return (





<label>
Fist Name
<input name='firstname' type="text" onChange={}></input> 
</label>







    
    
  )
}
