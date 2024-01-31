import React, { useState } from "react";
import axios from "axios";
import './Usersignup.css';


export default function Usersignup(){
  
  const[petType, setPetType] = useState('');
  const[petname, setPetname] = useState('');
  const[species, setSpecies] = useState('');
  const[age, setAge] = useState('');
  const[gender, setGender] = useState('');
  const[vaccinated, setVaccinated] = useState('');
  const[fullname, setFullname] = useState('');
  const[email, setEmail] = useState('');
  const[pwd, setPwd] = useState('');
  const[confirmpwd, setConfirmpwd] = useState('');
  const [phno, setphno] = useState('');
  const[city, setCity] = useState('');
  const[errorMessage, setErrorMessage] = useState('');
  const[error,setError] = useState('');
  
  const submit = async()=>{
    
    const data = {
      petType,
      petname,
      species,
      age,
      gender,
      vaccinated,
      fullname,
      email,
      pwd,
      confirmpwd,
      city,  
      phno
    };
    try{
       setError(false);
       const digits = /[0-9]/;
       const emaildigit = /^[0-9]/;
      const alphabets = /[a-z]/;
      const specialchars = /[!@#$%^&*()_+|}{:"?><}]/;
       const emailspecialchars = /[!#$%^&*()_+|}{":?><}]/;
       const emailend = /[@gamil.com | @Yahoo.com]/;
      
       if(digits.test(petType))
         throw new Error("Enter valid petType");
       if(digits.test(petname))
         throw new Error("Enter valid petname");
       if(digits.test(species))
        throw new Error("Enter valid species");
      if((age.length >2))
              throw new Error("Enter valid age");
      if(alphabets.test(vaccinated)) 
         throw new Error("Enter valid option");
       if(digits.test(fullname) || specialchars.test(fullname))
         throw new Error("Enter valid full name");
         if(emaildigit.test(email) || emailspecialchars.test(email))
         throw new Error("Enter valid Email")
         if(pwd !== confirmpwd)
        throw new Error("The Pwd and Confirmpwd should match")
       if(alphabets.test(phno) || specialchars.test(phno) || phno.length !== 10)
         throw new Error("Enter valid Phno")
         if(digits.test(city))
         throw new Error("Enter valid city");
         
      
      
         const response = await axios.post('http://localhost:9091/petex/singup', data, {
          
        
        });
        
         setPetType('');
      setPetname('');
      setSpecies('');
      setAge('');
      setGender('');
      setVaccinated('');
      setFullname('');
      setCity('');
      setEmail('');
      setPwd('');
      setConfirmpwd('');
      setphno('');

      alert("Customerregistration successful");
      console.log(response);
      
    }
    catch(e){
      setError(true);
      setErrorMessage(e.message);
      }
    
  }
  
  return(   
   <>
      <div className="DRcontainer d-flex flex-row">
        <div className="DRcard">
          <img className="DRimage" src="#"></img>
          <p>Please fill in the details to register yourself.</p>
        </div>
        <div>
        <table className="Doctable">
          <tr>
          <td>Pet type :</td>
<td>
  <select
    id='petType'
    className="form-select form-select-sm"
    value={petType}
    onChange={(e) => setPetType(e.target.value)} // Updated function name
    aria-label=".form-select-sm example"
  >
    <option value="" selected></option> {/* Use value attribute */}
    <option value="Dogs">Dogs</option> {/* Specify values for options */}
    <option value="Cats">Cats</option> {/* Specify values for options */}
    <option value="Birds">Birds</option> {/* Specify values for options */}
  </select>
</td>

              </tr>                
                   <tr>
            <td>Pet Name :</td>
            <td><input type="text" id="petname" required value={petname} onChange={(e)=>setPetname(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Species :</td>
            <td><input type="text" id="Species" required value={species} onChange={(e)=>setSpecies(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>age :</td>
            <td><input type="number" placeholder="In years" required id="age" value={age} onChange={(e)=>setAge(e.target.value)}></input></td>
          </tr>
          <tr>
          <td>gender :</td>
            <td> <select id='gender' class="form-select form-select-sm" value={gender} onChange={(e) => setGender(e.target.value)} aria-label=".form-select-sm example" >
            <option selected></option>

              <option>Male </option>
              <option>female</option>
              
              
            </select></td>
              </tr>    
          
          

          <tr>
            <td>vaccinated :</td>
            <td> <select id='vaccinated' class="form-select form-select-sm" value={vaccinated} onChange={(e) => setVaccinated(e.target.value)} aria-label=".form-select-sm example" >
            <option selected></option>

                <option>YES</option>
                <option>NO</option>
                </select></td>
          </tr>
          <tr>
            <td>full name :</td>
            <td><input type="text" id="full name" required value={fullname} onChange={(e)=>setFullname(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>email :</td>
            <td><input type="email" id="email" required value={email} onChange={(e)=>setEmail(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Phno :</td>
            <td><input type="number" id="Phno" required value={phno} onChange={(e)=>setphno(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Create pwd :</td>
            <td><input type="text" id="Pwd" value={pwd} required onChange={(e)=>setPwd(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Confirm pwd:</td>
            <td><input type="text" id="Confirmpwd" required value={confirmpwd} onChange={(e)=>setConfirmpwd(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>city</td>
            <td><input type="text" id="city" required value={city} onChange={(e)=>setCity(e.target.value)}></input></td>
          </tr>
          

         
        </table>
        

        <button type='button' className="DRbtn" onClick={submit}>submit</button>
        {error && <p style={{ color: "royalblue" }}>{errorMessage}</p>}

        </div>
      </div>
    </>
  );
}